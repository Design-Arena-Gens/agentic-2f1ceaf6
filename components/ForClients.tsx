export default function ForClients() {
  const bullets = [
    'Resposta r?pida e clara',
    'Avalia??o inicial por IA + humano',
    'Advogados especializados em cada causa',
    'Acompanhamento transparente do seu caso'
  ];
  return (
    <section id="para-clientes" className="py-20 sm:py-24">
      <div className="container-max grid items-center gap-10 lg:grid-cols-2">
        <div className="order-2 lg:order-1 card p-8">
          <h3 className="text-xl font-semibold">Sou cliente ? preciso de ajuda</h3>
          <form className="mt-4 grid gap-4" method="post" action="/api/lead" data-role="client">
            <input name="role" type="hidden" value="client" />
            <input className="w-full rounded-lg border border-white/15 bg-white/5 p-3 outline-none" name="name" placeholder="Seu nome" required />
            <input className="w-full rounded-lg border border-white/15 bg-white/5 p-3 outline-none" name="email" placeholder="Seu e-mail" type="email" required />
            <textarea className="w-full rounded-lg border border-white/15 bg-white/5 p-3 outline-none" name="message" placeholder="Conte brevemente sua situa??o" rows={4} />
            <button className="button-primary" type="submit">Quero falar com um especialista</button>
          </form>
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-3xl font-semibold sm:text-4xl">Para Clientes Finais</h2>
          <p className="mt-3 text-white/70">
            Seu caso, tratado com intelig?ncia e cuidado humano. Conectamos voc? ao advogado certo, no tempo certo.
          </p>
          <ul className="mt-6 space-y-2 text-white/80">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-accent" /> {b}
              </li>
            ))}
          </ul>
          <a href="#cta" className="button-secondary mt-8 inline-flex">Tirar d?vidas r?pidas</a>
        </div>
      </div>
    </section>
  );
}
