export default function Home() {
  return (
    <main>

      {/* BANNER */}
      <div className="banner">
        <h1>BRATVA - PODER BÉLICO</h1>
      </div>

      {/* SOBRE */}
      <section id="sobre">
        <h2>Quem Somos</h2>
        <p>
          A Bratva é uma organização responsável pela venda e distribuição
          de armamentos bélicos dentro do MTA Roleplay. Atuamos com disciplina,
          estratégia e total sigilo.
        </p>
      </section>

      {/* ARMAMENTOS */}
      <section id="armas">
        <h2>Armamentos</h2>
        <div className="cards">
          <div className="card">Pistolas</div>
          <div className="card">Submetralhadoras</div>
          <div className="card">Fuzis</div>
          <div className="card">Munições</div>
          <div className="card">Coletes Balísticos</div>
        </div>
      </section>

      {/* REGRAS */}
      <section id="regras">
        <h2>Regras da Organização</h2>
        <div className="card">
          <ul>
            <li>Proibido RDM.</li>
            <li>Respeitar a hierarquia.</li>
            <li>Vendas apenas com autorização dos superiores.</li>
            <li>Sigilo absoluto sobre operações.</li>
            <li>Uso obrigatório da vestimenta oficial.</li>
          </ul>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato">
        <h2>Contato</h2>
        <p>
          Recrutamentos e negociações apenas através dos líderes dentro do servidor.
        </p>
      </section>

    </main>
  );
}
