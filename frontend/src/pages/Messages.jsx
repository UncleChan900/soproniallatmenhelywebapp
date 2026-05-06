import { useEffect, useRef, useState } from 'react';
import api from '../api';

export default function Messages() {
  const [conversations, setConversations] = useState([]);
  const [activeEmail, setActiveEmail] = useState(null);
  const [activeThread, setActiveThread] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const chatBottomRef = useRef(null);

  const loadConversations = async () => {
    const res = await api.get('/uzenetek', { params: { group: 'threads' } });
    setConversations(res.data || []);
  };

  useEffect(() => {
    loadConversations();
  }, []);

  useEffect(() => {
    if (chatBottomRef.current) {
      chatBottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const openConversation = async (conv) => {
    setActiveEmail(conv.email);
    setActiveThread(conv.thread_id);
    const res = await api.get('/uzenetek', { params: { email: conv.email } });
    setMessages(res.data || []);
    setInput('');
  };

  const sendMessage = async () => {
    if (!input.trim() || !activeThread) return;
    setSending(true);
    try {
      await api.post('/uzenetek/chat', { thread_id: activeThread, uzenet: input.trim() });
      setInput('');
      const res = await api.get('/uzenetek', { params: { email: activeEmail } });
      setMessages(res.data || []);
      await loadConversations();
    } catch {
      alert('Hiba az üzenet küldésekor.');
    } finally {
      setSending(false);
    }
  };

  const deleteConversation = async () => {
    if (!confirm('Biztosan törlöd az egész beszélgetést?')) return;
    await api.delete(`/uzenetek/thread/${activeThread}`);
    setActiveEmail(null);
    setActiveThread(null);
    setMessages([]);
    setInput('');
    await loadConversations();
  };

  return (
    <div style={{ maxWidth: 1000, margin: '2rem auto', padding: '0 1rem', height: 'calc(100vh - 120px)', display: 'flex', flexDirection: 'column' }}>
      <h2 style={{ marginBottom: 12 }}>Üzenetek</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: 16, flex: 1, minHeight: 0 }}>

        {/* Bal oldal – beszélgetések listája */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, overflowY: 'auto' }}>
          {conversations.length === 0 && <p style={{ color: '#888' }}>Nincsenek beszélgetések.</p>}
          {conversations.map(c => {
            const isActive = activeEmail === c.email;
            return (
              <div
                key={c.email}
                onClick={() => openConversation(c)}
                style={{
                  cursor: 'pointer',
                  background: isActive ? 'rgba(99,102,241,0.25)' : 'rgba(30,41,59,0.4)',
                  border: `1px solid ${isActive ? 'rgba(99,102,241,0.6)' : 'rgba(148,163,184,0.1)'}`,
                  borderRadius: 12,
                  padding: '0.9rem 1rem',
                  transition: 'background 0.2s, border-color 0.2s',
                }}
              >
                <strong style={{ color: '#f1f5f9', fontSize: 14 }}>{c.nev}</strong>
                <div style={{ color: '#94a3b8', fontSize: 12, marginTop: 2 }}>{c.email}</div>
                <div style={{ marginTop: 4, fontSize: 13, color: '#cbd5e1', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {c.uzenet}
                </div>
              </div>
            );
          })}
        </div>

        {/* Jobb oldal – chat nézet */}
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: 0 }}>
          {!activeEmail && (
            <p style={{ color: '#888' }}>Válassz egy beszélgetést a listából.</p>
          )}

          {activeEmail && (
            <>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <div>
                  <strong style={{ color: '#ffffff' }}>{messages.find(m => m.sender === 'user')?.nev || activeEmail}</strong>
                  <div style={{ fontSize: 12, color: '#aab' }}>{activeEmail}</div>
                </div>
                <button onClick={deleteConversation} style={{ background: '#c33', color: '#fff' }}>Beszélgetés törlése</button>
              </div>

              <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 6 }}>
                {messages.map(m => {
                  const isAdmin = m.sender === 'admin';
                  const headerColor = isAdmin ? '#a5b4fc' : '#ffffff';
                  return (
                    <div key={m.id} style={{
                      padding: '8px 10px',
                      background: isAdmin ? 'rgba(99,102,241,0.12)' : 'rgba(255,255,255,0.05)',
                      borderRadius: 8,
                      boxSizing: 'border-box',
                      maxWidth: '100%'
                    }}>
                      <div style={{ fontWeight: 700, fontSize: 12, color: headerColor, marginBottom: 3 }}>
                        {isAdmin ? 'Admin' : m.nev} — {new Date(m.datum).toLocaleDateString('hu-HU')}
                      </div>
                      <div style={{ color: '#e8edf5', whiteSpace: 'pre-wrap', wordBreak: 'break-word', overflowWrap: 'anywhere' }}>{m.uzenet}</div>
                    </div>
                  );
                })}
                <div ref={chatBottomRef} />
              </div>

      <div style={{ display: 'flex', gap: 8, marginTop: 10, alignItems: 'center' }}>
                <input
                  placeholder="Írj üzenetet..."
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && !sending && sendMessage()}
                  style={{
        flex: 1,
        padding: '10px 14px',
        height: 44,
        lineHeight: '20px',
        borderRadius: 10,
        border: '1px solid rgba(148,163,184,0.2)',
        boxSizing: 'border-box',
        background: 'rgba(15,20,25,0.5)',
        marginBottom: 0,
      }}
                  disabled={sending}
                />
                <button
                  onClick={sendMessage}
                  disabled={sending || !input.trim()}
                  style={{
        padding: '10px 18px',
        height: 44,
        lineHeight: '20px',
        borderRadius: 10,
        border: 'none',
        cursor: 'pointer',
        background: 'linear-gradient(180deg,#6b46ff,#5b21b6)',
        color: '#fff',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        marginTop: 0,
        flexShrink: 0,
      }}
                >
                  Küldés
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
