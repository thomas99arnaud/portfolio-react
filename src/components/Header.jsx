import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react"; // ou @heroicons si tu préfères

const Header = () => {
  return (
    <div className="relative z-10 flex flex-col items-start text-left space-y-4 mt-5">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-bold tracking-tight"
      >
        Thomas ARNAUD
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl md:text-2xl font-medium text-gray-700"
      >
        Ingénieur Data • IA • DevOps • Software
      </motion.h2>
      <p className="mt-4 max-w-2xl text-slate-600">
          À travers ce portfolio, je partage mes projets, issus aussi bien de mon parcours professionnel que de mes créations personnelles — une vitrine de ce que j’aime concevoir et développer.
      </p>
      <div className="flex flex-wrap gap-3 mt-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/thomas-arnaud-644221223"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-xl bg-blue-600 px-4 text-sm font-medium text-white hover:bg-blue-700 transition"
          >
            <Linkedin className="h-5 w-5 shrink-0 align-middle" />
            <span className="leading-none">LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/thomas99arnaud"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-xl bg-yellow-400 px-4 text-sm font-medium text-black hover:bg-yellow-500 transition"
          >
            <Github className="h-5 w-5 shrink-0 align-middle" />
            <span className="leading-none">GitHub</span>
          </a>

          {/* Contact */}
          <a
            href="#contact"
            className="inline-flex h-10 items-center gap-2 rounded-xl bg-green-600 px-4 text-sm font-medium text-white hover:bg-green-700 transition"
          >
            <span className="leading-none">Me contacter</span>
          </a>

          {/* Projets */}
          <a
            href="#projects"
            className="inline-flex h-10 items-center gap-2 rounded-xl bg-red-600 px-4 text-sm font-medium text-white hover:bg-red-700 transition"
          >
            <span className="leading-none">Voir mes projets</span>
          </a>
        </div>

    </div>
  );
};

export default Header;
