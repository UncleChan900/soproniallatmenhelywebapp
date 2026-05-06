import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

function Login() {
  const [email, setEmail] = useState("");
  const [jelszo, setJelszo] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await api.post("/login", { email, jelszo });

        sessionStorage.setItem("token", res.data.token);
        sessionStorage.setItem("role", res.data.role);
  try { window.dispatchEvent(new Event('authChanged')); } catch (e) {}

      navigate("/admin");
    } catch {
      alert("Hibás bejelentkezés");
    }
  };

  return (
    <>
      <h2>Admin bejelentkezés</h2>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Jelszó"
        value={jelszo}
        onChange={(e) => setJelszo(e.target.value)}
      />

      <button onClick={handleLogin}>Bejelentkezés</button>
    </>
  );
}

export default Login;