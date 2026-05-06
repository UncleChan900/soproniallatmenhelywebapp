import React from "react";
import Footer from "../../components/Footer";

export default function Setaltatas() {
  return (
    <>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>🐕 Sétáltatási szabályzat</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: 800, margin: '0 auto', lineHeight: 1.7 }}>
            A menhelyi kutyák sétáltatása nagyszerű lehetőség, hogy segíts! Itt találod a szabályokat és tudnivalókat.
          </p>
        </div>

        <div className="card" style={{ padding: '2.5rem', marginBottom: '2rem', background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(236, 72, 153, 0.1))' }}>
          <h3 style={{ marginTop: 0, fontSize: '2rem', color: 'var(--primary-light)', marginBottom: '1.5rem' }}>
            🌳 Miért fontos a sétáltatás?
          </h3>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1rem' }}>
            A menhelyi kutyák naponta korlátozott mozgást kapnak. A rendszeres séta:
          </p>
          <ul style={{ fontSize: '1.05rem', lineHeight: 2, paddingLeft: '1.5rem', margin: 0 }}>
            <li>Javítja a kutyák fizikai és mentális állapotát</li>
            <li>Segíti a szocializációt és a jó viselkedést</li>
            <li>Növeli az örökbefogadási esélyeket (kiegyensúlyozottabb kutyák)</li>
            <li>Csökkenti a stresszt és az unalmat</li>
          </ul>
        </div>

        <div className="card" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
          <h3 style={{ marginTop: 0, fontSize: '2rem', color: 'var(--primary-light)', marginBottom: '1.5rem' }}>
            📋 Sétáltatási szabályok
          </h3>
          
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div className="card-light" style={{ padding: '1.5rem' }}>
              <h4 style={{ marginTop: 0, fontSize: '1.4rem', color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '2rem' }}>1️⃣</span> Regisztráció kötelező
              </h4>
              <p style={{ margin: 0, lineHeight: 1.8 }}>
                A sétáltatáshoz előzetesen regisztrálnod kell a menhely recepcióján. Töltsd ki a regisztrációs űrlapot, és fogadd el a szabályzatot. 18 év alattiak csak felnőtt kíséretében sétáltathatnak!
              </p>
            </div>

            <div className="card-light" style={{ padding: '1.5rem' }}>
              <h4 style={{ marginTop: 0, fontSize: '1.4rem', color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '2rem' }}>2️⃣</span> Bevezető beszélgetés
              </h4>
              <p style={{ margin: 0, lineHeight: 1.8 }}>
                Az első alkalommal munkatársunk bemutatja a sétáltatás menetét, elmagyarázza a biztonsági szabályokat, és segít kiválasztani a hozzád illő kutyát. Nem minden kutya alkalmas minden sétáltatóhoz!
              </p>
            </div>

            <div className="card-light" style={{ padding: '1.5rem' }}>
              <h4 style={{ marginTop: 0, fontSize: '1.4rem', color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '2rem' }}>3️⃣</span> Időtartam és gyakorisag
              </h4>
              <p style={{ margin: 0, lineHeight: 1.8 }}>
                Egy séta minimum <strong>30 perc</strong>, maximum <strong>2 óra</strong> lehet. Hetente bármikor jöhetsz, de kérjük, hogy előre jelezd a látogatást, főleg hétvégén. Nyitvatartási időben bármikor mehetsz sétálni.
              </p>
            </div>

            <div className="card-light" style={{ padding: '1.5rem' }}>
              <h4 style={{ marginTop: 0, fontSize: '1.4rem', color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '2rem' }}>4️⃣</span> Póráz és felszerelés
              </h4>
              <p style={{ margin: 0, lineHeight: 1.8 }}>
                Minden kutyát <strong>pórázon</strong> kell vezetni! A menhely biztosítja a pórázokat és nyakörveket. Saját felszerelést is hozhatsz, de azt előbb meg kell mutatnod a gondozóknak. Flexipóráz használata tilos!
              </p>
            </div>

            <div className="card-light" style={{ padding: '1.5rem' }}>
              <h4 style={{ marginTop: 0, fontSize: '1.4rem', color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '2rem' }}>5️⃣</span> Útvonal és környezet
              </h4>
              <p style={{ margin: 0, lineHeight: 1.8 }}>
                A kijelölt sétáltatási útvonalakon mehetsz (térképet a recepcióról kaphatsz). Forgalmas utakat, játszótereket és más állatmenhelyeket kerülj el! Tartsd tiszteletben a környezetet és a járókelőket.
              </p>
            </div>

            <div className="card-light" style={{ padding: '1.5rem' }}>
              <h4 style={{ marginTop: 0, fontSize: '1.4rem', color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '2rem' }}>6️⃣</span> Poop-bag kötelező
              </h4>
              <p style={{ margin: 0, lineHeight: 1.8 }}>
                Minden kutya után kötelező felszedni az ürüléket! A menhely biztosít "poop bag"-eket. A köztisztaságot mindenképpen tartsd tiszteletben — ez a menhelyünk hírneve is.
              </p>
            </div>

            <div className="card-light" style={{ padding: '1.5rem' }}>
              <h4 style={{ marginTop: 0, fontSize: '1.4rem', color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '2rem' }}>7️⃣</span> Ne engedd el a kutyát!
              </h4>
              <p style={{ margin: 0, lineHeight: 1.8 }}>
                <strong style={{ color: 'var(--danger)' }}>SOHA ne engedd el a pórázt!</strong> Még a legjól nevelt kutya is megijed egy autótól, más kutyától vagy váratlan zajtól. A kutya biztonságáért te vagy felelős!
              </p>
            </div>

            <div className="card-light" style={{ padding: '1.5rem' }}>
              <h4 style={{ marginTop: 0, fontSize: '1.4rem', color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '2rem' }}>8️⃣</span> Problémák esetén
              </h4>
              <p style={{ margin: 0, lineHeight: 1.8 }}>
                Ha a kutya rosszul lesz, megsérül, vagy elszökik, <strong>azonnal hívd a menhelyet</strong> (+36 99 123 456)! Ne próbálj egyedül megoldani semmit. Bármi probléma esetén jelezd a gondozóknak.
              </p>
            </div>

            <div className="card-light" style={{ padding: '1.5rem' }}>
              <h4 style={{ marginTop: 0, fontSize: '1.4rem', color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '2rem' }}>9️⃣</span> Visszavitel és jelentés
              </h4>
              <p style={{ margin: 0, lineHeight: 1.8 }}>
                A séta végén vidd vissza a kutyát a kenneljébe, adj neki friss vizet, és jelentsd a gondozónak, hogy minden rendben van. Ha volt különlegesség (pl. találkozott más kutyával, evett valamit), mindenképpen mondd el!
              </p>
            </div>
          </div>
        </div>

        <div className="card" style={{ padding: '2.5rem', marginBottom: '2rem', background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(220, 38, 38, 0.1))' }}>
          <h3 style={{ marginTop: 0, fontSize: '2rem', color: 'var(--danger)', marginBottom: '1.5rem' }}>
            ⚠️ TILOS!
          </h3>
          <ul style={{ fontSize: '1.05rem', lineHeight: 2, paddingLeft: '1.5rem', margin: 0, color: 'var(--text-primary)' }}>
            <li><strong>Elengedni a pórázt</strong> bármilyen körülmények között</li>
            <li><strong>Etetni a kutyát</strong> saját ételeddel vagy ismeretlen forrásból</li>
            <li><strong>Több kutyát egyszerre vinni</strong>, ha nem vagy tapasztalt</li>
            <li><strong>Gyerekeket póráz nélkül közel engedni</strong> a kutyákhoz</li>
            <li><strong>Autóban hagyni</strong> a kutyát, még rövid időre is</li>
            <li><strong>Más állatokkal összehozni</strong> (macskák, más kutyák) előzetes egyeztetés nélkül</li>
            <li><strong>Büntetni vagy durván bánni</strong> a kutyával</li>
          </ul>
        </div>

        <div className="card" style={{ padding: '2.5rem', marginBottom: '2rem', background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.15), rgba(5, 150, 105, 0.1))' }}>
          <h3 style={{ marginTop: 0, fontSize: '2rem', color: 'var(--accent)', marginBottom: '1.5rem' }}>
            💡 Hasznos tippek
          </h3>
          <ul style={{ fontSize: '1.05rem', lineHeight: 2, paddingLeft: '1.5rem', margin: 0 }}>
            <li>Viselj kényelmes, szennyezhető ruhát és jó cipőt</li>
            <li>Hozz magaddal vizet a kutyának, főleg nyáron</li>
            <li>Kerüld az extrém időjárást (hőség, zivatar, fagy)</li>
            <li>Légy türelmes — sok kutya még tanulja a helyes viselkedést</li>
            <li>Beszélj a kutyával, bátorítsd, és dicsérd meg, ha jól viselkedik</li>
            <li>Készíts fotókat, és oszd meg a közösségi oldalunkon!</li>
          </ul>
        </div>

        <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
          <h3 style={{ marginTop: 0, fontSize: '1.8rem', color: 'var(--primary-light)', marginBottom: '1rem' }}>
            🐾 Készen állsz sétáltatni?
          </h3>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Gyere el hozzánk nyitvatartási időben, és regisztrálj! Várunk szeretettel.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <div style={{ 
              padding: '1rem 1.5rem', 
              background: 'rgba(99, 102, 241, 0.1)', 
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--primary)'
            }}>
              <strong style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Nyitvatartás:</strong>
              <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>H-P: 10:00-18:00 | Szo: 10:00-14:00</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
