import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

export default function Orokbefogadas() {
  return (
    <>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏠 Örökbefogadás</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: 800, margin: '0 auto', lineHeight: 1.7 }}>
            Az örökbefogadás hosszú távú elköteleződés. Itt megtalálod a legfontosabb információkat arról, hogyan fogadhatsz örökbe egy állatot a menhelyünkről.
          </p>
        </div>

        <div className="card" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
          <h3 style={{ marginTop: 0, fontSize: '2rem', color: 'var(--primary-light)', marginBottom: '1.5rem' }}>
            📋 Az örökbefogadás menete
          </h3>
          
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div className="card-light" style={{ padding: '1.5rem' }}>
              <h4 style={{ marginTop: 0, fontSize: '1.4rem', color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '2rem' }}>1️⃣</span> Ismerkedés
              </h4>
              <p style={{ margin: 0, lineHeight: 1.8, fontSize: '1.05rem' }}>
                Látogass el hozzánk nyitvatartási időben, és ismerkedj meg a védenceinkkel! Munkatársaink segítenek megtalálni azt az állatot, aki a legjobban illik hozzád és az életviteledhez. Fontos, hogy személyesen találkozz a kiszemelt állattal, és lásd, hogy összeilletek-e.
              </p>
            </div>

            <div className="card-light" style={{ padding: '1.5rem' }}>
              <h4 style={{ marginTop: 0, fontSize: '1.4rem', color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '2rem' }}>2️⃣</span> Előzetes beszélgetés
              </h4>
              <p style={{ margin: 0, lineHeight: 1.8, fontSize: '1.05rem' }}>
                Munkatársunk részletes interjút készít veled, ahol megbeszéljük az otthoni körülményeket, korábbi állatartási tapasztalatokat, és a kiszemelt állat speciális igényeit. Ez azért fontos, hogy biztosan megfelelő otthonba kerüljön a kedvenc.
              </p>
            </div>

            <div className="card-light" style={{ padding: '1.5rem' }}>
              <h4 style={{ marginTop: 0, fontSize: '1.4rem', color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '2rem' }}>3️⃣</span> Otthonellenőrzés
              </h4>
              <p style={{ margin: 0, lineHeight: 1.8, fontSize: '1.05rem' }}>
                Bizonyos esetekben előzetes otthonellenőrzést végzünk, hogy megbizonyosodjunk az állat biztonságos körülményeiről. Ez különösen igaz nagyobb kutyák vagy speciális igényű állatok esetében. Az ellenőrzés célja a védenc érdekeinek védelme.
              </p>
            </div>

            <div className="card-light" style={{ padding: '1.5rem' }}>
              <h4 style={{ marginTop: 0, fontSize: '1.4rem', color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '2rem' }}>4️⃣</span> Szerződéskötés
              </h4>
              <p style={{ margin: 0, lineHeight: 1.8, fontSize: '1.05rem' }}>
                Ha minden rendben van, aláírjuk az örökbefogadási szerződést. Ebben rögzítjük a felek kötelezettségeit, és azt, hogy az állat tulajdonjoga hivatalosan átszáll. Az örökbefogadás önköltségi díja fedezi az állattal kapcsolatos korábbi kiadásokat (oltások, ivartalanítás, kezelések).
              </p>
            </div>

            <div className="card-light" style={{ padding: '1.5rem' }}>
              <h4 style={{ marginTop: 0, fontSize: '1.4rem', color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '2rem' }}>5️⃣</span> Hazavitel
              </h4>
              <p style={{ margin: 0, lineHeight: 1.8, fontSize: '1.05rem' }}>
                Miután minden papír rendben van, hazaviheted új családtagodat! Munkatársaink részletes tájékoztatást adnak a táplálásról, szokásokról, esetleges kezelésekről. Az első hetekben tartsd velünk a kapcsolatot, ha bármilyen kérdésed merül fel.
              </p>
            </div>
          </div>
        </div>

        <div className="card" style={{ padding: '2.5rem', marginBottom: '2rem', background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(236, 72, 153, 0.1))' }}>
          <h3 style={{ marginTop: 0, fontSize: '2rem', color: 'var(--primary-light)', marginBottom: '1.5rem' }}>
            ✅ Fontos tudnivalók
          </h3>
          
          <ul style={{ fontSize: '1.05rem', lineHeight: 2, paddingLeft: '1.5rem', margin: 0 }}>
            <li><strong>Önköltségi díj:</strong> Az örökbefogadás nem ingyenes. A díj fedezi az oltásokat, ivartalanítást, chipet és egyéb kezeléseket.</li>
            <li><strong>Ivartalanítás:</strong> Minden örökbefogadott állat ivartalanítva kerül át az új gazdához, vagy kötelező vállalni annak elvégzését.</li>
            <li><strong>Utánkövetés:</strong> Az első hónapokban visszahívunk, hogy meggyőződjünk az állat jó közérzetéről.</li>
            <li><strong>Visszavétel:</strong> Ha bármilyen okból nem működik az örökbefogadás, az állatot visszafogadjuk.</li>
            <li><strong>Felelősség:</strong> Az örökbefogadó vállalja, hogy gondoskodik az állat egészségéről, megfelelő tartásáról és szeretetteljes bánásmódról.</li>
          </ul>
        </div>

        <div className="card" style={{ padding: '2rem', textAlign: 'center', background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.15), rgba(5, 150, 105, 0.1))' }}>
          <h3 style={{ marginTop: 0, fontSize: '1.8rem', color: 'var(--accent)', marginBottom: '1rem' }}>
            💚 Kérdésed van?
          </h3>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Ha bármilyen kérdésed van az örökbefogadással kapcsolatban, fordulj hozzánk bizalommal!
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{ 
              display: 'inline-block', 
              padding: '1rem 2rem', 
              background: 'var(--accent)', 
              color: 'white', 
              borderRadius: 'var(--radius-md)', 
              textDecoration: 'none', 
              fontWeight: 600,
              boxShadow: '0 4px 12px rgba(20, 184, 166, 0.3)'
            }}>
              📞 Hívj minket
            </Link>
            <Link to="/contact" style={{ 
              display: 'inline-block', 
              padding: '1rem 2rem', 
              background: 'var(--primary)', 
              color: 'white', 
              borderRadius: 'var(--radius-md)', 
              textDecoration: 'none', 
              fontWeight: 600,
              boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)'
            }}>
              ✉️ Írj nekünk
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
