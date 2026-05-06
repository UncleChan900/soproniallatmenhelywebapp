import React, { useState, useRef, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import LoadingOverlay from "./components/LoadingOverlay";
import Animals from "./pages/Animals";
import Favorites from "./pages/Favorites";
import Admin from "./pages/Admin";
import AddAnimal from "./pages/AddAnimal";
import Login from "./pages/Login";
import Support from "./pages/Support";
import Contact from "./pages/Contact";
import ChooseSpecies from "./pages/ChooseSpecies";
import Home from "./pages/Home";
import Messages from "./pages/Messages";
import Orokbefogadas from "./pages/info/Orokbefogadas";
import IdeiglenesOrokbefogadas from "./pages/info/IdeiglenesOrokbefogadas";
import Setaltatas from "./pages/info/Setaltatas";
import Hazirend from "./pages/info/Hazirend";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [infoMenuOpen, setInfoMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const infoMenuRef = useRef(null);
  const [role, setRole] = useState(sessionStorage.getItem('role'));

  useEffect(() => {
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
      if (infoMenuRef.current && !infoMenuRef.current.contains(e.target)) {
        setInfoMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  
  useEffect(() => {
    const onAuth = () => setRole(sessionStorage.getItem('role'));
    window.addEventListener('authChanged', onAuth);
    return () => window.removeEventListener('authChanged', onAuth);
  }, []);

  return (
    <>
      <LoadingOverlay />
      <div className="navbar" style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ marginRight: "auto" }}>
          <Link to="/" className="logo-link">
            <img src="/uploads/logo.png" alt="Home" style={{ height: 100, width: "auto", display: "block" }} />
          </Link>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {role === 'admin' ? (
            
            <>
              <Link to="/admin">Admin felület</Link>
              <Link to="/admin/uzenetek">Üzenetek</Link>
              <Link to="/admin/uj">Új állat</Link>
            </>
          ) : (
            
            <>
              <Link to="/kedvencek">Örökbefogadás</Link>
              <div style={{ position: "relative" }} ref={menuRef} onMouseEnter={() => setMenuOpen(true)} onMouseLeave={() => setMenuOpen(false)}>
                <span style={{ textDecoration: "none", cursor: 'default', fontWeight: 600 }}>Állataink ▾</span>
                <div className="dropdown" style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  background: "#fff",
                  padding: "8px",
                  borderRadius: 8,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                  display: menuOpen ? "block" : "none",
                  minWidth: 160,
                  zIndex: 40
                }}>
                  <Link to="/allataink/kutya" onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "8px 10px", color: "#111", textDecoration: "none" }}>Kutyák</Link>
                  <Link to="/allataink/macska" onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "8px 10px", color: "#111", textDecoration: "none" }}>Macskák</Link>
                </div>
              </div>

              <div style={{ position: "relative" }} ref={infoMenuRef} onMouseEnter={() => setInfoMenuOpen(true)} onMouseLeave={() => setInfoMenuOpen(false)}>
                <span style={{ textDecoration: "none", cursor: 'default', fontWeight: 600 }}>Tudnivalók ▾</span>
                <div className="dropdown" style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  background: "#fff",
                  padding: "8px",
                  borderRadius: 8,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                  display: infoMenuOpen ? "block" : "none",
                  minWidth: 180,
                  zIndex: 40
                }}>
                  <Link to="/tudnivalok/orokbefogadas" onClick={() => setInfoMenuOpen(false)} style={{ display: "block", padding: "8px 10px", color: "#111", textDecoration: "none" }}>Örökbefogadás</Link>
                  <Link to="/tudnivalok/ideiglenes-orokbefogadas" onClick={() => setInfoMenuOpen(false)} style={{ display: "block", padding: "8px 10px", color: "#111", textDecoration: "none" }}>Ideiglenes örökbefogadás</Link>
                  <Link to="/tudnivalok/setaltatas" onClick={() => setInfoMenuOpen(false)} style={{ display: "block", padding: "8px 10px", color: "#111", textDecoration: "none" }}>Sétáltatási szabályzat</Link>
                  <Link to="/tudnivalok/hazirend" onClick={() => setInfoMenuOpen(false)} style={{ display: "block", padding: "8px 10px", color: "#111", textDecoration: "none" }}>Házirend</Link>
                </div>
              </div>

              <Link to="/support">Támogatás</Link>
              <Link to="/contact">Kapcsolat</Link>
            </>
          )}
        </div>
      </div>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allataink/:faj" element={<Animals />} />
          <Route path="/kedvencek" element={<Favorites />} />
          <Route path="/support" element={<Support />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/uj" element={<AddAnimal />} />
          <Route path="/admin/uzenetek" element={<Messages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tudnivalok/orokbefogadas" element={<Orokbefogadas />} />
          <Route path="/tudnivalok/ideiglenes-orokbefogadas" element={<IdeiglenesOrokbefogadas />} />
          <Route path="/tudnivalok/setaltatas" element={<Setaltatas />} />
          <Route path="/tudnivalok/hazirend" element={<Hazirend />} />
        </Routes>
      </div>
    </>
  );
}

export default App;