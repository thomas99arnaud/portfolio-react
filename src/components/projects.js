// Vite importe tous les fichiers JS de ce dossier (sauf lui-même)
const modules = import.meta.glob("./projects/*.js", { eager: true });

// On extrait les exports par défaut
export const projects = Object.values(modules)
  .map((m) => m.default)
  // Optionnel : trier par date, titre, etc.
  .sort((a, b) => (a.id > b.id ? 1 : -1));