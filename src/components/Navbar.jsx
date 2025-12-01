export default function Navbar() {
  return (
    <nav style={{
      background: "#111",
      padding: "15px 40px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "2px solid crimson"
    }}>
      <h2 style={{ color: "crimson" }}>BRATVA</h2>

      <div style={{ display: "flex", gap: 20 }}>
        <a href="#sobre">Sobre</a>
        <a href="#armas">Armamentos</a>
        <a href="#regras">Regras</a>
        <a href="#contato">Contato</a>
      </div>
    </nav>
  );
}
