const HeaderSticky = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#home" className="font-semibold tracking-tight">Mon Portfolio</a>
          <div className="flex items-center gap-4 text-sm">
            <a href="#projects" className="hover:text-slate-600">Projets</a>
            <a href="#creative" className="hover:text-slate-600">Créatif</a>
            <a href="#skills" className="hover:text-slate-600">Compétences</a>
            <a href="#about" className="hover:text-slate-600">À propos</a>
            <a href="#contact" className="rounded-lg bg-slate-900 px-3 py-1.5 font-medium text-white hover:bg-slate-800">Contact</a>
          </div>
        </nav>
      </header>
  );
};

export default HeaderSticky;