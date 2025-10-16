// src/components/OlympicBackground.jsx
const OlympicBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        className="w-full h-full opacity-100"
      >
        <style>{`
          /* Ondulation douce */
          @keyframes wave {
            0%, 100% { transform: translateX(0) scaleX(1); }
            50% { transform: translateX(40px) scaleX(1.04); }
          }

          .wave1 { animation: wave 9s ease-in-out infinite; }
          .wave2 { animation: wave 11s ease-in-out infinite; animation-delay: 0.8s; }
          .wave3 { animation: wave 13s ease-in-out infinite; animation-delay: 1.4s; }
          .wave4 { animation: wave 15s ease-in-out infinite; animation-delay: 2s; }
        `}</style>

        {/* On garde la diagonale et la position équilibrée */}
        <g transform="translate(0,400) rotate(-4 720 450)">
          {/* 🟦 Bleu */}
          <g className="wave1">
            <path
              fill="none"
              stroke="#2563eb"
              strokeWidth="10"
              d="M-100,230 C250,80 600,360 860,160 C1120,-40 1500,300 1540,200"
            />
          </g>

          {/* 🟨 Jaune */}
          <g className="wave2">
            <path
              fill="none"
              stroke="#facc15"
              strokeWidth="10"
              d="M-120,250 C280,380 580,140 860,300 C1140,460 1500,180 1560,250"
            />
          </g>

          {/* 🟩 Vert */}
          <g className="wave3">
            <path
              fill="none"
              stroke="#16a34a"
              strokeWidth="10"
              d="M-140,270 C260,150 540,360 820,220 C1100,80 1520,360 1580,280"
            />
          </g>

          {/* 🟥 Rouge */}
          <g className="wave4">
            <path
              fill="none"
              stroke="#dc2626"
              strokeWidth="10"
              d="M-160,290 C300,200 640,380 940,240 C1240,100 1540,400 1600,300"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default OlympicBackground;
