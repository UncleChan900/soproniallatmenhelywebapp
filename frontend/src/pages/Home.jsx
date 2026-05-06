import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Home() {
  const heroStyle = { backgroundImage: `url('/uploads/header.jpg')` };

  return (
    <>
      <div className="hero" style={heroStyle}>
        <div className="overlay">
          <h1>🐾 Soproni Állatmenhely</h1>
          <p className="lead">
            Neked 1%, nekik az élet — mi azon dolgozunk nap mint nap, hogy a hozzánk
            kerülő állatok biztonságos otthonra találjanak. Az oldalon található
            fotók és történetek megmutatják, hogyan segítünk a sérült, elhagyott
            és gazdát vesztett kutyákon és macskákon. Ha szeretnél segíteni,
            örökbe fogadni, adományozni vagy önkénteskedni, itt megtalálod a
            legfontosabb információkat.
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/support" className="btn-cta">💝 Támogatás</Link>
          </div>
        </div>
      </div>

      <main className="home-section">
        <section className="inner">
          <div style={{ display: "grid", gap: '3rem' }}>
            <div className="card-accent">
              <h2 style={{ marginTop: 0, fontSize: '2.5rem', marginBottom: '1rem' }}>🏡 Rólunk röviden</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, margin: 0 }}>
                A Soproni Állatmenhely szívén viseli a védenceink sorsát. Minden nap
                gondoskodunk a sérült, idős és magára maradt állatokról: orvosi
                ellátás, rehabilitáció és szerető gondoskodás mindennap. Küldetésünk
                a biztonságos örökbefogadás és a közösségi felelősségvállalás erősítése.
              </p>
            </div>

            <div className="features">
              <div className="card-light feature">
                <h4 style={{ marginTop: 0, fontSize: '1.3rem', color: '#818cf8' }}>🎯 Küldetésünk</h4>
                <p style={{ margin: 0 }}>Minden állatnak szerető otthont találni, és felelős gazdákat nevelni a közösségben.</p>
              </div>

              <div className="card-light feature">
                <h4 style={{ marginTop: 0, fontSize: '1.3rem', color: '#2dd4bf' }}>🤲 Hogyan segíthetsz</h4>
                <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
                  <li>Adományozz ételt vagy gyógyszert</li>
                  <li>Önkénteskedj a sétáltatásban</li>
                  <li>Ajánlj 1% felajánlást</li>
                </ul>
              </div>
            </div>

            <div className="gallery">
              <img src="/uploads/kuty/kep7.jpg" alt="kutya" loading="lazy" />
              <img src="/uploads/cic/cat3.jpg" alt="macska" loading="lazy" />
              <img src="/uploads/kuty/kep2.jpg" alt="kutya2" loading="lazy" />
            </div>

            <div className="card-light">
              <h3 style={{ marginTop: 0, fontSize: '2rem', textAlign: 'center', marginBottom: '2rem' }}>
                📋 Az örökbefogadás menete
              </h3>
              <div className="features" style={{ gap: '2rem' }}>
                <div className="feature">
                  <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>🔍</div>
                  <p style={{ margin: 0, fontSize: '1.05rem' }}>
                    <strong style={{ color: '#818cf8', fontSize: '1.15rem' }}>Keresés</strong><br />
                    Találd meg a megfelelő társat.
                  </p>
                </div>
                <div className="feature">
                  <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>🤝</div>
                  <p style={{ margin: 0, fontSize: '1.05rem' }}>
                    <strong style={{ color: '#818cf8', fontSize: '1.15rem' }}>Látogatás</strong><br />
                    Ismerkedés személyesen.
                  </p>
                </div>
                <div className="feature">
                  <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>🏠</div>
                  <p style={{ margin: 0, fontSize: '1.05rem' }}>
                    <strong style={{ color: '#818cf8', fontSize: '1.15rem' }}>Hazavitel</strong><br />
                    Új otthon az állatnak.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;
