import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import api from "../api";
import AnimalCard from "../components/AnimalCard";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";

function Animals() {
  const { faj } = useParams();
  const [allatok, setAllatok] = useState([]);
  const [selected, setSelected] = useState(null);
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [requestForm, setRequestForm] = useState({ nev: '', email: '', uzenet: '' });

  const location = useLocation();

  function normalizeFaj(f) {
    if (!f) return "";
    return f.charAt(0).toUpperCase() + f.slice(1).toLowerCase();
  }

  const [szures, setSzures] = useState({
    faj: normalizeFaj(faj),
    nem: "",
    elerhetoseg: ""
  });

  function allatokBetoltes() {
    api.get("/allatok").then(res => {
      setAllatok(res.data || []);
    });
  }

  useEffect(() => {
    allatokBetoltes();
    window.addEventListener('dataChanged', allatokBetoltes);
    return () => window.removeEventListener('dataChanged', allatokBetoltes);
  }, []);

  useEffect(() => {
    setSzures(s => ({ ...s, faj: normalizeFaj(faj) }));
  }, [faj]);

  useEffect(() => {
    setSelected(null);
  }, [location.pathname]);

  useEffect(() => {
    if (!selected) return;
  }, [selected]);

  const szurtAllatok = allatok.filter(a => {
    if (szures.faj !== "" && a.faj !== szures.faj) return false;
    if (szures.nem !== "" && a.nem !== szures.nem) return false;
    if (szures.elerhetoseg !== "" && a.statusz !== szures.elerhetoseg) return false;
    if (a.statusz === 'örökbefogadva') return false;
    return true;
  });

  let title = "Állataink";
  if (faj === "kutya") title = "Kutyák";
  else if (faj === "macska") title = "Macskák";

  const isSpeciesView = Boolean(faj);

  function getField(key, sel) {
    if (!sel) sel = selected || {};
    const id = Number(sel.id) || 0;
    const year = new Date().getFullYear();

    if (key === 'nev') return sel.nev || 'Névtelen';
    if (key === 'faj') {
      if (sel.faj) return sel.faj;
      if (sel.kep && sel.kep.includes('/kuty')) return 'Kutya';
      if (sel.kep && sel.kep.includes('/cic')) return 'Macska';
      return 'Állat';
    }
    if (key === 'fajta') return sel.fajta || 'Keverék';
    if (key === 'kor') return sel.kor ? `${sel.kor} év` : `${(id % 6) + 1} év`;
    if (key === 'szuletesi_ev' || key === 'ev') {
      if (sel.szuletesi_ev) return sel.szuletesi_ev;
      if (sel.ev) return sel.ev;
      return year - Number(sel.kor || (id % 6) + 1);
    }
    if (key === 'bekerules') {
      if (sel.bekerules) return sel.bekerules;
      const months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
      return `${year - (id % 3)}-${months[id % 12]}-15`;
    }
    if (key === 'meret' || key === 'meretseg') {
      if (sel.meret) return sel.meret;
      return ['Kicsi', 'Közepes', 'Nagy'][id % 3];
    }
    if (key === 'nem') return sel.nem || (id % 2 === 0 ? 'Hím' : 'Nőstény');
    if (key === 'statusz') return sel.statusz || 'elérhető';
    if (key === 'leiras') return sel.leiras || 'Barátságos, szerethető állat, illik családi környezetbe.';

    const v = sel[key];
    return (v === undefined || v === null || v === '') ? 'Nincs adat' : v;
  }

  function orokbefogadasKattint(e) {
    e.stopPropagation();
    const favs = JSON.parse(localStorage.getItem('kedvencek')) || [];
    if (!favs.find(a => a.id === selected.id)) {
      favs.push(selected);
      localStorage.setItem('kedvencek', JSON.stringify(favs));
    }
    setShowRequestForm(true);
  }

  async function kerelemetKuld() {
    try {
      await api.post('/orokbefogadas', {
        allatid: selected.id,
        nev: requestForm.nev,
        email: requestForm.email,
        uzenet: requestForm.uzenet
      });

      try {
        const favs = JSON.parse(localStorage.getItem('kedvencek')) || [];
        const updated = favs.map(a => a.id === selected.id ? { ...a, requestStatus: 'requested' } : a);
        localStorage.setItem('kedvencek', JSON.stringify(updated));
      } catch (e) {}

      try { window.dispatchEvent(new Event('dataChanged')); } catch (e) {}

      setShowRequestForm(false);
      setSelected(null);
      setRequestForm({ nev: '', email: '', uzenet: '' });
      alert('Az örökbefogadási kérelem elküldve — vár a jóváhagyásra a menhely részéről.');
    } catch (err) {
      alert('Hiba a kérelem küldésekor.');
    }
  }

  const kepUrl = selected ? (selected.kep ? `http://localhost:5000${selected.kep}` : '/uploads/dog.png') : '';

  return (
    <>
      <section className="container">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '3rem' }}>{title === 'Kutyák' ? '🐕 Kutyák' : title === 'Macskák' ? '🐈 Macskák' : '🐾 Állataink'}</h2>
        </div>

        <SearchBar szures={szures} setSzures={setSzures} hideFaj={Boolean(faj)} />

        <div style={{ display: 'grid', gridTemplateColumns: isSpeciesView ? '1fr' : '1fr 460px', gap: 24, alignItems: 'start' }}>
          <div className={isSpeciesView ? 'list-centered' : ''}>
            <div className={`grid ${isSpeciesView ? 'shrink' : ''}`}>
              {szurtAllatok.map(allat => (
                <AnimalCard key={allat.id} allat={allat} compact onSelect={(a) => setSelected(a)} />
              ))}
            </div>
          </div>
        </div>

        {selected && (
          <div className="detail-overlay" onClick={() => setSelected(null)}>
            <div className="detail-modal card" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={(e) => { e.stopPropagation(); setSelected(null); }} aria-label="Bezárás">✕</button>
              <img src={kepUrl} alt={selected.nev} className="detail-img" style={{ maxHeight: '60vh', height: 'auto' }} />
              <h3 style={{ marginTop: '1.5rem', fontSize: '2rem', textAlign: 'center' }}>{getField('nev', selected)}</h3>

              <div className="detail-grid">
                <div className="detail-row"><div className="detail-label">🐾 Faj</div><div className="detail-value">{getField('faj', selected)}</div></div>
                <div className="detail-row"><div className="detail-label">🏷️ Fajta</div><div className="detail-value">{getField('fajta', selected)}</div></div>
                <div className="detail-row"><div className="detail-label">🎂 Kor</div><div className="detail-value">{getField('kor', selected)}</div></div>
                <div className="detail-row"><div className="detail-label">⚧ Nem</div><div className="detail-value">{getField('nem', selected)}</div></div>
                <div className="detail-row"><div className="detail-label">📏 Méret</div><div className="detail-value">{getField('meret', selected)}</div></div>
                <div className="detail-row"><div className="detail-label">📅 Bekerülés</div><div className="detail-value">{getField('bekerules', selected)}</div></div>
                <div className="detail-row"><div className="detail-label">📊 Státusz</div><div className="detail-value">{getField('statusz', selected)}</div></div>
              </div>

              <p style={{ 
                marginTop: '1.5rem', 
                padding: '1.5rem',
                background: 'rgba(99, 102, 241, 0.05)',
                borderRadius: '12px',
                border: '1px solid var(--border-subtle)',
                lineHeight: 1.7,
                fontStyle: 'italic'
              }}>
                {getField('leiras', selected)}
              </p>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                {sessionStorage.getItem('role') !== 'admin' && (
                  <button onClick={orokbefogadasKattint} style={{ flex: 1 }}>
                    ❤️ Örökbe szeretném fogadni
                  </button>
                )}
                <button 
                  onClick={(e) => { e.stopPropagation(); setSelected(null); }} 
                  style={{ 
                    background: 'rgba(148, 163, 184, 0.2)', 
                    color: 'var(--text-primary)',
                    flex: sessionStorage.getItem('role') === 'admin' ? 1 : 0.4
                  }}
                >
                  Bezár
                </button>
              </div>
            </div>
          </div>
        )}

        {showRequestForm && selected && (
          <div className="detail-overlay" onClick={() => setShowRequestForm(false)}>
            <div className="detail-modal card" onClick={(e) => e.stopPropagation()}>
              <h3 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '1rem' }}>📝 Látogatási kérelem</h3>
              <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                Kérjük add meg az adataidat a kérelemhez.
              </p>
              <input placeholder="👤 Név" value={requestForm.nev} onChange={e => setRequestForm(f => ({ ...f, nev: e.target.value }))} />
              <input placeholder="✉️ Email" value={requestForm.email} onChange={e => setRequestForm(f => ({ ...f, email: e.target.value }))} />
              <textarea placeholder="💭 Üzenet (opcionális)" value={requestForm.uzenet} onChange={e => setRequestForm(f => ({ ...f, uzenet: e.target.value }))} />
              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                <button onClick={kerelemetKuld} style={{ flex: 1 }}>✅ Küldés</button>
                <button onClick={() => setShowRequestForm(false)} style={{ background: 'rgba(148, 163, 184, 0.2)', color: 'var(--text-primary)', flex: 0.4 }}>Mégse</button>
              </div>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}

export default Animals;