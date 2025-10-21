import React, { useMemo, useState, useEffect, useRef } from "react";
import { Github, ExternalLink, Filter, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* --------- UI helpers --------- */
function Pill({ active, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-sm transition
        ${active ? "border-slate-900 bg-slate-900 text-white"
                 : "border-slate-300 bg-white text-slate-700 hover:bg-slate-100"}`}
    >
      {children}
    </button>
  );
}

/* --------- Modal --------- */
function useOnEscape(onClose) {
  useEffect(() => {
    const h = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose]);
}

function Modal({ open, onClose, project }) {
  useOnEscape(onClose);
  const panelRef = useRef(null);
  useEffect(() => { if (open) panelRef.current?.focus(); }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-black/40"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] px-4"
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
          >
            <div
              ref={panelRef} tabIndex={-1} role="dialog" aria-modal="true"
              className="w-full max-w-2xl rounded-xl border border-slate-200 bg-white shadow-xl outline-none"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between px-4 py-3 border-b border-slate-200">
                <div className="min-w-0">
                  <p className="font-semibold text-slate-900 truncate">{project?.title}</p>
                  {(project?.subtitle || project?.skills?.length) && (
                    <p className="mt-0.5 text-xs text-slate-500 truncate">
                      {project?.subtitle}
                      {project?.skills?.length ? ` — ${project.skills.join(" · ")}` : ""}
                    </p>
                  )}
                </div>
                <button
                  onClick={onClose}
                  className="ml-2 inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-slate-100"
                  aria-label="Fermer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="px-4 py-4">
                {project?.summary && <p className="text-sm text-slate-700 mb-3">{project.summary}</p>}
                {project?.bullets?.length ? (
                  <ul className="list-disc pl-5 space-y-1.5 text-sm text-slate-800">
                    {project.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                ) : (
                  <p className="text-sm text-slate-500">Pas de détails supplémentaires.</p>
                )}
                {(project?.github || project?.demo) && (
                  <div className="mt-4 flex items-center gap-3">
                    {project.github && (
                      <a className="inline-flex items-center gap-1 text-sm text-slate-700 hover:text-slate-900"
                         href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" /> Code
                      </a>
                    )}
                    {project.demo && (
                      <a className="inline-flex items-center gap-1 text-sm text-slate-700 hover:text-slate-900"
                         href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" /> Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* --------- Card (entièrement cliquable) --------- */
function ProjectCard({ p, onOpen }) {
  // activation clavier: Enter/Space
  const onKey = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpen(p);
    }
  };

  return (
    <motion.article
      layout
      onClick={() => onOpen(p)}
      onKeyDown={onKey}
      role="button"
      tabIndex={0}
      aria-label={`Ouvrir les détails du projet ${p.title}`}
      className="relative group cursor-pointer rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-slate-400 transition"
    >
      {/* Image côté droit + dégradé vers blanc */}
      {p.image && (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(to left, rgba(255,255,255,1) 42%, rgba(255,255,255,0.75) 60%, rgba(255,255,255,0) 100%), url(${p.image})`,
            backgroundSize: "cover",
            backgroundPosition: "right center",
          }}
          aria-hidden
        />
      )}

      <div className="relative z-10 p-4">
        <header className="mb-2">
          <h3 className="text-base font-semibold text-slate-900 line-clamp-2">{p.title}</h3>
          {p.subtitle && (
            <p className="mt-1 text-[13px] text-slate-500 line-clamp-2">{p.subtitle}</p>
          )}
        </header>

        {p.summary && <p className="text-sm text-slate-700 line-clamp-3">{p.summary}</p>}

        <div className="mt-3 flex flex-wrap gap-1.5">
          {p.skills.map((s) => (
            <span key={s} className="rounded-md bg-white/70 border border-slate-200 px-2 py-0.5 text-[11px] text-slate-700 backdrop-blur-sm">
              {s}
            </span>
          ))}
        </div>

        {(p.github || p.demo) && (
          <div className="mt-4 flex items-center gap-3">
            {p.github && (
              <a className="inline-flex items-center gap-1 text-sm text-slate-700 hover:text-slate-900"
                 href={p.github} target="_blank" rel="noopener noreferrer"
                 onClick={(e) => e.stopPropagation()}
                 onKeyDown={(e) => e.stopPropagation()}>
                <Github className="h-4 w-4" /> Code
              </a>
            )}
            {p.demo && (
              <a className="inline-flex items-center gap-1 text-sm text-slate-700 hover:text-slate-900"
                 href={p.demo} target="_blank" rel="noopener noreferrer"
                 onClick={(e) => e.stopPropagation()}
                 onKeyDown={(e) => e.stopPropagation()}>
                <ExternalLink className="h-4 w-4" /> Demo
              </a>
            )}
          </div>
        )}
      </div>

      {/* voile doux au hover */}
      <div className="absolute inset-0 z-0 bg-gradient-to-l from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.article>
  );
}

/* --------- Grid + filtres --------- */
export default function ProjectsGrid({ projects = [] }) {
  const [selected, setSelected] = useState(new Set());
  const [modalProject, setModalProject] = useState(null);

  const allSkills = useMemo(() => {
    const s = new Set();
    projects.forEach((p) => p.skills.forEach((k) => s.add(k)));
    return Array.from(s).sort((a, b) => a.localeCompare(b));
  }, [projects]);

  const toggleSkill = (skill) => {
    const copy = new Set(selected);
    copy.has(skill) ? copy.delete(skill) : copy.add(skill);
    setSelected(copy);
  };
  const clearFilters = () => setSelected(new Set());

  const filtered = useMemo(() => {
    if (selected.size === 0) return projects;
    return projects.filter((p) => {
      for (const sk of selected) if (!p.skills.includes(sk)) return false;
      return true;
    });
  }, [projects, selected]);

  return (
    <section
      id="projects"
      className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Header + filtres */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Projets</h2>
            <p className="mt-1 text-sm text-slate-500">
              {filtered.length}/{projects.length} projet(s) — filtrable par compétences
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Filter className="h-4 w-4 text-slate-500" />
            <span>Filtres actifs : {selected.size}</span>
            {selected.size > 0 && (
              <button
                onClick={clearFilters}
                className="inline-flex items-center gap-1 rounded-md border border-slate-300 bg-white px-2.5 py-1.5 hover:bg-slate-50"
              >
                <X className="h-4 w-4" /> Réinitialiser
              </button>
            )}
          </div>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          <Pill active={selected.size === 0} onClick={clearFilters}>Tout</Pill>
          {allSkills.map((skill) => (
            <Pill key={skill} active={selected.has(skill)} onClick={() => toggleSkill(skill)}>
              {skill}
            </Pill>
          ))}
        </div>

        {/* Grille responsive */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p) => (
            <ProjectCard key={p.id ?? p.title} p={p} onOpen={setModalProject} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-6 rounded-lg border border-dashed border-slate-300 p-6 text-center text-slate-500">
            Aucun projet ne correspond aux filtres sélectionnés.
          </div>
        )}
      </div>

      {/* Modale globale */}
      <Modal open={!!modalProject} onClose={() => setModalProject(null)} project={modalProject} />
    </section>
  );
}
