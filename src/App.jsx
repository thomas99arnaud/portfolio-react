import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, Code2, Film, Image as ImageIcon } from "lucide-react";

import OlympicBackground from "./components/OlympicBackground";
import Header from "./components/Header";
import HeaderSticky from "./components/HeaderSticky";


// —— Nouveau design: "Swiss Clean" — sobre, lisible, pro
// Couleurs neutres, beaucoup d'espace, cartes légères, pas de dégradés flashy

const techProjects = [
  {
    title: "Dashboard IoT temps réel",
    description:
      "Pipeline de données (MQTT → API Node) + visualisation, alertes WebSocket.",
    stack: ["TypeScript", "React", "Node", "WebSocket", "Docker"],
    links: { live: "#", github: "#" },
    cover:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Moteur de recommandation",
    description:
      "API Python (FastAPI) pour recommandations, entraînement batch + prédiction on-demand.",
    stack: ["Python", "FastAPI", "Pandas", "scikit-learn", "PostgreSQL"],
    links: { live: "#", github: "#" },
    cover:
      "https://images.unsplash.com/photo-1551281044-8d8d0d8c2bd5?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Site vitrine performant",
    description: "SPA rapide, SEO + accessibilité (Lighthouse 95+), CI/CD.",
    stack: ["Vite", "React", "TailwindCSS", "Vercel"],
    links: { live: "#", github: "#" },
    cover:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
  },
];

const creativeProjects = [
  {
    kind: "video",
    title: "Showreel 2025",
    tools: ["DaVinci Resolve", "After Effects"],
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail:
      "https://images.unsplash.com/photo-1514890547357-a9ee1c5f7da3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    kind: "image",
    title: "Affiche événementielle",
    tools: ["Photoshop", "Illustrator"],
    src: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200&auto=format&fit=crop",
  },
  {
    kind: "image",
    title: "Cover album concept",
    tools: ["Figma", "Photoshop"],
    src: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=1200&auto=format&fit=crop",
  },
];

const skills = {
  tech: ["Python", "TypeScript", "React", "Node.js", "SQL", "Docker", "CI/CD", "Linux", "API Design"],
  creative: ["Photoshop", "Illustrator", "DaVinci Resolve", "After Effects", "Figma", "Motion Design"],
  soft: ["Autonomie", "Curiosité", "Rigueur", "Sens artistique"],
};

const Section = ({ title, icon: Icon, children, subtitle }) => (
  <section className="py-14">
    <div className="mb-8 flex items-end justify-between">
      <div>
        <div className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-slate-900">
          {Icon && <Icon className="h-6 w-6" aria-hidden />}
          <h2>{title}</h2>
        </div>
        {subtitle && <p className="mt-2 text-sm text-slate-500 max-w-2xl">{subtitle}</p>}
      </div>
    </div>
    {children}
  </section>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
    {children}
  </span>
);

export default function PortfolioApp() {
  return (
    <div className="min-h-screen text-slate-900">
      <OlympicBackground />
      {/* <HeaderSticky/> */}

      <main className="mx-auto max-w-6xl px-4">
        {/* Hero */}
        <section id="home" className="grid gap-10 py-16 md:grid-cols-5 md:py-20">
          <div className="md:col-span-3">
            <Header />
          </div>

          
          <div className="md:col-span-2">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <img
                alt="avatar"
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1200&auto=format&fit=crop"
              />
            </div>
            <div className="mt-3 flex gap-2">
              <Badge>Disponible</Badge>
              <Badge>Remote / Paris</Badge>
            </div>
          </div>


        </section>

        {/* Projets techniques */}
        <Section
          title="Projets techniques"
          icon={Code2}
          subtitle="Apps web, APIs, data & automation. Focus sur l'impact et le rôle."
        >
          <div className="grid gap-6 md:grid-cols-3">
            {techProjects.map((p) => (
              <article key={p.title} className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img src={p.cover} alt={p.title} className="h-full w-full object-cover transition group-hover:scale-[1.02]" loading="lazy" />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-semibold text-slate-900">{p.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <span key={t} className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-4 text-sm">
                    {p.links.live && (
                      <a href={p.links.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-slate-700 hover:underline">
                        <ExternalLink className="h-4 w-4" /> Live
                      </a>
                    )}
                    {p.links.github && (
                      <a href={p.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-slate-700 hover:underline">
                        <Github className="h-4 w-4" /> Code
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* Créatif */}
        <Section
          title="Créations visuelles & vidéo"
          icon={Film}
          subtitle="Quelques visuels et extraits vidéo."
        >
          <div className="grid gap-6 md:grid-cols-3">
            {creativeProjects.map((c) => (
              <div key={c.title} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                {c.kind === "video" ? (
                  <div className="aspect-video">
                    <iframe
                      className="h-full w-full"
                      src={c.url}
                      title={c.title}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="relative aspect-[4/3]">
                    <img src={c.src} alt={c.title} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="font-semibold">{c.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {c.tools?.map((t) => (
                      <span key={t} className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Compétences */}
        <Section title="Compétences" icon={ImageIcon} subtitle="Un mix de technique, créativité et soft skills.">
          <div className="grid gap-6 md:grid-cols-3">
            <SkillGroup title="Tech" items={skills.tech} />
            <SkillGroup title="Créatif" items={skills.creative} />
            <SkillGroup title="Soft skills" items={skills.soft} />
          </div>
        </Section>

        {/* À propos */}
        <Section title="À propos" subtitle="Ingénieur en informatique avec une sensibilité visuelle.">
          <div className="rounded-xl border border-slate-200 bg-white p-6 leading-relaxed text-slate-700">
            Passionné par la conception de systèmes fiables et la création d'expériences élégantes. J'aime relier le monde du code et celui de l'image : automatiser, optimiser, raconter une histoire à travers une interface ou une vidéo.
          </div>
        </Section>

        {/* Contact */}
        <Section title="Contact" subtitle="Parlons de vos idées ou besoins.">
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <form className="grid gap-4 md:grid-cols-2" action="https://formspree.io/f/ton-form-id" method="POST">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm text-slate-700">Nom</label>
                <input id="name" name="name" type="text" required className="rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-slate-900" placeholder="Ada Lovelace" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm text-slate-700">Email</label>
                <input id="email" name="email" type="email" required className="rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-slate-900" placeholder="ada@example.com" />
              </div>
              <div className="grid gap-2 md:col-span-2">
                <label htmlFor="message" className="text-sm text-slate-700">Message</label>
                <textarea id="message" name="message" rows={5} required className="rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-slate-900" placeholder="Décrivez votre projet…" />
              </div>
              <div className="md:col-span-2 flex items-center justify-between">
                <p className="text-xs text-slate-500">Réponse en 24–48h.</p>
                <button type="submit" className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">Envoyer</button>
              </div>
            </form>
          </div>
        </Section>
      </main>

      <footer className="border-t border-slate-200 py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Ton Nom — Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <a href="mailto:toi@example.com" className="hover:text-slate-700"><Mail className="h-4 w-4" /></a>
            <a href="#" className="hover:text-slate-700"><Github className="h-4 w-4" /></a>
            <a href="#" className="hover:text-slate-700"><Linkedin className="h-4 w-4" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SkillGroup({ title, items }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <h3 className="mb-3 text-lg font-semibold">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((x) => (
          <span key={x} className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-700">
            {x}
          </span>
        ))}
      </div>
    </div>
  );
}

