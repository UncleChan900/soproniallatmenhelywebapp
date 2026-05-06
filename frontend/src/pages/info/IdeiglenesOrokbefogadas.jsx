import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

export default function IdeiglenesOrokbefogadas() {
  return (
    <>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏡 Ideiglenes örökbefogadás</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: 800, margin: '0 auto', lineHeight: 1.7 }}>
            Nem vagy biztos, hogy hosszú távra tudsz elkötelződni? Az ideiglenes örökbefogadás (befogadó család) kiváló lehetőség!
          </p>
        </div>

        <div className="card" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
          <h3 style={{ marginTop: 0, fontSize: '2rem', color: 'var(--primary-light)', marginBottom: '1.5rem' }}>
            🤔 Mi az ideiglenes örökbefogadás?
          </h3>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Az ideiglenes örökbefogadás (más néven <strong>befogadó család program</strong>) azt jelenti, hogy egy menhelyi állatot átmenetileg magadhoz veszel, amíg végleges gazdit nem találunk neki. Ez különösen hasznos:
          </p>
          <ul style={{ fontSize: '1.05rem', lineHeight: 2, paddingLeft: '1.5rem', margin: 0 }}>
            <li>Beteg vagy sérült állatok felépülési időszakában</li>
            <li>Fiatal, szocializációra szoruló kölykök esetében</li>
            <li>Idős, nyugalmat igénylő állatok számára</li>
            <li>Túlzsúfolt menhely tehermentesítésére</li>
          </ul>
        </div>

        <div className="card" style={{ padding: '2.5rem', marginBottom: '2rem', background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(99, 102, 241, 0.1))' }}>
          <h3 style={{ marginTop: 0, fontSize: '2rem', color: 'var(--secondary-light)', marginBottom: '1.5rem' }}>
            💝 Miért érdemes befogadó családnak lenni?
          </h3>
          
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <div className="card-light" style={{ padding: '1.25rem' }}>
              <h4 style={{ marginTop: 0, fontSize: '1.3rem', color: 'var(--accent)' }}>
                🐕 Segítesz egy állatnak
              </h4>
              <p style={{ margin: 0, lineHeight: 1.7 }}>
                A menhelyi környezet stresszes lehet. Otthoni körülmények között az állat jobban szocializálódik, nyugodtabb lesz, és könnyebben talál végleges otthont.
              </p>
            </div>

            <div className="card-light" style={{ padding: '1.25rem' }}>
              <h4 style={{ marginTop: 0, fontSize: '1.3rem', color: 'var(--accent)' }}>
                🏠 Kipróbálhatod az állatot
              </h4>
              <p style={{ margin: 0, lineHeight: 1.7 }}>
                Ha még nem vagy biztos benne, hogy hosszú távon szeretnél háziállatot, ez tökéletes alkalom, hogy megtapasztald, milyen az állattal való együttélés.
              </p>
            </div>

            <div className="card-light" style={{ padding: '1.25rem' }}>
              <h4 style={{ marginTop: 0, fontSize: '1.3rem', color: 'var(--accent)' }}>
                💰 Támogatást kapsz
              </h4>
              <p style={{ margin: 0, lineHeight: 1.7 }}>
                A menhely biztosítja az állatorvosi ellátást, táplálást (egyeztetés szerint), és minden szükséges felszerelést. Te csak a szeretetet és gondoskodást adod!
              </p>
            </div>

            <div className="card-light" style={{ padding: '1.25rem' }}>
              <h4 style={{ marginTop: 0, fontSize: '1.3rem', color: 'var(--accent)' }}>
                🎓 Tapasztalatot szerzel
              </h4>
              <p style={{ margin: 0, lineHeight: 1.7 }}>
                Megtanulhatod, hogyan neveljünk egy állatot, hogyan szocializáljunk, és rengeteg hasznos tudást szerezhetsz az állatgondozás területén.
              </p>
            </div>
          </div>
        </div>

        <div className="card" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
          <h3 style={{ marginTop: 0, fontSize: '2rem', color: 'var(--primary-light)', marginBottom: '1.5rem' }}>
            📝 Hogyan működik a befogadó család program?
          </h3>
          
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <div style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '1.5rem' }}>
              <h4 style={{ marginTop: 0, fontSize: '1.2rem', color: 'var(--primary-light)' }}>1. Jelentkezés</h4>
              <p style={{ margin: 0, lineHeight: 1.7 }}>
                Töltsd ki a jelentkezési űrlapunkat, vagy keress minket telefonon. Megbeszéljük, milyen állatot tudnál befogadni (méret, kor, faj).
              </p>
            </div>

            <div style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '1.5rem' }}>
              <h4 style={{ marginTop: 0, fontSize: '1.2rem', color: 'var(--primary-light)' }}>2. Otthonellenőrzés</h4>
              <p style={{ margin: 0, lineHeight: 1.7 }}>
                Munkatársunk ellátogat hozzád, hogy megbizonyosodjon a megfelelő körülményekről (kerített udvar, biztonságos környezet).
              </p>
            </div>

            <div style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '1.5rem' }}>
              <h4 style={{ marginTop: 0, fontSize: '1.2rem', color: 'var(--primary-light)' }}>3. Szerződéskötés</h4>
              <p style={{ margin: 0, lineHeight: 1.7 }}>
                Aláírunk egy ideiglenes örökbefogadási szerződést, amelyben rögzítjük a jogokat és kötelezettségeket. Az állat továbbra is a menhely tulajdonában marad.
              </p>
            </div>

            <div style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '1.5rem' }}>
              <h4 style={{ marginTop: 0, fontSize: '1.2rem', color: 'var(--primary-light)' }}>4. Ideiglenes otthon</h4>
              <p style={{ margin: 0, lineHeight: 1.7 }}>
                Az állat hozzád kerül! Tartsd velünk a kapcsolatot, küldd a fotókat, beszámolókat. Mi közben végleges gazdát keresünk.
              </p>
            </div>

            <div style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '1.5rem' }}>
              <h4 style={{ marginTop: 0, fontSize: '1.2rem', color: 'var(--primary-light)' }}>5. Végleges gazdi vagy visszavitel</h4>
              <p style={{ margin: 0, lineHeight: 1.7 }}>
                Ha találunk végleges gazdát, az állat átköltözik. Ha te megszereted, és megtartanád, természetesen örökbe is fogadhatod!
              </p>
            </div>
          </div>
        </div>

        <div className="card" style={{ padding: '2.5rem', marginBottom: '2rem', background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.15), rgba(5, 150, 105, 0.1))' }}>
          <h3 style={{ marginTop: 0, fontSize: '2rem', color: 'var(--accent)', marginBottom: '1.5rem' }}>
            ✅ Kiknek ajánljuk?
          </h3>
          <ul style={{ fontSize: '1.05rem', lineHeight: 2, paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li>Akik szeretnének segíteni, de hosszú távra nem tudnak elkötelződni</li>
            <li>Családoknak, ahol a gyerekek megtanulhatják a felelősségvállalást</li>
            <li>Nyugdíjasoknak, akiknek van ideje és tapasztalata</li>
            <li>Akik szeretnék kipróbálni, milyen állatot tartani</li>
          </ul>

          <p style={{ fontSize: '1.1rem', fontWeight: 600, margin: 0, color: 'var(--text-primary)' }}>
            ⚠️ Fontos: Érzelmileg fel kell készülnöd arra, hogy az állat csak ideiglenesen lesz nálad!
          </p>
        </div>

        <div className="card" style={{ padding: '2rem', textAlign: 'center', background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(236, 72, 153, 0.1))' }}>
          <h3 style={{ marginTop: 0, fontSize: '1.8rem', color: 'var(--primary-light)', marginBottom: '1rem' }}>
            🌟 Készen állsz?
          </h3>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Ha szeretnél befogadó család lenni, vedd fel velünk a kapcsolatot!
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
              📞 Felhívás
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
              ✉️ Email
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
