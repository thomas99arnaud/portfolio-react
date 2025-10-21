// components/ZoneB/ParcoursTimeline.jsx
import React, { useEffect, useRef, useState } from "react";
import { GraduationCap, Briefcase, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function useOutsideClose(ref, onClose) {
  useEffect(() => {
    function onClick(e) {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    }
    function onEsc(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, [onClose, ref]);
}

function Popover({ open, anchorRect, onClose, item }) {
  const panelRef = useRef(null);
  useOutsideClose(panelRef, onClose);

  if (!open || !anchorRect) return null;

  // Positionne le popover près de l’item cliqué (sans overlay)
  const top = Math.max(window.scrollY + 12, anchorRect.top + window.scrollY - 6);
  const left =
    anchorRect.left + (anchorRect.width / 2) - 160; // centre approximatif (max-w 320)

  return (
    <AnimatePresence>
      <motion.div
        key="popover"
        initial={{ opacity: 0, y: 6, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 4, scale: 0.98 }}
        transition={{ duration: 0.16 }}
        ref={panelRef}
        role="dialog"
        aria-modal="false"
        className="fixed z-40 w-[88vw] max-w-[320px] rounded-lg border border-slate-200 bg-white shadow-lg"
        style={{ top, left: Math.max(12, Math.min(left, window.innerWidth - 332)) }}
      >
        <div className="flex items-start justify-between px-3 py-2 border-b border-slate-200">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-slate-900 truncate">{item?.title}</p>
            {(item?.org || item?.location || item?.date) && (
              <p className="mt-0.5 text-[11px] text-slate-500 truncate">
                {item?.org ? `${item.org} — ` : ""}
                {item?.location ? `${item.location} — ` : ""}
                {item?.date}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-md hover:bg-slate-100"
            aria-label="Fermer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="px-3 py-2">
          {item?.details ? (
            <p className="text-[13px] leading-snug text-slate-700">{item.details}</p>
          ) : (
            <p className="text-[13px] text-slate-500">Pas de détails supplémentaires.</p>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

function Column({ title, icon: Icon, items, side }) {
  const isLeft = side === "left";
  const [open, setOpen] = useState(false);
  const [anchorRect, setAnchorRect] = useState(null);
  const [selected, setSelected] = useState(null);

  const onItemClick = (e, item) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setAnchorRect(rect);
    setSelected(item);
    setOpen(true);
  };

  return (
    <div className={`relative ${isLeft ? "pr-3 md:pr-6" : "pl-3 md:pl-6"}`}>
      {/* Titre compact */}
      <div className={`mb-2 flex items-center gap-2 ${isLeft ? "justify-end" : "justify-start"}`}>
        {isLeft && <h3 className="text-sm font-semibold text-slate-800">{title}</h3>}
        <Icon className="h-4 w-4 text-slate-500" />
        {!isLeft && <h3 className="text-sm font-semibold text-slate-800">{title}</h3>}
      </div>

      {/* Liste compacte */}
      <ol className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className={`relative ${isLeft ? "text-right" : "text-left"}`}>
            {/* Point de repère vers la ligne centrale */}
            <span
              className={`absolute top-3 ${isLeft ? "right-[-10px]" : "left-[-10px]"} h-1.5 w-1.5 rounded-full bg-slate-300`}
              aria-hidden
            />
            <button
              className={`
                group w-full text-left rounded-md border border-slate-200 bg-white
                hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300
                transition
                ${isLeft ? "pl-2.5 pr-3.5" : "pl-3.5 pr-2.5"} py-2
              `}
              onClick={(e) => onItemClick(e, item)}
              aria-haspopup="dialog"
              aria-expanded={open && selected?.title === item.title}
            >
              <div className={`flex flex-wrap items-baseline gap-x-2 ${isLeft ? "justify-end" : "justify-start"}`}>
                <p className="text-[13px] font-medium text-slate-900 leading-tight">{item.title}</p>
                {item.org && <span className="text-[12px] text-slate-500">· {item.org}</span>}
              </div>
              {(item.location || item.date) && (
                <p className="mt-0.5 text-[11px] text-slate-500 justify-end">
                  {item.location ? `${item.location} — ` : ""}
                  {item.date}
                </p>
              )}
            </button>
          </li>
        ))}
      </ol>

      {/* Popover ultra-léger */}
      <Popover open={open} anchorRect={anchorRect} onClose={() => setOpen(false)} item={selected} />
    </div>
  );
}

export default function ParcoursTimeline({ education = [], work = [] }) {
  return (
    <section
      id="parcours"
      className="
        relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]
        bg-slate-50 border-t border-slate-200
      "
    >
      <div className="relative py-10">
        {/* Ligne centrale discrète */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px"
          aria-hidden
        >
          <div className="absolute inset-0 bg-slate-200" />
        </div>

        <div className="mx-auto max-w-6xl px-4">
          {/* Titre compact */}
          <header className="mb-6 text-center">
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900">Parcours</h2>
            <p className="mt-1 text-[13px] text-slate-500">
              Formations et expériences professionnelles
            </p>
          </header>

          {/* Colonnes resserrées */}
          <div className="grid gap-6 md:grid-cols-2">
            <Column title="Parcours scolaire" icon={GraduationCap} items={education} side="left" />
            <Column title="Expériences professionnelles" icon={Briefcase} items={work} side="right" />
          </div>
        </div>
      </div>
    </section>
  );
}
