export default function ContactMap() {
  return (
    <div className="contact-map">
      <svg
        viewBox="0 0 600 400"
        role="img"
        aria-label="ReprÃ©sentation stylisÃ©e du Golfe de GuinÃ©e avec Abidjan et San-PÃ©dro"
      >
        <defs>
          <linearGradient id="cm-sea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#0f2337" />
            <stop offset="1" stopColor="#0a1929" />
          </linearGradient>
          <pattern id="cm-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <rect width="8" height="8" fill="none" />
            <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(148,163,184,0.15)" strokeWidth="1" />
          </pattern>
        </defs>
        {/* Sea background */}
        <rect x="0" y="0" width="600" height="400" fill="url(#cm-sea)" />
        <rect x="0" y="0" width="600" height="400" fill="url(#cm-hatch)" />

        {/* Coast â€” stylised */}
        <path
          d="M0 90 C 80 88, 160 95, 220 110 C 280 120, 320 105, 360 100 C 410 92, 460 120, 520 130 C 560 140, 600 130, 600 130 L 600 0 L 0 0 Z"
          fill="#14304a"
          stroke="rgba(148,163,184,0.3)"
          strokeWidth="1"
        />

        {/* Abidjan pin */}
        <g transform="translate(230,130)">
          <circle r="30" fill="rgba(34,211,238,0.06)" />
          <circle r="16" fill="rgba(34,211,238,0.15)" />
          <circle r="6" fill="#c9a961" />
          <line x1="0" y1="6" x2="0" y2="60" stroke="rgba(34,211,238,0.35)" strokeDasharray="2 4" />
          <text x="12" y="0" fontFamily="IBM Plex Mono, monospace" fontSize="12" fill="#f1f5f9">
            Abidjan â€” HQ
          </text>
          <text x="12" y="14" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#94a3b8">
            Plateau
          </text>
        </g>

        {/* San-PÃ©dro pin */}
        <g transform="translate(140,175)">
          <circle r="24" fill="rgba(34,211,238,0.06)" />
          <circle r="12" fill="rgba(34,211,238,0.15)" />
          <circle r="5" fill="#c9a961" />
          <line x1="0" y1="5" x2="0" y2="45" stroke="rgba(34,211,238,0.35)" strokeDasharray="2 4" />
          <text x="-88" y="0" fontFamily="IBM Plex Mono, monospace" fontSize="12" fill="#f1f5f9">
            San-PÃ©dro
          </text>
          <text x="-88" y="14" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#94a3b8">
            Base opÃ©rations
          </text>
        </g>

        {/* Compass */}
        <g transform="translate(540,340)" opacity="0.7">
          <circle r="18" fill="none" stroke="rgba(148,163,184,0.4)" />
          <line x1="0" y1="-16" x2="0" y2="16" stroke="#c9a961" strokeWidth="1.5" />
          <line x1="-16" y1="0" x2="16" y2="0" stroke="rgba(148,163,184,0.4)" />
          <text x="0" y="-22" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#c9a961" textAnchor="middle">
            N
          </text>
        </g>

        {/* Label */}
        <text x="300" y="370" fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="rgba(148,163,184,0.7)" textAnchor="middle">
          GOLFE DE GUINÃ‰E â€” ReprÃ©sentation stylisÃ©e
        </text>
      </svg>
    </div>
  );
}
