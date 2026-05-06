import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function ChooseSpecies() {
  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem 1rem', background: '#f3f5f7' }}>
      <div style={{ position: 'relative', width: '100%', maxWidth: 1100, height: 520, borderRadius: 14 }}>
        
        <div style={{
          position: 'absolute',
          left: '50%',
          top: 24,
          transform: 'translateX(-50%)',
          width: 420,
          bottom: 24,
          borderRadius: 14,
          backgroundImage: "url('/uploads/hundundkatze.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow: '0 18px 50px rgba(0,0,0,0.15)',
          zIndex: 0
        }} />

        
        <div style={{ position: 'relative', zIndex: 1, background: 'rgba(255,255,255,0.95)', borderRadius: 14, boxShadow: '0 12px 36px rgba(0,0,0,0.12)', padding: 28, height: '100%' }}>
          <div style={{ textAlign: 'center', color: '#111' }}>
            <h1 style={{ margin: 0, fontSize: 34 }}>Állataink</h1>
            <p style={{ marginTop: 8 }}>Válassz a kutyák és macskák közül, hogy megtekinthesd a jelenleg elérhető védenceinket.</p>
          </div>

          <div style={{ display: 'flex', gap: 32, justifyContent: 'center', marginTop: 24, alignItems: 'center', height: '100%' }}>
            <div style={{ width: 300, textAlign: 'center' }}>
              <div style={{ width: 160, height: 160, margin: '0 auto', borderRadius: '50%', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.15)' }}>
                <img src="/uploads/dog.png" alt="Kutya" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ marginTop: 18 }}>
                <Link to="/allataink/kutya" style={{ display: 'inline-block', padding: '14px 28px', background: '#f6b000', color: '#111', borderRadius: 10, textDecoration: 'none', fontWeight: 800 }}>Kutyák</Link>
              </div>
            </div>

            <div style={{ width: 300, textAlign: 'center' }}>
              <div style={{ width: 160, height: 160, margin: '0 auto', borderRadius: '50%', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.15)' }}>
                <img src="/uploads/cat.png" alt="Macska" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ marginTop: 18 }}>
                <Link to="/allataink/macska" style={{ display: 'inline-block', padding: '14px 28px', background: '#1a73e8', color: '#fff', borderRadius: 10, textDecoration: 'none', fontWeight: 800 }}>Macskák</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
