import { describe, it, expect } from 'vitest';
import { initDB } from '../db.js';

describe('adatbázis inicializálás', () => {
  it('létrehozza a táblákat és egyszerű insert/select műveletek működnek memóriában', async () => {
    const db = await initDB(':memory:');

    const res = await db.run(`INSERT INTO allatok (nev, faj, fajta, kor) VALUES (?, ?, ?, ?)`, ['Teszt', 'Kutya', 'keverék', 2]);
    expect(res.lastID).toBeGreaterThan(0);

    const rows = await db.all('SELECT * FROM allatok WHERE id = ?', [res.lastID]);
    expect(rows).toHaveLength(1);
    expect(rows[0].nev).toBe('Teszt');

    const msgRes = await db.run(`INSERT INTO uzenetek (nev, email, uzenet) VALUES (?, ?, ?)`, ['A', 'a@b', 'hello']);
    expect(msgRes.lastID).toBeGreaterThan(0);
    const msgs = await db.all('SELECT * FROM uzenetek WHERE id = ?', [msgRes.lastID]);
    expect(msgs[0]).toBeDefined();
  });

  it('támogatja a frissítést és törlést az állatoknál', async () => {
    const db = await initDB(':memory:');
    const r = await db.run(`INSERT INTO allatok (nev, faj) VALUES (?, ?)`, ['UpdDel', 'Macska']);
    const id = r.lastID;
    await db.run('UPDATE allatok SET nev = ? WHERE id = ?', ['Updated', id]);
    const row = await db.get('SELECT * FROM allatok WHERE id = ?', [id]);
    expect(row.nev).toBe('Updated');
    await db.run('DELETE FROM allatok WHERE id = ?', [id]);
    const after = await db.get('SELECT * FROM allatok WHERE id = ?', [id]);
    expect(after).toBeUndefined();
  });
});
