export default function Tech() {
  const items = [
    {
      title: 'Modelos de IA propriet?rios',
      desc: 'Classifica??o de casos, prioriza??o e enrichment com privacidade por padr?o.'
    },
    {
      title: 'Infra segura e escal?vel',
      desc: 'Arquitetura serverless e storage cifrado para confidencialidade e disponibilidade.'
    },
    {
      title: 'Opera??o orientada a dados',
      desc: 'KPIs por tese e canal, testes A/B e otimiza??o cont?nua do funil.'
    }
  ];

  return (
    <section id="tecnologia" className="border-t border-white/10 bg-white/[0.02] py-20 sm:py-24">
      <div className="container-max">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Tecnologia & IA</h2>
          <p className="mt-3 text-white/70">Solu??es de fintech aplicadas ao Direito ? com rigor e ?tica.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <div className="card p-6" key={it.title}>
              <h3 className="text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-white/70">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
