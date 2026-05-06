function AnimalCard({ allat, showFavoriteButton = true, compact = false, compactForFavorites = false, onSelect }) {

  const addToFavorites = () => {
    const favs = JSON.parse(localStorage.getItem("kedvencek")) || [];

    if (favs.find(a => a.id === allat.id)) {
      alert("Már benne van ❤️");
      return;
    }

    favs.push(allat);
    localStorage.setItem("kedvencek", JSON.stringify(favs));
    alert("Hozzáadva a kedvencekhez ❤️");
  };

  if (compact) {
    const isPending = allat.statusz === "függőben";
    
    return (
      <div
        className={`card compact-card ${allat.statusz === "örökbefogadva" ? "card-adopted" : ""} ${isPending ? "card-pending" : ""}`}
        onClick={() => onSelect && onSelect(allat)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter') onSelect && onSelect(allat); }}
        style={{ cursor: 'pointer', position: 'relative' }}
      >
        {allat.kep && (
          <img src={`http://localhost:5000${allat.kep}`} alt={allat.nev} className="animal-img" />
        )}
        <h3 style={{ margin: 0, textAlign: 'center' }}>{allat.nev}</h3>
        
        {isPending && (
          <div className="pending-icon" title="Függőben">⏳</div>
        )}
      </div>
    );
  }

  return (
    <div className={`card ${allat.statusz === "örökbefogadva" ? "card-adopted" : ""}`}>
      {(() => {
        const favsLocal = JSON.parse(localStorage.getItem('kedvencek')) || [];
        const localEntry = favsLocal.find(a => a.id === allat.id);
        const isRequested = localEntry && localEntry.requestStatus === 'requested';
        const isApproved = localEntry && localEntry.requestStatus === 'approved';
        const isDenied = localEntry && localEntry.requestStatus === 'denied';
        return (<>
          {allat.statusz === "függőben" && (
            <div className="badge requested">
              ⏳ Kérelem folyamatban
            </div>
          )}
          {isRequested && (
            <div className="badge requested">
              ⏳ Kérelem folyamatban
            </div>
          )}
          {isApproved && (
            <div className="badge adopted">
              ✅ Jóváhagyva
            </div>
          )}
          {isDenied && (
            <div className="badge" style={{ background: 'linear-gradient(135deg, #6b7280, #4b5563)' }}>
              ❌ Elutasítva
            </div>
          )}
        </>);
      })()}

      {allat.statusz === "örökbefogadva" && (
        <div className="badge adopted">
          ❤️ ÖRÖKBEFOGADVA
        </div>
      )}

      {allat.kep && (
        <img
          src={`http://localhost:5000${allat.kep}`}
          alt={allat.nev}
          className="animal-img"
        />
      )}

        <h3>{allat.nev}</h3>
        {!compactForFavorites && (
          <>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.75rem' }}>
            <p style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem', background: 'rgba(15, 20, 25, 0.3)', borderRadius: '8px' }}>
              <span style={{ color: '#94a3b8', fontWeight: 600 }}>Faj:</span>
              <span>{allat.faj}</span>
            </p>
            <p style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem', background: 'rgba(15, 20, 25, 0.3)', borderRadius: '8px' }}>
              <span style={{ color: '#94a3b8', fontWeight: 600 }}>Fajta:</span>
              <span>{allat.fajta}</span>
            </p>
            <p style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem', background: 'rgba(15, 20, 25, 0.3)', borderRadius: '8px' }}>
              <span style={{ color: '#94a3b8', fontWeight: 600 }}>Kor:</span>
              <span>{allat.kor} év</span>
            </p>
            <p style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem', background: 'rgba(15, 20, 25, 0.3)', borderRadius: '8px' }}>
              <span style={{ color: '#94a3b8', fontWeight: 600 }}>Nem:</span>
              <span>{allat.nem}</span>
            </p>
          </div>
          
          {allat.leiras && (
            <p style={{ marginTop: '1rem', fontStyle: 'italic', color: '#cbd5e1', fontSize: '0.9rem', lineHeight: '1.6' }}>
              {allat.leiras}
            </p>
          )}
          </>
        )}

        {showFavoriteButton && sessionStorage.getItem('role') !== 'admin' && (
          <button onClick={addToFavorites} style={{ width: '100%' }}>
            ❤️ Kedvencekhez
          </button>
        )}
      </div>
    );
}

export default AnimalCard;