import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="home-footer">
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", display: "flex", gap: '3rem', flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 320px" }}>
          <h3 style={{ marginTop: 0, fontSize: '1.5rem', background: 'linear-gradient(135deg, #818cf8, #f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            🐾 Soproni Állatmenhely
          </h3>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Szeretettel várjuk a látogatókat és támogatásodat — minden felajánlás számít.</p>
          <p style={{ margin: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            📍 <span>9400 Sopron, Minta utca 7.</span>
          </p>
          <p style={{ margin: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            📞 <span>+36 99 123 456</span>
          </p>
          <p style={{ margin: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            ✉️ <span>info@soproniallatmenhely.hu</span>
          </p>
        </div>

        <div style={{ flex: "1 1 220px" }}>
          <h4 style={{ marginTop: 0, fontSize: '1.2rem', color: '#818cf8' }}>⏰ Nyitvatartás</h4>
          <p style={{ margin: '0.5rem 0' }}>H–P: 10:00 – 18:00</p>
          <p style={{ margin: '0.5rem 0' }}>Szo: 10:00 – 14:00</p>
          <p style={{ margin: '0.5rem 0' }}>Vasárnap zárva</p>
        </div>

        <div style={{ flex: "1 1 300px" }}>
          <h4 style={{ marginTop: 0, fontSize: '1.2rem', color: '#2dd4bf' }}>💰 Támogatás</h4>
          <p style={{ margin: '0.5rem 0', fontSize: '0.95rem' }}>Bankszámlaszám:<br/><strong>11773001-20000000-00000000</strong></p>
          <p style={{ margin: '0.5rem 0', fontSize: '0.95rem' }}>Adószám: <strong>18693180-1-13</strong></p>
          <p style={{ marginTop: '1.5rem', marginBottom: '0.5rem', fontWeight: 600 }}>Kövess minket:</p>
          <div style={{ display: "flex", gap: '1rem', marginTop: '0.75rem', alignItems: 'center' }}>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', transition: 'transform 0.3s', filter: 'brightness(0.9)' }} aria-label="Facebook" onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.15)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <img src="/uploads/facebook.svg" alt="Facebook" style={{ width: 40, height: 40 }} />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', transition: 'transform 0.3s', filter: 'brightness(0.9)' }} aria-label="Instagram" onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.15)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <img src="/uploads/instagram.svg" alt="Instagram" style={{ width: 40, height: 40 }} />
            </a>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(148, 163, 184, 0.1)", marginTop: '2.5rem', paddingTop: '1.5rem' }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", color: "#94a3b8", fontSize: '0.9rem', textAlign: 'center', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            © {new Date().getFullYear()} Soproni Állatmenhely — Minden jog fenntartva.
          </div>
          <Link 
            to="/login" 
            style={{ 
              color: '#64748b', 
              fontSize: '0.75rem', 
              textDecoration: 'none', 
              opacity: 0.6, 
              transition: 'opacity 0.3s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '0.6'}
          >
            🔐 Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}
