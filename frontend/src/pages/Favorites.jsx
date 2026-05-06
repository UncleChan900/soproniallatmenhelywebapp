import { useEffect, useState } from "react";
import AnimalCard from "../components/AnimalCard";
import api from "../api";
import Footer from "../components/Footer";

function Favorites() {
  const [approved, setApproved] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const allRes = await api.get('/allatok');
        const allatok = allRes.data || [];
        // show all animals that are marked adopted
        const adopted = allatok.filter(a => (a.statusz || '').toString().toLowerCase() === 'örökbefogadva');
        setApproved(adopted);
      } catch (e) {
        setApproved([]);
      } finally {
        setLoading(false);
      }
    };
    load();

    const handler = () => load();
    window.addEventListener('dataChanged', handler);
    return () => window.removeEventListener('dataChanged', handler);
  }, []);

  return (
    <>
      <section className="adopted-hero container">
        <div className="hero-inner">
          <h1>A menhelyünkön örökbefogadott állatok, akik sikeresen új gazdira találtak</h1>
          <p className="hero-sub">Jelenleg <strong>{approved.length}</strong> állat talált új otthont — ismerd meg, kik lettek boldog családtagok.</p>
        </div>
      </section>

      {loading && <p>Betöltés...</p>}

      {!loading && approved.length === 0 && (
        <p>Jelenleg nincs örökbefogadott állat.</p>
      )}

      <div className="grid">
        {approved.map(allat => (
          <div key={`approved-${allat.id}`} className="adopt-card card">
            <img src={allat.kep ? `http://localhost:5000${allat.kep}` : '/uploads/dog.png'} alt={allat.nev} className="adopt-img" />
            <div className="adopt-body">
              <h3>{allat.nev}</h3>
              <p className="adopt-text">{allat.nev} sikeresen új gazdira lelt</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Favorites;