function SearchBar({ szures, setSzures, hideFaj = false }) {
  return (
    <div style={{ 
      marginBottom: "2.5rem", 
      display: "flex", 
      gap: "1rem", 
      alignItems: "center", 
      flexWrap: "wrap",
      padding: "1.5rem",
      background: "rgba(30, 41, 59, 0.4)",
      backdropFilter: "blur(20px)",
      borderRadius: "16px",
      border: "1px solid rgba(148, 163, 184, 0.1)"
    }}>
      {!hideFaj && (
        <select
          value={szures.faj}
          onChange={(e) =>
            setSzures({ ...szures, faj: e.target.value })
          }
          style={{ flex: "1 1 200px" }}
        >
          <option value="">🐾 Összes faj</option>
          <option value="Kutya">🐕 Kutya</option>
          <option value="Macska">🐈 Macska</option>
        </select>
      )}

      <select
        value={szures.nem}
        onChange={(e) =>
          setSzures({ ...szures, nem: e.target.value })
        }
        style={{ flex: "1 1 180px" }}
      >
        <option value="">⚧ Összes nem</option>
        <option value="Hím">♂ Hím</option>
        <option value="Nőstény">♀ Nőstény</option>
      </select>

      <select
        value={szures.elerhetoseg || ""}
        onChange={(e) =>
          setSzures({ ...szures, elerhetoseg: e.target.value })
        }
        style={{ flex: "1 1 200px" }}
      >
        <option value="">📊 Összes elérhetőség</option>
        <option value="elérhető">✅ Elérhető</option>
        <option value="függőben">⏳ Függőben</option>
      </select>
    </div>
  );
}

export default SearchBar;