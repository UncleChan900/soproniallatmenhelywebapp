import { useEffect, useState } from "react";

export default function LoadingOverlay() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer;
    const show = () => {
      clearTimeout(timer);
      setVisible(true);
    };
    const hide = () => {
      timer = setTimeout(() => setVisible(false), 150);
    };
    window.addEventListener("loadingStart", show);
    window.addEventListener("loadingEnd", hide);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("loadingStart", show);
      window.removeEventListener("loadingEnd", hide);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="loading-overlay" aria-label="Betöltés..." role="status">
      <div className="loading-spinner" />
      <span className="loading-text">Betöltés…</span>
    </div>
  );
}
