import { useState, useRef, useEffect } from "react";
import api from "../api";
import Footer from "../components/Footer";

export default function Contact() {
  const [nev, setNev] = useState("");
  const [email, setEmail] = useState("");
  const [uzenet, setUzenet] = useState("");
  const [status, setStatus] = useState(null);

  const [chatEmail, setChatEmail] = useState('');
  const [chatMsgs, setChatMsgs] = useState(null);
  const [chatInput, setChatInput] = useState('');
  const [chatName, setChatName] = useState('');
  const [chatSending, setChatSending] = useState(false);
  const chatBottomRef = useRef(null);

  useEffect(() => {
    if (chatMsgs && chatBottomRef.current) {
      chatBottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMsgs]);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      await api.post("/contact", { nev, email, uzenet });
      setNev("");
      setEmail("");
      setUzenet("");
      setStatus("ok");
    } catch (err) {
      setStatus("error");
    }
  }

  async function loadChat(emailToLoad) {
    const target = emailToLoad || chatEmail;
    if (!target) return alert('Add meg az e-mail címed.');
    try {
      const res = await api.get('/uzenetek', { params: { email: target } });
      const msgs = res.data || [];
      setChatMsgs(msgs);
      if (msgs.length > 0) {
        const first = msgs.find(m => m.sender === 'user');
        if (first) setChatName(first.nev);
      }
    } catch {
      alert('Hiba az üzenetek betöltésekor.');
    }
  }

  async function sendChatMessage() {
    if (!chatInput.trim()) return;
    if (!chatName) return alert('Kérlek előbb küldd el az első üzenetedet az űrlapon.');
    setChatSending(true);
    try {
      await api.post("/contact", { nev: chatName, email: chatEmail, uzenet: chatInput.trim() });
      setChatInput('');
      await loadChat(chatEmail);
    } catch {
      alert('Hiba az üzenet küldésekor.');
    } finally {
      setChatSending(false);
    }
  }

  return (
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '3rem' }}>💬 Kapcsolat</h2>
      </div>

      {status === 'ok' && (
        <div style={{ 
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.1))', 
          border: '1px solid var(--success)', 
          padding: '1.5rem', 
          marginBottom: '2rem', 
          borderRadius: 'var(--radius-lg)', 
          textAlign: 'center', 
          color: 'var(--text-primary)', 
          fontWeight: 500, 
          fontSize: '1.1rem',
          boxShadow: '0 4px 12px rgba(16, 185, 129, 0.2)'
        }}>
          <strong style={{ fontSize: '1.3rem', display: 'block', marginBottom: '0.5rem' }}>✅ Üzenet sikeresen elküldve!</strong>
          <div style={{ color: 'var(--text-secondary)' }}>Köszönjük — a menhely felveszi veled a kapcsolatot a megadott e-mail címen.</div>
        </div>
      )}

      {status === 'error' && (
        <div style={{ 
          background: 'rgba(239, 68, 68, 0.1)', 
          border: '1px solid var(--danger)', 
          padding: '1.25rem', 
          marginBottom: '1.5rem', 
          borderRadius: 'var(--radius-lg)',
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>
            <strong style={{ fontSize: '1.1rem', display: 'block', marginBottom: '0.25rem' }}>❌ Hiba történt</strong>
            <div style={{ color: 'var(--text-secondary)' }}>Az üzeneted nem került elküldésre — próbáld újra később.</div>
          </div>
          <button onClick={() => setStatus(null)} style={{ background: 'rgba(148, 163, 184, 0.2)', color: 'var(--text-primary)' }}>Bezár</button>
        </div>
      )}

  <div className="two-col">
        <div>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Ha kérdésed van a befogadással, támogatással vagy az állatokkal kapcsolatban, írj nekünk az alábbi űrlapon. Kérjük, add meg az e-mail címed, hogy válaszolni tudjunk.
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.25rem' }}>
            <label style={{ display: 'block' }}>
              <span style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                fontWeight: 600, 
                color: 'var(--text-primary)',
                fontSize: '0.95rem'
              }}>👤 Név</span>
              <input placeholder="Add meg a neved" value={nev} onChange={e => setNev(e.target.value)} required />
            </label>

            <label style={{ display: 'block' }}>
              <span style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                fontWeight: 600, 
                color: 'var(--text-primary)',
                fontSize: '0.95rem'
              }}>✉️ E-mail (ide fogunk válaszolni)</span>
              <input placeholder="pelda@email.hu" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
            </label>

            <label style={{ display: 'block' }}>
              <span style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                fontWeight: 600, 
                color: 'var(--text-primary)',
                fontSize: '0.95rem'
              }}>💭 Üzenet</span>
              <textarea placeholder="Írd ide az üzenetedet..." rows={8} value={uzenet} onChange={e => setUzenet(e.target.value)} required />
            </label>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <button type="submit" disabled={status === 'sending'} style={{ flex: 1, marginTop: 0 }}>
                {status === 'sending' ? '📤 Küldés...' : '📤 Küldés'}
              </button>
            </div>
          </form>
        </div>

        <div>
          <div className="card" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
            <h3 style={{ marginTop: 0, marginBottom: '1.25rem', fontSize: '1.5rem', color: 'var(--primary-light)' }}>📞 Elérhetőségek</h3>
            <p style={{ margin: '0.75rem 0', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1rem' }}>
              <span style={{ fontSize: '1.25rem' }}>☎️</span>
              <span><strong>Telefon:</strong> +36 30 123 4567</span>
            </p>
            <p style={{ margin: '0.75rem 0', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1rem' }}>
              <span style={{ fontSize: '1.25rem' }}>✉️</span>
              <span><strong>E-mail:</strong> info@soproniallatmenhely.hu</span>
            </p>
          </div>

          <div className="card" style={{ padding: '1.5rem' }}>
            <h3 style={{ marginTop: 0, marginBottom: '1rem', fontSize: '1.5rem', color: 'var(--accent-light)' }}>💬 Válaszaim</h3>
            <p style={{ margin: '0.75rem 0', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Add meg az e-mail címed a beszélgetés megtekintéséhez.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem', alignItems: 'center' }}>
              <input
                placeholder="📧 E-mail cím"
                type="email"
                value={chatEmail}
                onChange={e => setChatEmail(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && loadChat()}
                style={{ flex: 1, marginBottom: 0 }}
              />
              <button onClick={() => loadChat()} style={{ whiteSpace: 'nowrap', background: 'linear-gradient(135deg, var(--accent), var(--success))', marginTop: 0 }}>
                🔍 Megnyitás
              </button>
            </div>

            {chatMsgs === null && (
              <p style={{ marginTop: '1.25rem', color: 'var(--text-muted)', fontSize: '0.9rem', textAlign: 'center', fontStyle: 'italic' }}>
                Add meg az e-mail címed, majd nyisd meg a beszélgetést.
              </p>
            )}

            {chatMsgs !== null && chatMsgs.length === 0 && (
              <p style={{ marginTop: '1.25rem', color: 'var(--text-muted)', fontSize: '0.9rem', textAlign: 'center' }}>
                Ezzel az e-mail címmel még nincs üzenet.
              </p>
            )}

            {chatMsgs !== null && chatMsgs.length > 0 && (
              <div style={{ marginTop: '1.25rem' }}>
                <div style={{ 
                  maxHeight: 400, 
                  overflowY: 'auto', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '0.75rem',
                  padding: '0.5rem',
                  background: 'rgba(15, 20, 25, 0.3)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)'
                }}>
                  {chatMsgs.map(m => (
                    <div key={m.id} style={{
                      padding: '1rem',
                      background: m.sender === 'admin' 
                        ? 'linear-gradient(135deg, rgba(20, 184, 166, 0.15), rgba(5, 150, 105, 0.1))' 
                        : 'rgba(30, 41, 59, 0.5)',
                      borderLeft: `3px solid ${m.sender === 'admin' ? 'var(--accent)' : 'var(--primary)'}`,
                      borderRadius: 'var(--radius-sm)',
                      backdropFilter: 'blur(10px)'
                    }}>
                      <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        {m.sender === 'admin' ? '🏢 Menhely' : `👤 ${m.nev}`} — {new Date(m.datum).toLocaleDateString('hu-HU')}
                      </div>
                      <div style={{ fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.6, whiteSpace: 'pre-wrap', wordBreak: 'break-word', overflowWrap: 'anywhere' }}>{m.uzenet}</div>
                    </div>
                  ))}
                  <div ref={chatBottomRef} />
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem', alignItems: 'center' }}>
                  <input
                    placeholder="💬 Írj üzenetet..."
                    value={chatInput}
                    onChange={e => setChatInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && !chatSending && sendChatMessage()}
                    style={{ flex: 1, marginBottom: 0 }}
                    disabled={chatSending}
                  />
                  <button onClick={sendChatMessage} disabled={chatSending || !chatInput.trim()} style={{ marginTop: 0 }}>
                    {chatSending ? '📤...' : '📤'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
