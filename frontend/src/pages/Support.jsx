import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Support() {
  return (
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>💝 Támogatás</h2>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: 800, margin: '0 auto', lineHeight: 1.7 }}>
          Köszönjük, hogy gondolsz ránk! Az alábbi módokon tudsz segíteni a menhely
          munkájában — minden apró segítség számít.
        </p>
      </div>

      <div className="support-grid">
        <div className="card support-card" style={{ padding: '1.25rem' }}>
          <div style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '0.75rem' }}>🏦</div>
          <h3 style={{ textAlign: 'center', marginBottom: '0.75rem', color: 'var(--primary-light)', fontSize: '1.1rem' }}>Banki átutalás</h3>
          <p style={{ marginBottom: '0.75rem', textAlign: 'center', fontSize: '0.85rem' }}>
            Kedvezményezett:<br/><strong style={{ fontSize: '0.9rem' }}>Soproni Állatmenhely</strong>
          </p>
          <p style={{ 
            marginBottom: '1rem', 
            padding: '0.75rem', 
            background: 'rgba(99, 102, 241, 0.1)', 
            borderRadius: '8px',
            fontFamily: 'monospace',
            fontSize: '0.8rem',
            textAlign: 'center',
            border: '1px solid var(--border-subtle)',
            wordBreak: 'break-all'
          }}>
            11773001-20000000-00000000
          </p>
          <button style={{ width: '100%', background: 'linear-gradient(135deg, var(--accent), var(--success))', fontSize: '0.9rem', padding: '0.6rem 1rem' }}>
            💳 Támogatás
          </button>
        </div>

        <div className="card support-card" style={{ padding: '1.25rem' }}>
          <div style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '0.75rem' }}>📊</div>
          <h3 style={{ textAlign: 'center', marginBottom: '0.75rem', color: 'var(--secondary-light)', fontSize: '1.1rem' }}>1% felajánlás</h3>
          <p style={{ marginBottom: '1rem', textAlign: 'center', fontSize: '0.85rem' }}>
            Adószámunk:<br/>
            <strong style={{ 
              fontSize: '1.1rem', 
              color: 'var(--text-primary)',
              display: 'inline-block',
              marginTop: '0.5rem',
              padding: '0.5rem 1rem',
              background: 'rgba(236, 72, 153, 0.1)',
              borderRadius: '8px'
            }}>18693180-1-13</strong>
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textAlign: 'center', lineHeight: 1.5 }}>
            Kérjük, add meg szervezetünket adóbevallásodnál.
          </p>
        </div>

        <div className="card support-card" style={{ padding: '1.25rem' }}>
          <div style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '0.75rem' }}>🎁</div>
          <h3 style={{ textAlign: 'center', marginBottom: '0.75rem', color: 'var(--accent-light)', fontSize: '1.1rem' }}>Termékadomány</h3>
          <p style={{ marginBottom: '0.75rem', lineHeight: 1.5, textAlign: 'center', fontSize: '0.85rem' }}>
            Tartós tápok, takarók, nyakörvek és gyógyszerek.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontStyle: 'italic', lineHeight: 1.5, textAlign: 'center' }}>
            Előzetesen egyeztess a menhellyel.
          </p>
        </div>

        <div className="card support-card" style={{ padding: '1.25rem' }}>
          <div style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '0.75rem' }}>🤝</div>
          <h3 style={{ textAlign: 'center', marginBottom: '0.75rem', color: 'var(--warning)', fontSize: '1.1rem' }}>Önkéntesség</h3>
          <p style={{ marginBottom: '1rem', lineHeight: 1.5, textAlign: 'center', fontSize: '0.85rem' }}>
            Szeretnél segíteni a napi feladatokban?
          </p>
          <Link to="/contact" style={{ 
            display: 'block', 
            textAlign: 'center',
            padding: '0.6rem 1rem',
            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
            color: 'white',
            borderRadius: '12px',
            textDecoration: 'none',
            fontWeight: 600,
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
            fontSize: '0.9rem'
          }}>
            ✉️ Írj
          </Link>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <Link to="/" style={{ 
          color: 'var(--primary-light)', 
          textDecoration: 'none', 
          fontSize: '1.1rem',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          transition: 'all 0.3s ease'
        }}>
          ← Vissza a főoldalra
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Support;
