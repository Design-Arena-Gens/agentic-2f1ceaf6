export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container-max flex flex-col items-center justify-between gap-6 text-sm text-white/60 md:flex-row">
        <div className="flex items-center gap-2">
          <span className="inline-block h-5 w-5 rounded-md bg-gradient-to-tr from-primary to-accent" />
          <span>SmartJus</span>
        </div>
        <p>? {new Date().getFullYear()} SmartJus. Todos os direitos reservados.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white">Privacidade</a>
          <a href="#" className="hover:text-white">Termos</a>
        </div>
      </div>
    </footer>
  );
}
