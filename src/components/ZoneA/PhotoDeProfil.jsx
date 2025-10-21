// src/components/PhotoDeProfil.jsx
import photo from "../../assets/linkedinpdp.png"; // ⬅️ remplace par ton fichier (png/jpg/webp)

const PhotoDeProfil = () => {
  return (
    <div className="md:col-span-2">
      <div className="relative group">
        {/* Halo doux derrière l’image */}
        <div className="pointer-events-none absolute -inset-x-8 -inset-y-6 rounded-[2rem]
                        bg-[radial-gradient(closest-side,theme(colors.blue.400/.25),transparent)]
                        blur-2xl opacity-70 group-hover:opacity-90 transition" />

        {/* Cadre verre dépoli */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl
                        bg-white/12 backdrop-blur-md
                        ring-1 ring-white/30 shadow-2xl">
          {/* Bordure interne subtile */}
          <div className="pointer-events-none absolute inset-0 rounded-[inherit]
                          ring-1 ring-white/10" />

          {/* Image */}
          <img
            alt="Photo de profil"
            src={photo}
            className="h-full w-full object-cover rounded-[inherit]
                       opacity-95 transition-transform duration-500
                       group-hover:scale-[1.02] will-change-transform"
          />
        </div>

        {/* Ombre portée douce sous le cadre */}
        <div className="pointer-events-none absolute inset-x-6 -bottom-4 h-8
                        rounded-full bg-black/10 blur-xl" />
      </div>
    </div>
  );
};

export default PhotoDeProfil;
