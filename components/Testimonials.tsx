export default function Testimonials() {
  const items = [
    {
      quote: 'A SmartJus elevou nosso volume com previsibilidade e cases de alta qualidade.',
      author: 'Carla, S?cia ? Prado & Lima'
    },
    {
      quote: 'Ganhei tempo e foco. Leads chegam j? qualificados e com fit ao escrit?rio.',
      author: 'Rafael, Advogado ? Contencioso C?vel'
    },
    {
      quote: 'Transpar?ncia e dados. Sabemos onde otimizar e por qu?.',
      author: 'Marina, COO ? Escrit?rio boutique'
    }
  ];

  return (
    <section className="py-20 sm:py-24">
      <div className="container-max">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Resultados que geram confian?a</h2>
          <p className="mt-3 text-white/70">Hist?rias reais de quem j? opera com a SmartJus.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <figure className="card p-6" key={it.author}>
              <blockquote className="text-white/90">?{it.quote}?</blockquote>
              <figcaption className="mt-4 text-sm text-white/60">{it.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
