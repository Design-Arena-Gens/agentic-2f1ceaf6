const items = [
  {
    title: 'Capta??o inteligente',
    desc: 'Tr?fego qualificado e funis de alta convers?o para diferentes ?reas do Direito.'
  },
  {
    title: 'Qualifica??o com IA',
    desc: 'Modelos propriet?rios triando, priorizando e enriquecendo cada lead com dados.'
  },
  {
    title: 'Opera??o em rede',
    desc: 'Distribui??o para advogados parceiros com SLA, compliance e gest?o de performance.'
  },
  {
    title: 'Resultados e escala',
    desc: 'Dashboards, previsibilidade e otimiza??o cont?nua de ROI por tese e canal.'
  }
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="container-max py-20 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">Como funciona</h2>
        <p className="mt-3 text-white/70">Uma m?quina de crescimento jur?dico orientada a dados.</p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <div key={it.title} className="card p-6">
            <h3 className="text-lg font-semibold">{it.title}</h3>
            <p className="mt-2 text-white/70">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
