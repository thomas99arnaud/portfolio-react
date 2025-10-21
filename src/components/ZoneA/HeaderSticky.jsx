// src/components/HeaderSticky.jsx
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const HeaderSticky = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-1">
        {/* Identité à gauche */}
        <div className="flex items-center gap-3">
          <span className="font-semibold tracking-tight">Thomas Arnaud</span>
          <span className="hidden sm:inline-block h-4 w-px bg-slate-300" />
          <span className="hidden sm:inline text-xs text-slate-500">
            Ingénieur Data • IA • DevOps • Software
          </span>
        </div>

        {/* Contacts à droite */}
        <div className="flex items-center gap-2">
          {/* Email */}
          <a
            href="mailto:thomas.arnaud999@gmail.com"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm hover:bg-slate-50"
          >
            <Mail className="h-4 w-4" />
            <span className="hidden sm:inline">thomas.arnaud999@gmail.com</span>
            <span className="sm:hidden">Email</span>
          </a>

          {/* Téléphone (remplace par ton vrai numéro) */}
          <a
            href="tel:+33612345678"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm hover:bg-slate-50"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">+33 6 52 27 09 27</span>
            <span className="sm:hidden">Appeler</span>
          </a>

          {/* Localisation (affichée dès md) */}
          <div className="hidden md:flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm">
            <MapPin className="h-4 w-4" />
            <span>Monde</span>
          </div>

          {/* GitHub */}
          <a
            href="https://github.com/thomas99arnaud"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-slate-800"
          >
            <Github className="h-4 w-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/thomas-arnaud-644221223"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
          >
            <Linkedin className="h-4 w-4" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default HeaderSticky;
