export default function ForLawyers() {
  const bullets = [
    'Leads qualificados e prontos para a??o',
    'Distribui??o justa e transparente',
    'Gest?o de SLAs e compliance',
    'Suporte de marketing e tecnologia'
  ];
  return (
    <section id="para-advogados" className="border-t border-white/10 bg-white/[0.02] py-20 sm:py-24">
      <div className="container-max grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold sm:text-4xl">Para Advogados(as) Parceiros</h2>
          <p className="mt-3 text-white/70">
            Cres?a sua carteira com previsibilidade. A SmartJus conecta casos certos a escrit?rios de alta performance.
          </p>
          <ul className="mt-6 space-y-2 text-white/80">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" /> {b}
              </li>
            ))}
          </ul>
          <a href="#parceiros" className="button-primary mt-8 inline-flex">Seja parceiro(a) agora</a>
        </div>
        <div className="card p-8">
          <h3 className="text-xl font-semibold">Quero ser parceiro(a)</h3>
          <form className="mt-4 grid gap-4" method="post" action="/api/lead" data-role="lawyer">
            <input name="role" type="hidden" value="lawyer" />
            <input className="w-full rounded-lg border border-white/15 bg-white/5 p-3 outline-none" name="name" placeholder="Seu nome" required />
            <input className="w-full rounded-lg border border-white/15 bg-white/5 p-3 outline-none" name="email" placeholder="Seu e-mail" type="email" required />
            <input className="w-full rounded-lg border border-white/15 bg-white/5 p-3 outline-none" name="office" placeholder="Escrit?rio / OAB (opcional)" />
            <textarea className="w-full rounded-lg border border-white/15 bg-white/5 p-3 outline-none" name="message" placeholder="?reas de atua??o / regi?es" rows={4} />
            <button className="button-primary" type="submit">Quero receber casos</button>
            <p className="text-sm text-white/60">Ao enviar, voc? concorda com nossa pol?tica de privacidade.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
