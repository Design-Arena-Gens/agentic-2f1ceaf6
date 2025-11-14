import Link from 'next/link';

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-secondary/60 backdrop-blur">
      <div className="container-max flex h-16 items-center justify-between">
        <Link href="#" className="flex items-center gap-2 font-semibold">
          <span className="inline-block h-6 w-6 rounded-md bg-gradient-to-tr from-primary to-accent" />
          <span>SmartJus</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex text-sm text-white/80">
          <Link href="#como-funciona" className="hover:text-white">Como funciona</Link>
          <Link href="#para-advogados" className="hover:text-white">Para Advogados</Link>
          <Link href="#para-clientes" className="hover:text-white">Para Clientes</Link>
          <Link href="#tecnologia" className="hover:text-white">Tecnologia</Link>
          <Link href="#faq" className="hover:text-white">FAQ</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="#cta" className="button-secondary">Fale com a SmartJus</Link>
          <Link href="#parceiros" className="button-primary">Seja parceiro(a)</Link>
        </div>
      </div>
    </header>
  );
}
