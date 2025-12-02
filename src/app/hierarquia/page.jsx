export default function Hierarquia() {
  return (
    <section className="container">
      <h1 className="title">Hierarquia da Bratva</h1>

      <p>
        A Bratva possui uma hierarquia rígida, baseada em disciplina, respeito e
        progressão por mérito. Todos os cargos possuem funções bem definidas,
        garantindo organização, eficiência e lealdade absoluta.
      </p>

      <div className="grid" style={{ marginTop: 32 }}>
        <div className="card">
          <h3>Pakhan (Líder)</h3>
          <p>
            Líder máximo da facção. Responsável por todas as decisões
            estratégicas, alianças, guerras e comunicação com a administração.
          </p>
        </div>

        <div className="card">
          <h3>Brat (Vice-Líder)</h3>
          <p>
            Braço direito do Pakhan. Coordena operações, supervisiona setores e
            assume a liderança na ausência do líder.
          </p>
        </div>

        <div className="card">
          <h3>Capitães</h3>
          <p>
            Responsáveis por comandar equipes, recrutar membros, treinar soldados
            e manter a disciplina interna.
          </p>
        </div>

        <div className="card">
          <h3>Soldados</h3>
          <p>
            Membros operacionais da facção. Executam ações, guerras, missões e
            atividades criminosas.
          </p>
        </div>

        <div className="card">
          <h3>Recrutas</h3>
          <p>
            Em fase de avaliação. Passam por testes de comportamento, roleplay,
            lealdade e comprometimento.
          </p>
        </div>
      </div>
    </section>
  );
}
