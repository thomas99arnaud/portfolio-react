// components/ZoneC/ProjectsGrid.jsx
import React, { useMemo, useState, useEffect, useRef } from "react";
import { Github, ExternalLink, Filter, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* -----------------------------------------
   Catégories -> compétences (listes déroulantes)
   (basé sur ta liste; dédoublonné et groupé)
------------------------------------------ */
const CATEGORIES = {
  "Langages": [
    "Python","Java","JavaScript","PHP","SQL","HTML","CSS"
  ],
  "Data / ML": [
    "Data Science","Analyse statistique","ACP","K-Means","Scikit-learn","Pandas","NumPy","Numpy",
    "Seaborn","Matplotlib","Deep Learning","TensorFlow","PyTorch","Image Segmentation","U-Net","SegNet",
    "Data Augmentation","Dice Loss","Focal Loss","Reinforcement Learning","DDPG","CMA-ES","Optimization","AI Safety"
  ],
  "Back-end / API": [
    "API","API REST","Node.js","Tomcat","Swagger","Event Handling","Jar Packaging"
  ],
  "Web / CMS / SEO / UX": [
    "WordPress","WooCommerce","Joomla","SEO","UX/UI","Design","Communication","Accompagnement","Maitenance","Maintenance","Documentation technique"
  ],
  "DevOps / Infra / DB": [
    "AzureDevOps","Docker","Pipelines","Serveurs","Hébergement","DNS","SSL","Git","PostgreSQL","Cache","OSRM"
  ],
  "Architecture / Modèles": [
    "Architecture logicielle","UML","MVC","POO","Full-Stack","Swing","Discord.js","RiveScript","Streamlit"
  ],
  "Spécialités domaine": [
    "Geopandas","Environnement","Simulation","SegNet","U-Net","Image Segmentation"
  ],
};

/* -----------------------------------------
   UI helpers
------------------------------------------ */
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

function SectionToggle({ title, open, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="w-full flex items-center justify-between rounded-md border border-slate-300 bg-white px-3 py-2 text-left hover:bg-slate-50"
      aria-expanded={open}
    >
      <span className="font-medium text-slate-800">{title}</span>
      <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
    </button>
  );
}

/* -----------------------------------------
   Utils sécurisés
------------------------------------------ */
const isNonEmptyArray = (v) => Array.isArray(v) && v.length > 0;
const asArray = (v) => (Array.isArray(v) ? v : v == null ? [] : [v]);

/* -----------------------------------------
   Bullets hiérarchiques robustes
------------------------------------------ */
function renderBulletItems(items, depth = 0) {
  if (!Array.isArray(items) || items.length === 0) return null;

  const listStyleByDepth = [
    "list-disc pl-5 space-y-1.5",
    "list-[circle] pl-5 space-y-1",
    "list-[square] pl-5 space-y-1",
  ];
  const listClass = listStyleByDepth[Math.min(depth, listStyleByDepth.length - 1)];

  return (
    <ul className={`${listClass} text-sm text-slate-800`}>
      {items.map((it, idx) => {
        if (typeof it === "string" || typeof it === "number" || typeof it === "boolean") {
          return <li key={`${depth}-${idx}`}>{String(it)}</li>;
        }
        if (Array.isArray(it)) {
          return <li key={`${depth}-${idx}`}>{renderBulletItems(it, depth + 1)}</li>;
        }
        if (it && typeof it === "object") {
          const title = "title" in it ? it.title : undefined;
          const sub = "items" in it ? it.items : undefined;

          return (
            <li key={`${depth}-${idx}`} className="space-y-1">
              {title && (
                <div className={`font-medium ${depth === 0 ? "text-slate-900 mt-1" : "text-slate-700"}`}>
                  {String(title)}
                </div>
              )}
              {isNonEmptyArray(sub) ? (
                <div className="mt-1">{renderBulletItems(sub, depth + 1)}</div>
              ) : null}
            </li>
          );
        }
        return <li key={`${depth}-${idx}`}>{String(it)}</li>;
      })}
    </ul>
  );
}

/* -----------------------------------------
   Modal
------------------------------------------ */
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

  const skillsText = Array.isArray(project?.skills) ? project.skills.join(" · ") : "";
  const normalizedBullets = useMemo(() => {
    try { return asArray(project?.bullets); } catch { return []; }
  }, [project?.bullets]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/40"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
          />
          {/* Panel centré */}
          <motion.div
            className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] px-4"
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
          >
            <div
              ref={panelRef}
              tabIndex={-1}
              role="dialog"
              aria-modal="true"
              className="
                w-full max-w-2xl rounded-xl border border-slate-200 bg-white shadow-xl outline-none
                max-h-[80vh] flex flex-col
              "
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header (fixe) */}
              <div className="flex items-start justify-between px-4 py-3 border-b border-slate-200 shrink-0">
                <div className="min-w-0">
                  <p className="font-semibold text-slate-900 truncate">
                    {project?.title ?? "Détails du projet"}
                  </p>
                  {(project?.subtitle || skillsText) && (
                    <p className="mt-0.5 text-xs text-slate-500 truncate">
                      {project?.subtitle}{project?.subtitle && skillsText ? " — " : ""}{skillsText}
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

              {/* Contenu scrollable */}
              <div className="
                px-4 py-4 overflow-y-auto grow
                [scrollbar-width:thin] [&::-webkit-scrollbar]:w-2
                [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:rounded-full
                [&::-webkit-scrollbar-track]:bg-transparent
              ">
                {project?.summary && (
                  <p className="text-sm text-slate-700 mb-3">{String(project.summary)}</p>
                )}

                {isNonEmptyArray(normalizedBullets) ? (
                  <div>{renderBulletItems(normalizedBullets)}</div>
                ) : (
                  <p className="text-sm text-slate-500">Pas de détails supplémentaires.</p>
                )}

                {(project?.github || project?.demo) && (
                  <div className="mt-4 flex items-center gap-3">
                    {project?.github && (
                      <a
                        className="inline-flex items-center gap-1 text-sm text-slate-700 hover:text-slate-900"
                        href={project.github} target="_blank" rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" /> Code
                      </a>
                    )}
                    {project?.demo && (
                      <a
                        className="inline-flex items-center gap-1 text-sm text-slate-700 hover:text-slate-900"
                        href={project.demo} target="_blank" rel="noopener noreferrer"
                      >
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

/* -----------------------------------------
   Card (entièrement cliquable)
------------------------------------------ */
function ProjectCard({ p, onOpen }) {
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
      aria-label={`Ouvrir les détails du projet ${p?.title ?? ""}`}
      className="relative group cursor-pointer rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-slate-400 transition
                flex-none w-[260px] sm:w-[300px] md:w-[340px] snap-start"
    >
      {/* Image à droite + dégradé vers le blanc */}
      {p?.image && (
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
          <h3 className="text-base font-semibold text-slate-900 line-clamp-2">{String(p?.title ?? "")}</h3>
        </header>

        {p?.subtitle && (
          <p className="mt-1 text-[13px] text-slate-500 line-clamp-2">{String(p.subtitle)}</p>
        )}
        {p?.summary && <p className="mt-1.5 text-sm text-slate-700 line-clamp-3">{String(p.summary)}</p>}

        {/* Compétences scrollables */}
        <div
          className="
            mt-3 flex flex-wrap gap-1.5 max-h-14 overflow-y-auto pr-1
            [scrollbar-width:thin] [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:rounded-full
            [&::-webkit-scrollbar-track]:bg-transparent
          "
        >
          {asArray(p?.skills).map((s, i) => (
            <span
              key={`${s}-${i}`}
              className="rounded-md bg-white/70 border border-slate-200 px-2 py-0.5 text-[11px] text-slate-700 backdrop-blur-sm"
            >
              {String(s)}
            </span>
          ))}
        </div>

        {(p?.github || p?.demo) && (
          <div className="mt-4 flex items-center gap-3">
            {p?.github && (
              <a
                className="inline-flex items-center gap-1 text-sm text-slate-700 hover:text-slate-900"
                href={p.github} target="_blank" rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
              >
                <Github className="h-4 w-4" /> Code
              </a>
            )}
            {p?.demo && (
              <a
                className="inline-flex items-center gap-1 text-sm text-slate-700 hover:text-slate-900"
                href={p.demo} target="_blank" rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
              >
                <ExternalLink className="h-4 w-4" /> Demo
              </a>
            )}
          </div>
        )}
      </div>

      {/* voile doux au hover */}
      <div className="absolute inset-0 z-0 bg-gradient-to-l from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    
    {/* Badges banner + year */}
      <div className="absolute bottom-2 right-2 flex gap-1">
        {p?.banner && (
          <span
            className={`px-2 py-0.5 rounded-md text-[10px] font-medium text-white ${
              p.banner === "pro" ? "bg-blue-600" : "bg-emerald-600"
            }`}
          >
            {p.banner}
          </span>
        )}
        {p?.years && (
          <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-800 text-white">
            {p.years}
          </span>
        )}
      </div>
      </motion.article>
  );
  
}

/* -----------------------------------------
   Panneau de filtres (listes déroulantes)
------------------------------------------ */
function FilterDropdowns({ selected, onToggle, onClear, onSelectOnly, allSkillsFromData }) {
  // Dédoublonner et ajouter "Autres" si des skills ne sont pas mappées
  const categorized = useMemo(() => {
    const setAll = new Set(allSkillsFromData);
    const fromCategories = new Set(
      Object.values(CATEGORIES).flat().map((x) => (x === "Numpy" ? "NumPy" : x)) // normalisation "Numpy" -> "NumPy"
    );
    const others = [...setAll].filter((s) => !fromCategories.has(s));
    return { others };
  }, [allSkillsFromData]);

  const [openMap, setOpenMap] = useState(() => {
    const init = {};
    Object.keys(CATEGORIES).forEach((k) => (init[k] = false));
    init["Autres"] = false;
    return init;
  });

  const toggleSection = (k) => setOpenMap((m) => ({ ...m, [k]: !m[k] }));

  const Section = ({ name, skills }) => {
    if (!skills || skills.length === 0) return null;
    // Dédoublonner + trier
    const uniq = Array.from(new Set(skills.map((s) => (s === "Numpy" ? "NumPy" : s)))).sort((a, b) =>
      a.localeCompare(b)
    );

    return (
      <div className="rounded-lg border border-slate-200 bg-white">
        <SectionToggle title={name} open={openMap[name]} onToggle={() => toggleSection(name)} />
        <AnimatePresence initial={false}>
          {openMap[name] && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="
                overflow-hidden px-3 pt-2 pb-3
                max-h-40 overflow-y-auto
                [scrollbar-width:thin] [&::-webkit-scrollbar]:w-2
                [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:rounded-full
                [&::-webkit-scrollbar-track]:bg-transparent
              "
            >
              <div className="flex flex-wrap gap-2">
                {uniq.map((skill) => (
                  <Pill key={skill} active={selected.has(skill)} onClick={() => onToggle(skill)}>
                    {skill}
                  </Pill>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

 return (
    <div className="flex flex-nowrap gap-3 overflow-x-auto pb-2 items-center [scrollbar-width:thin] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:rounded-full">
      <button
        onClick={onClear}
        className="shrink-0 inline-flex items-center gap-1 rounded-md border border-slate-300 bg-white px-2.5 py-1 text-sm hover:bg-slate-50"
      >
        <X className="h-4 w-4" /> Tout
      </button>
      {Object.entries(CATEGORIES).map(([cat, skills]) => (
            <div key={cat} className="relative shrink-0">
        <select
            onChange={(e) => {
              const val = e.target.value;
              if (!val) return;
              onSelectOnly(val);     // remplace entièrement la sélection
              e.target.value = "";   // revient sur l’entête de catégorie
            }}
        className="w-28 appearance-none border border-slate-300 bg-white rounded-md px-2 py-1.5 pr-6 text-[13px] text-slate-700 hover:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400 leading-tight whitespace-normal break-words"
         >
           <option value="">{cat}</option>
          {skills.map((s) => (
             <option key={s} value={s}>{s}</option>
            ))}
         </select>
        <ChevronDown className="absolute right-1.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
      </div>
     ))}
   </div>
);
}

/* -----------------------------------------
   Grid + filtres
------------------------------------------ */
export default function ProjectsGrid({ projects = [] }) {
  const [selected, setSelected] = useState(new Set());
  const [modalProject, setModalProject] = useState(null);

  // Toutes les skills effectivement présentes dans les projets (pour "Autres")
  const allSkillsFromData = useMemo(() => {
    const s = new Set();
    projects.forEach((p) => asArray(p?.skills).forEach((k) => s.add(String(k))));
    return Array.from(s);
  }, [projects]);

  const toggleSkill = (skill) => {
    const copy = new Set(selected);
    copy.has(skill) ? copy.delete(skill) : copy.add(skill);
    setSelected(copy);
  };
  const clearFilters = () => setSelected(new Set());
  const selectOnly = (skill) => setSelected(skill ? new Set([skill]) : new Set());

  // Filtrage logique AND (toutes les compétences sélectionnées doivent être présentes)
  const filtered = useMemo(() => {
    if (selected.size === 0) return projects;
    return projects.filter((p) => {
      const skills = new Set(asArray(p?.skills).map(String));
      for (const sk of selected) if (!skills.has(sk)) return false;
      return true;
    });
  }, [projects, selected]);
  // Tri par date décroissante (année)
  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => {
      const ya = parseInt(a?.years) || 0;
      const yb = parseInt(b?.years) || 0;
      return yb - ya;
    });
  }, [filtered]);
  return (
    <section
      id="projects"
      className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Header */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Projets</h2>
            <p className="mt-1 text-sm text-slate-500">
              {filtered.length}/{projects.length} projet(s) — filtre par catégories
            </p>
          </div>
        </div>

        {/* Filtres par catégories (listes déroulantes) */}
        <div className="mb-8">
          <FilterDropdowns
            selected={selected}
            onToggle={toggleSkill}
            onClear={clearFilters}
            onSelectOnly={selectOnly}
            allSkillsFromData={allSkillsFromData}
          />
        </div>

        {/* Carrousel horizontal de cards */}
        <div
          className="
            flex gap-4 overflow-x-auto py-2 snap-x snap-mandatory
            [scrollbar-width:thin] [&::-webkit-scrollbar]:h-2
            [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:rounded-full
            [&::-webkit-scrollbar-track]:bg-transparent
          "
          style={{ width: "100%" }}
        >
          {sorted.map((p) => (
            <ProjectCard
              key={p.id ?? p.title ?? Math.random()}
              p={p}
              onOpen={setModalProject}
            />
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
