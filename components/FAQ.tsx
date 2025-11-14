export default function FAQ() {
  const faqs = [
    {
      q: 'Como a SmartJus qualifica os casos?',
      a: 'Utilizamos modelos de IA para triagem inicial e enriquecimento de dados, sempre revisados por humanos.'
    },
    {
      q: 'Como virar parceiro(a)?',
      a: 'Preencha o formul?rio e nossa equipe entrar? em contato para valida??o de perfil e regi?es de atua??o.'
    },
    {
      q: 'Como protegem meus dados?',
      a: 'Seguimos pr?ticas de seguran?a e privacidade por padr?o: cifragem, controle de acesso e auditoria.'
    }
  ];
  return (
    <section id="faq" className="border-t border-white/10 bg-white/[0.02] py-20 sm:py-24">
      <div className="container-max">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Perguntas frequentes</h2>
          <p className="mt-3 text-white/70">Clareza desde o primeiro contato.</p>
        </div>
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-white/10">
          {faqs.map((f) => (
            <details key={f.q} className="group px-2 py-4">
              <summary className="cursor-pointer list-none text-lg font-medium text-white/90">
                <span className="select-none">{f.q}</span>
              </summary>
              <p className="mt-2 text-white/70">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
