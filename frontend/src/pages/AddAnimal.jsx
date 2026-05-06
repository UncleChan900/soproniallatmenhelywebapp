import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

export default function AddAnimal() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ nev: '', faj: 'Kutya', fajta: '', kor: '', nem: 'Hím', leiras: '', szuletesi_ev: '', meret: '', bekerules: '' });
  const [kep, setKep] = useState(null);

  function updateForm(mezo, ertek) {
    var ujForm = {
      nev: form.nev,
      faj: form.faj,
      fajta: form.fajta,
      kor: form.kor,
      nem: form.nem,
      leiras: form.leiras,
      szuletesi_ev: form.szuletesi_ev,
      meret: form.meret,
      bekerules: form.bekerules
    };
    ujForm[mezo] = ertek;
    setForm(ujForm);
  }

  useEffect(() => {
    const role = sessionStorage.getItem('role');
    if (role !== 'admin') navigate('/login');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const fd = new FormData();
      fd.append('nev', form.nev);
      fd.append('faj', form.faj);
      fd.append('fajta', form.fajta);
      fd.append('kor', form.kor);
  fd.append('szuletesi_ev', form.szuletesi_ev || '');
      fd.append('nem', form.nem);
  fd.append('meret', form.meret || '');
  fd.append('bekerules', form.bekerules || '');
      fd.append('leiras', form.leiras);
      if (kep) fd.append('kep', kep);

  await api.post('/allatok', fd, { headers: { 'Content-Type': 'multipart/form-data' } });
  
  try { sessionStorage.setItem('add_success', form.nev || 'Állat hozzáadva'); } catch (e) {}
  navigate('/admin');
    } catch (err) {
      console.error(err);
      alert('Hiba az állat hozzáadásakor.');
    }
  };

  return (
    <div style={{ maxWidth: 560, margin: '2rem auto', padding: '0 1rem' }}>
      <h2 style={{ marginBottom: 4 }}>Új állat hozzáadása</h2>
      <p style={{ color: '#666', marginBottom: 20 }}>Töltsd ki az alábbi mezőket az új állat rögzítéséhez.</p>

      <div className="card" style={{ padding: '24px 28px' }}>
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 14 }}>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <label>
              Név *
              <input placeholder="pl. Bodri" value={form.nev} onChange={function(e) { updateForm('nev', e.target.value); }} required />
            </label>
            <label>
              Faj *
              <select value={form.faj} onChange={function(e) { updateForm('faj', e.target.value); }}>
                <option>Kutya</option>
                <option>Macska</option>
              </select>
            </label>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <label>
              Fajta
              <input placeholder="pl. Labrador" value={form.fajta} onChange={function(e) { updateForm('fajta', e.target.value); }} />
            </label>
            <label>
              Nem *
              <select value={form.nem} onChange={function(e) { updateForm('nem', e.target.value); }}>
                <option>Hím</option>
                <option>Nőstény</option>
              </select>
            </label>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
            <label>
              Kor (év)
              <input type="number" min="0" placeholder="pl. 3" value={form.kor} onChange={function(e) { updateForm('kor', e.target.value); }} />
            </label>
            <label>
              Születési év
              <input type="number" placeholder="pl. 2021" value={form.szuletesi_ev || ''} onChange={function(e) { updateForm('szuletesi_ev', e.target.value); }} />
            </label>
            <label>
              Méret
              <select value={form.meret || ''} onChange={function(e) { updateForm('meret', e.target.value); }}>
                <option value="">-- válassz --</option>
                <option>Kicsi</option>
                <option>Közepes</option>
                <option>Nagy</option>
              </select>
            </label>
          </div>

          <label>
            Bekerülés dátuma
            <input type="date" value={form.bekerules || ''} onChange={function(e) { updateForm('bekerules', e.target.value); }} />
          </label>

          <label>
            Leírás
            <textarea placeholder="Rövid bemutatkozás az állatról..." rows={4} value={form.leiras} onChange={function(e) { updateForm('leiras', e.target.value); }} />
          </label>

          <label>
            Kép feltöltése
            <input type="file" accept="image/*" onChange={function(e) { setKep(e.target.files[0]); }} style={{ marginTop: 4 }} />
          </label>

          <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
            <button type="submit" style={{ background: '#2b7a78', color: '#fff' }}>Hozzáadás</button>
            <button type="button" onClick={function() { navigate('/admin'); }} style={{ background: '#bbb', color: '#111' }}>Mégse</button>
          </div>

        </form>
      </div>
    </div>
  );
}
