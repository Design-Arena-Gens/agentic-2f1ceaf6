export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-size opacity-40" />
      <div className="container-max relative py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/70">
            <span className="inline-block h-2 w-2 rounded-full bg-green-400" />
            Legal tech de alta performance
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Direito em escala, <span className="bg-gradient-to-tr from-primary to-accent bg-clip-text text-transparent">intelig?ncia</span> em cada caso.
          </h1>
          <p className="mt-6 text-lg text-white/80">
            Capte, qualifique e opere casos com IA + rede de advogados parceiros. Efici?ncia, clareza e resultados ? sem juridiqu?s.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#parceiros" className="button-primary w-full sm:w-auto">Sou Advogado(a) ? Quero Parceria</a>
            <a href="#cta" className="button-secondary w-full sm:w-auto">Sou Cliente ? Preciso de Ajuda</a>
          </div>
        </div>
      </div>
    </section>
  );
}
