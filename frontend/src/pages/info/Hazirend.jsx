import React from "react";
import Footer from "../../components/Footer";

export default function Hazirend() {
  return (
    <>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>📜 Házirend</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: 800, margin: '0 auto', lineHeight: 1.7 }}>
            A Soproni Állatmenhely házirendje biztosítja a látogatók és az állatok biztonságát. Kérjük, olvasd el és tartsd be!
          </p>
        </div>

        <div className="card" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
          <h3 style={{ marginTop: 0, fontSize: '2rem', color: 'var(--primary-light)', marginBottom: '1.5rem' }}>
            🏢 Általános szabályok
          </h3>
          
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <div className="card-light" style={{ padding: '1.25rem' }}>
              <h4 style={{ marginTop: 0, fontSize: '1.3rem', color: 'var(--accent)' }}>
                ⏰ Nyitvatartás
              </h4>
              <p style={{ margin: 0, lineHeight: 1.7 }}>
                <strong>Hétfő–Péntek:</strong> 10:00–18:00<br />
                <strong>Szombat:</strong> 10:00–14:00<br />
                <strong>Vasárnap és ünnepnapokon:</strong> ZÁRVA<br /><br />
                Kérjük, hogy a nyitvatartási időn kívül <strong>ne látogass be</strong> az állatok nyugalma érdekében!
              </p>
            </div>

            <div className="card-light" style={{ padding: '1.25rem' }}>
              <h4 style={{ marginTop: 0, fontSize: '1.3rem', color: 'var(--accent)' }}>
                📝 Regisztráció és bejelentkezés
              </h4>
              <p style={{ margin: 0, lineHeight: 1.7 }}>
                Minden látogatónak be kell jelentkeznie a recepcióján. Add meg a neved, elérhetőséged és a látogatás célját. Ez azért fontos, mert felelősséggel tartozunk az állatok és a látogatók biztonságáért.
              </p>
            </div>

            <div className="card-light" style={{ padding: '1.25rem' }}>
              <h4 style={{ marginTop: 0, fontSize: '1.3rem', color: 'var(--accent)' }}>
                👥 Gyermekek felügyelete
              </h4>
              <p style={{ margin: 0, lineHeight: 1.7 }}>
                14 év alatti gyermekek <strong>csak felnőtt kíséretével</strong> tartózkodhatnak a menhelyen. A felnőtt felelős a gyermek viselkedéséért és biztonságáért. Kérjük, ne engedd a gyereket felügyelet nélkül az állatok közé!
              </p>
            </div>

            <div className="card-light" style={{ padding: '1.25rem' }}>
              <h4 style={{ marginTop: 0, fontSize: '1.3rem', color: 'var(--accent)' }}>
                🐕 Saját állat behozatala
              </h4>
              <p style={{ margin: 0, lineHeight: 1.7 }}>
                Saját háziállatot (kutya, macska) <strong>csak előzetes egyeztetéssel</strong> hozhatsz be! Fertőzésveszély és stressz miatt ezt szigorúan ellenőrizzük. Ha mégis hozol állatot, az legyen pórázon/hordozóban, és legyen minden oltása érvényes!
              </p>
            </div>
          </div>
        </div>

        <div className="card" style={{ padding: '2.5rem', marginBottom: '2rem', background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(236, 72, 153, 0.1))' }}>
          <h3 style={{ marginTop: 0, fontSize: '2rem', color: 'var(--primary-light)', marginBottom: '1.5rem' }}>
            🐾 Az állatokkal kapcsolatos szabályok
          </h3>
          
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <div style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '1.5rem' }}>
              <h4 style={{ marginTop: 0, fontSize: '1.2rem', color: 'var(--primary-light)' }}>🚫 Ne nyúlj az állatokhoz engedély nélkül!</h4>
              <p style={{ margin: 0, lineHeight: 1.7 }}>
                Csak <strong>gondozói engedéllyel</strong> érintkezhetsz az állatokkal! Sok állat beteg, traumatizált vagy agresszív lehet. A gondozók segítenek kiválasztani azokat, akikkel biztonságosan játszhatsz.
              </p>
            </div>

            <div style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '1.5rem' }}>
              <h4 style={{ marginTop: 0, fontSize: '1.2rem', color: 'var(--primary-light)' }}>🍖 Etetés TILOS!</h4>
              <p style={{ margin: 0, lineHeight: 1.7 }}>
                <strong>Szigorúan tilos</strong> ételmaradékkal, édességgel, emberi étellel etetni az állatokat! Sok állat speciális diétán van, allergiás, vagy gyógykezelés alatt áll. Ha szeretnél támogatni, adj le ételt a gondozóknak.
              </p>
            </div>

            <div style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '1.5rem' }}>
              <h4 style={{ marginTop: 0, fontSize: '1.2rem', color: 'var(--primary-light)' }}>📸 Fényképezés</h4>
              <p style={{ margin: 0, lineHeight: 1.7 }}>
                Fényképeket és videókat készíthetsz, de <strong>vakuval tilos</strong>, mert megijesztheti az állatokat. Kérjük, hogy a fotókat ne használd kereskedelmi célra, és a közösségi médiában jelöld meg a menhelyet (@soproniallatmenhely).
              </p>
            </div>

            <div style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '1.5rem' }}>
              <h4 style={{ marginTop: 0, fontSize: '1.2rem', color: 'var(--primary-light)' }}>🔇 Kerüld a hangos zajokat!</h4>
              <p style={{ margin: 0, lineHeight: 1.7 }}>
                Ne kiabálj, ne csapkodj, ne csapogass a kenneleken! A menhely zajszintje így is magas, és sok állat ideges vagy stresszes. Kérjük, viselkedj nyugodtan és csendesen.
              </p>
            </div>

            <div style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '1.5rem' }}>
              <h4 style={{ marginTop: 0, fontSize: '1.2rem', color: 'var(--primary-light)' }}>🧼 Tisztaság és higiénia</h4>
              <p style={{ margin: 0, lineHeight: 1.7 }}>
                Az állatokkal való érintkezés után <strong>mindig moss kezet</strong>! Kézfertőtlenítőt biztosítunk. Ne dobj szemetet az ólakba vagy a területre — használd a kihelyezett szemeteseket!
              </p>
            </div>
          </div>
        </div>

        <div className="card" style={{ padding: '2.5rem', marginBottom: '2rem', background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(220, 38, 38, 0.1))' }}>
          <h3 style={{ marginTop: 0, fontSize: '2rem', color: 'var(--danger)', marginBottom: '1.5rem' }}>
            ⛔ SZIGORÚAN TILOS!
          </h3>
          <ul style={{ fontSize: '1.05rem', lineHeight: 2, paddingLeft: '1.5rem', margin: 0 }}>
            <li><strong>Alkohol vagy drog fogyasztása</strong> a menhelyen</li>
            <li><strong>Dohányzás</strong> a kennelekben és fedett területeken</li>
            <li><strong>Állatokkal való durva bánásmód</strong> (ütés, rúgás, kiabálás)</li>
            <li><strong>Kennelek kinyitása</strong> engedély nélkül — az állatok megszökhetnek!</li>
            <li><strong>Állatok elvitele</strong> a területről hivatalos örökbefogadás nélkül</li>
            <li><strong>Veszélyes tárgyak</strong> (kés, élezőeszköz) behozatala</li>
            <li><strong>Éles vagy veszélyes játékok</strong> adása az állatoknak</li>
            <li><strong>Videózás, fotózás vakuval</strong>, ami megijesztheti az állatokat</li>
          </ul>
        </div>

        <div className="card" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
          <h3 style={{ marginTop: 0, fontSize: '2rem', color: 'var(--primary-light)', marginBottom: '1.5rem' }}>
            🛡️ Balesetek és felelősség
          </h3>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            A menhely mindent megtesz a biztonságért, de az állatok kiszámíthatatlanok lehetnek. <strong>Saját felelősségre</strong> érintkezel velük!
          </p>
          <ul style={{ fontSize: '1.05rem', lineHeight: 2, paddingLeft: '1.5rem', margin: 0 }}>
            <li>Ha állatharapás vagy baleset történik, <strong>azonnal értesítsd a gondozókat!</strong></li>
            <li>A menhely nem vállal felelősséget a szabályok be nem tartása miatt bekövetkező károkért.</li>
            <li>Értéktárgyaidra vigyázz — a menhely nem felelős az elvesztett tárgyakért.</li>
            <li>Bármilyen rendellenesség esetén (beteg állat, nyitott kennel, stb.) jelezd a személyzetnek!</li>
          </ul>
        </div>

        <div className="card" style={{ padding: '2.5rem', marginBottom: '2rem', background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.15), rgba(5, 150, 105, 0.1))' }}>
          <h3 style={{ marginTop: 0, fontSize: '2rem', color: 'var(--accent)', marginBottom: '1.5rem' }}>
            💚 Hogyan segíthetsz?
          </h3>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1rem' }}>
            Ha szeretnél többet tenni az állatokért, íme néhány lehetőség:
          </p>
          <ul style={{ fontSize: '1.05rem', lineHeight: 2, paddingLeft: '1.5rem', margin: 0 }}>
            <li>🐕 <strong>Sétáltass</strong> egy kutyát — regisztrálj a recepcióján!</li>
            <li>🏠 <strong>Fogadj örökbe</strong> vagy légy ideiglenes befogadó család!</li>
            <li>💰 <strong>Támogass pénzzel</strong> — minden forint számít!</li>
            <li>🍖 <strong>Hozz tápot, takarókat</strong> — szükséglista a recepcióján!</li>
            <li>🤝 <strong>Legyél önkéntes</strong> — heti pár óra sokat jelent!</li>
            <li>📢 <strong>Oszd meg</strong> az örökbefogadható állatokat a közösségi médiában!</li>
          </ul>
        </div>

        <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
          <h3 style={{ marginTop: 0, fontSize: '1.8rem', color: 'var(--primary-light)', marginBottom: '1rem' }}>
            🙏 Köszönjük, hogy betartod a szabályokat!
          </h3>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '0' }}>
            A házirend betartásával segítesz megőrizni az állatok és látogatók biztonságát. Ha kérdésed van, fordulj bizalommal munkatársainkhoz!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
