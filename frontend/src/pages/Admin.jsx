import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

function Admin() {
  const navigate = useNavigate();
  const [allatok, setAllatok] = useState([]);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    const role = sessionStorage.getItem("role");
    if (role !== "admin") {
      navigate("/login");
    }

    api.get("/allatok").then(res => {
      setAllatok(res.data);
    });
    api.get('/orokbefogadas').then(res => {
      setRequests(res.data || []);
    });
  }, []);

  const statuszValtas = async (id, ujStatusz) => {
    await api.put(`/allatok/${id}`, { statusz: ujStatusz });
    const friss = await api.get("/allatok");
    setAllatok(friss.data);
  try { window.dispatchEvent(new Event('dataChanged')); } catch (e) {}
  };

  const mentAllat = async (id, formData) => {
    await api.put(`/allatok/${id}`, formData, { headers: { 'Content-Type': 'multipart/form-data' } });
    const friss = await api.get("/allatok");
    setAllatok(friss.data);
  };

  const kijelentkezes = () => {
  sessionStorage.clear();
  try { window.dispatchEvent(new Event('authChanged')); } catch (e) {}
  navigate("/");
  };

  const [requests, setRequests] = useState([]);

  const kutyak = allatok.filter(a => (a.faj || '').toString().toLowerCase().includes('kut'));
  const macskak = allatok.filter(a => (a.faj || '').toString().toLowerCase().includes('macs'));
  const egyeb = allatok.filter(a => !kutyak.includes(a) && !macskak.includes(a));

  return (
    <>
    <button
    style={{ background: "gray", marginBottom: "20px" }}
    onClick={kijelentkezes}
    >
    Kijelentkezés
    </button>
    {(() => {
      const msg = sessionStorage.getItem('add_success');
      if (!msg) return null;
      return (
        <div style={{ background: '#c6f0c6', border: '1px solid #5cb85c', padding: 12, marginBottom: 12, color: '#1a4d1a', fontWeight: 500 }}>
          <strong>Új állat hozzáadva:</strong> {msg}
          <button style={{ marginLeft: 12 }} onClick={() => { sessionStorage.removeItem('add_success'); window.location.reload(); }}>Bezár</button>
        </div>
      );
    })()}
      <h2 style={{ marginLeft: 15 }}>Admin felület</h2>

      <h3>Örökbefogadási kérelmek</h3>
  <div style={{ marginBottom: 20 }}>
        {(() => {
          if (!requests || requests.length === 0) return <p>Nincs függő kérelmünk.</p>;
          return (
            <div className="grid">
              {requests.filter(r => r.jovahagyva === 0).map(r => (
                <div key={r.id} className="card">
                  <h3>Kérelmet küldte: {r.nev}</h3>
                  <p>Kiválasztott állat ID-ja: <b>{r.allatid}</b></p>
                  <p>Üzenet: {r.uzenet}</p>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button onClick={async () => {
                      
                      await api.put(`/orokbefogadas/${r.id}`, { jovahagyva: 1 });
                      
                      await statuszValtas(r.allatid, 'örökbefogadva');
                      
                      try {
                        const favs2 = JSON.parse(localStorage.getItem('kedvencek')) || [];
                        const updated = favs2.map(a => a.id === r.allatid ? { ...a, requestStatus: 'approved' } : a);
                        localStorage.setItem('kedvencek', JSON.stringify(updated));
                      } catch (e) {}
                      
                      const [frissAllatok, frissReq] = await Promise.all([api.get('/allatok'), api.get('/orokbefogadas')]);
                      setAllatok(frissAllatok.data);
                      setRequests(frissReq.data || []);
                      try { window.dispatchEvent(new Event('dataChanged')); } catch (e) {}
                      alert('A kérés jóváhagyva és az állat örökbefogadottnak jelölve.');
                    }}>Engedélyez</button>

                    <button onClick={async () => {
                      await api.put(`/orokbefogadas/${r.id}`, { jovahagyva: 2 });
                      
                      try {
                        const favs2 = JSON.parse(localStorage.getItem('kedvencek')) || [];
                        const updated = favs2.map(a => a.id === r.allatid ? { ...a, requestStatus: 'denied' } : a);
                        localStorage.setItem('kedvencek', JSON.stringify(updated));
                      } catch (e) {}
                      const frissReq = await api.get('/orokbefogadas');
                      setRequests(frissReq.data || []);
                      try { window.dispatchEvent(new Event('dataChanged')); } catch (e) {}
                      alert('A kérés elutasítva.');
                    }}>Elutasít</button>
                  </div>
                </div>
              ))}
            </div>
          );
        })()}
      </div>

      <h3>Állatok kezelése</h3>

      <h4>Kutyák</h4>
      <div className="grid">
    {kutyak.length === 0 ? <p>Nincs kutya a listában.</p> : kutyak.map(allat => (
          <div key={allat.id} className="card">
      <h3>{allat.nev}</h3>
      <p>ID: <b>{allat.id}</b></p>
      <p>Státusz: <b>{allat.statusz}</b></p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <button onClick={() => statuszValtas(allat.id, "elérhető")}>
                  Elérhető
              </button>
              <button onClick={() => setEditing(allat)}>
                  Szerkesztés
              </button>
            </div>
          </div>
        ))}
      </div>

      <h4>Macskák</h4>
      <div className="grid">
    {macskak.length === 0 ? <p>Nincs macska a listában.</p> : macskak.map(allat => (
          <div key={allat.id} className="card">
      <h3>{allat.nev}</h3>
      <p>Állat ID: <b>{allat.id}</b></p>
      <p>Státusz: <b>{allat.statusz}</b></p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <button onClick={() => statuszValtas(allat.id, "elérhető")}>
                  Elérhető
              </button>
              <button onClick={() => setEditing(allat)}>
                  Szerkesztés
              </button>
            </div>
          </div>
        ))}
      </div>

      {egyeb.length > 0 && (
        <>
          <h4>Egyéb</h4>
          <div className="grid">
            {egyeb.map(allat => (
              <div key={allat.id} className="card">
                <h3>{allat.nev}</h3>
                <p>Állat ID: <b>{allat.id}</b></p>
                <p>Faj: {allat.faj || 'Ismeretlen'}</p>
                <p>Státusz: <b>{allat.statusz}</b></p>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  <button onClick={() => statuszValtas(allat.id, "elérhető")}>
                      Elérhető          
                  </button>
                  <button onClick={() => setEditing(allat)}>
                      Szerkesztés
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      {editing && (
        <div className="detail-overlay" onClick={() => setEditing(null)}>
          <div className="detail-modal card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 640 }}>
            <h3>Szerkesztés: {editing.nev}</h3>
            <form onSubmit={async (e) => {
              e.preventDefault();
              const fd = new FormData(e.target);
              try {
                await mentAllat(editing.id, fd);
                setEditing(null);
                alert('Állat adatai frissítve.');
              } catch (err) {
                console.error(err);
                alert('Hiba a mentéskor.');
              }
            }}>
              <input name="nev" defaultValue={editing.nev} placeholder="Név" required />
              <label>Faj<select name="faj" defaultValue={editing.faj}>
                <option>Kutya</option>
                <option>Macska</option>
              </select></label>
              <input name="fajta" defaultValue={editing.fajta} placeholder="Fajta" />
              <input name="kor" type="number" defaultValue={editing.kor} placeholder="Kor" />
              <input name="szuletesi_ev" type="number" defaultValue={editing.szuletesi_ev || ''} placeholder="Születési év" />
              <label>Nem<select name="nem" defaultValue={editing.nem}>
                <option>Hím</option>
                <option>Nőstény</option>
              </select></label>
              <label>Méret<select name="meret" defaultValue={editing.meret || ''}>
                <option value="">-- válassz --</option>
                <option>Kicsi</option>
                <option>Közepes</option>
                <option>Nagy</option>
              </select></label>
              <input name="bekerules" defaultValue={editing.bekerules || ''} placeholder="Bekerülés (YYYY-MM-DD)" />
              <textarea name="leiras" defaultValue={editing.leiras} placeholder="Leírás" />
              <label>Kép (új feltöltés esetén)
                <input name="kep" type="file" accept="image/*" />
              </label>
              <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                <button type="submit">Mentés</button>
                <button type="button" onClick={async () => {
                  if (!confirm('Biztosan törlöd az állatot? Ez végleges.')) return;
                  try {
                    await api.delete(`/allatok/${editing.id}`);
                    const friss = await api.get('/allatok');
                    setAllatok(friss.data);
                    setEditing(null);
                    alert('Állat törölve.');
                    try { window.dispatchEvent(new Event('dataChanged')); } catch (e) {}
                  } catch (err) {
                    console.error(err);
                    alert('Hiba törlés közben.');
                  }
                }} style={{ background: '#c33', color: '#fff' }}>Törlés</button>
                <button type="button" onClick={() => setEditing(null)} style={{ background: '#bbb', color: '#111' }}>Mégse</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Admin;