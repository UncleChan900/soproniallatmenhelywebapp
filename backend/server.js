import express from "express";
import cors from "cors";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { initDB } from "./db.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

const start = async () => {
  const db = await initDB();

    // Összes állat lekérése
    app.get("/api/allatok", async (req, res) => {
        const allatok = await db.all("SELECT * FROM allatok");
        res.json(allatok);
    });

    // Update animal - supports simple status change (JSON) and full edit (multipart/form-data with optional file)
    app.put("/api/allatok/:id", upload.single("kep"), async (req, res) => {
    // If only statusz provided (typical quick toggle from UI), update only status
    const { statusz, nev, faj, fajta, kor, nem, leiras } = req.body;

    try {
      // If request only contains statusz and no file, treat as status update
      const hasFile = !!req.file;
      const onlyStatus = !hasFile && statusz && Object.keys(req.body).length === 1;

      if (onlyStatus) {
        await db.run(
          "UPDATE allatok SET statusz = ? WHERE id = ?",
          [statusz, req.params.id]
        );
        return res.json({ message: "Státusz frissítve" });
      }

      // Build dynamic update for provided fields
      const fields = [];
      const params = [];

      if (nev !== undefined) { fields.push('nev = ?'); params.push(nev); }
      if (faj !== undefined) { fields.push('faj = ?'); params.push(faj); }
      if (fajta !== undefined) { fields.push('fajta = ?'); params.push(fajta); }
      if (kor !== undefined) { fields.push('kor = ?'); params.push(kor); }
      if (nem !== undefined) { fields.push('nem = ?'); params.push(nem); }
      if (leiras !== undefined) { fields.push('leiras = ?'); params.push(leiras); }
      if (hasFile) { fields.push('kep = ?'); params.push(`/uploads/${req.file.filename}`); }

      if (fields.length === 0) {
        return res.status(400).json({ message: 'Nincs frissítendő mező' });
      }

      params.push(req.params.id);
      const sql = `UPDATE allatok SET ${fields.join(', ')} WHERE id = ?`;
      await db.run(sql, params);

      return res.json({ message: 'Állat frissítve' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Hiba a mentés során' });
    }
    });

  // Új állat hozzáadása
  app.post("/api/allatok", upload.single("kep"), async (req, res) => {
    const { nev, faj, fajta, kor, nem, leiras, meret, bekerules, szuletesi_ev } = req.body;
    const kep = req.file ? `/uploads/${req.file.filename}` : null;

    const result = await db.run(
      `INSERT INTO allatok (nev, faj, fajta, kor, nem, leiras, kep, meret, bekerules, szuletesi_ev)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [nev, faj, fajta, kor, nem, leiras, kep, meret, bekerules, szuletesi_ev]
    );

    res.json({ id: result.lastID });
  });

  // Delete an animal (admin)
  app.delete('/api/allatok/:id', async (req, res) => {
    await db.run('DELETE FROM allatok WHERE id = ?', [req.params.id]);
    res.json({ message: 'Állat törölve' });
  });

  // Egyszerű login (demo admin)
    app.post("/api/login", async (req, res) => {
    const { email, jelszo } = req.body;

    if (email === "dragi" && jelszo === "123") {
        return res.json({
        role: "admin",
        token: "admin-token"
        });
    }

    res.status(401).json({ message: "Hibás adatok" });
    });

  // Örökbefogadási űrlap beküldése
  app.post("/api/orokbefogadas", async (req, res) => {
    const { allatid, nev, email, uzenet } = req.body;

    await db.run(
      `INSERT INTO orokbefogadasok (allatid, nev, email, uzenet)
       VALUES (?, ?, ?, ?)`,
      [allatid, nev, email, uzenet]
    );

    // Mark the animal as having a pending adoption request so other users see it's pending
    try {
      await db.run('UPDATE allatok SET statusz = ? WHERE id = ?', ['függőben', allatid]);
    } catch (e) {
      console.error('Hiba státusz frissítés közben:', e);
    }

    res.json({ message: "Űrlap elküldve" });
  });

  // List all adoption requests (for admin)
  app.get('/api/orokbefogadas', async (req, res) => {
    const rows = await db.all('SELECT * FROM orokbefogadasok');
    res.json(rows);
  });

  // Update adoption request (approve/deny)
  app.put('/api/orokbefogadas/:id', async (req, res) => {
    const { jovahagyva } = req.body; // 0 = pending, 1 = approved, 2 = denied

    try {
      // Find related animal id
      const row = await db.get('SELECT allatid FROM orokbefogadasok WHERE id = ?', [req.params.id]);
      await db.run('UPDATE orokbefogadasok SET jovahagyva = ? WHERE id = ?', [jovahagyva, req.params.id]);

      if (row && row.allatid) {
        const aid = row.allatid;
        if (Number(jovahagyva) === 1) {
          // approved -> mark adopted
          await db.run('UPDATE allatok SET statusz = ? WHERE id = ?', ['örökbefogadva', aid]);
        } else if (Number(jovahagyva) === 2) {
          // denied -> make available again
          await db.run('UPDATE allatok SET statusz = ? WHERE id = ?', ['elérhető', aid]);
        } else {
          // pending or reset -> keep it available
          await db.run('UPDATE allatok SET statusz = ? WHERE id = ?', ['elérhető', aid]);
        }
      }

      res.json({ message: 'Kérelem frissítve' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Hiba a kérelem frissítésekor' });
    }
  });

  // Kapcsolat üzenet fogadása — egy email = egy beszélgetés (thread)
  app.post("/api/contact", async (req, res) => {
    const { nev, email, uzenet } = req.body;
    // Keresünk meglévő thread-et ehhez az email-hez
    const existing = await db.get('SELECT thread_id FROM uzenetek WHERE email = ? LIMIT 1', [email]);
    const tid = existing ? existing.thread_id : `${Date.now()}-${Math.floor(Math.random()*10000)}`;

    await db.run(
      `INSERT INTO uzenetek (nev, email, uzenet, thread_id, sender) VALUES (?, ?, ?, ?, 'user')`,
      [nev, email, uzenet, tid]
    );

    res.json({ message: "Üzenet elküldve", thread_id: tid });
  });

  // Üzenetek lekérése
  app.get('/api/uzenetek', async (req, res) => {
    const { thread_id, email, group } = req.query;

    if (thread_id) {
      const rows = await db.all('SELECT * FROM uzenetek WHERE thread_id = ? ORDER BY datum ASC', [thread_id]);
      return res.json(rows);
    }
    if (email) {
      const rows = await db.all('SELECT * FROM uzenetek WHERE email = ? ORDER BY datum ASC', [email]);
      return res.json(rows);
    }
    if (group === 'threads') {
      // Egy sor per email (legutolsó üzenet) az admin listanézethez
      const rows = await db.all(`
        SELECT u.* FROM uzenetek u
        INNER JOIN (
          SELECT email, MAX(id) as max_id FROM uzenetek GROUP BY email
        ) latest ON u.id = latest.max_id
        ORDER BY u.datum DESC
      `);
      return res.json(rows);
    }
    const rows = await db.all('SELECT * FROM uzenetek ORDER BY datum DESC');
    res.json(rows);
  });

  // Admin chat üzenet küldése egy thread-be
  app.post('/api/uzenetek/chat', async (req, res) => {
    const { thread_id, uzenet } = req.body;
    const row = await db.get('SELECT nev, email FROM uzenetek WHERE thread_id = ? LIMIT 1', [thread_id]);
    if (!row) return res.status(404).json({ message: 'Beszélgetés nem található' });
    const now = new Date().toISOString();
    await db.run(
      `INSERT INTO uzenetek (nev, email, uzenet, thread_id, sender, datum) VALUES (?, ?, ?, ?, 'admin', ?)`,
      [row.nev, row.email, uzenet, thread_id, now]
    );
    res.json({ message: 'Üzenet elküldve' });
  });

  // Admin: egész beszélgetés törlése (email alapján — minden üzenet az adott emailhez)
  app.delete('/api/uzenetek/thread/:thread_id', async (req, res) => {
    const { thread_id } = req.params;
    // Megkeressük az emailt a thread alapján, majd törlünk mindent azzal az emaillel
    const row = await db.get('SELECT email FROM uzenetek WHERE thread_id = ? LIMIT 1', [thread_id]);
    if (row) {
      await db.run('DELETE FROM uzenetek WHERE email = ?', [row.email]);
    } else {
      await db.run('DELETE FROM uzenetek WHERE thread_id = ?', [thread_id]);
    }
    res.json({ message: 'Beszélgetés törölve' });
  });

  app.listen(5000, () =>
    console.log("Szerver fut: http://localhost:5000")
  );
};

start();