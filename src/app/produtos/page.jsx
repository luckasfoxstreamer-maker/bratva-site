const produtos = [
  {
    nome: "Pistola",
    descricao: "Pistola leve para combate urbano.",
    imagem: "/pistola.png"
  },
  {
    nome: "Fuzil",
    descricao: "Alto poder de fogo em confrontos.",
    imagem: "/ak47.png"
  },
  {
    nome: "SMG Tática",
    descricao: "Ideal para combates rápidos.",
    imagem: "/smg.png"
  },
];

export default function Produtos() {
  return (
    <section className="container">
      <h2 className="title">Armamentos Disponíveis</h2>

      <div style={grid}>
        {produtos.map((item, index) => (
          <div key={index} style={card}>
            <img src={item.imagem} alt={item.nome} style={img} />
            <h3>{item.nome}</h3>
            <p>{item.descricao}</p>
            <button className="btn">Solicitar</button>
          </div>
        ))}
      </div>
    </section>
  );
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "30px",
  marginTop: "40px"
};

const card = {
  background: "#111",
  borderRadius: "15px",
  padding: "20px",
  textAlign: "center",
  border: "1px solid #222"
};

const img = {
  width: "100%",
  height: "150px",
  objectFit: "contain",
  marginBottom: "15px"
};
