import { Link } from 'react-router-dom';

type Props = {
  compact?: boolean;
};

// SIM sarl — ancre marine stylisée dans un cercle bleu marine.
export default function Logo({ compact = false }: Props) {
  return (
    <Link to="/" className="logo" aria-label="S.I.M. sarl — Accueil">
      <svg
        width="34"
        height="34"
        viewBox="0 0 40 40"
        aria-hidden="true"
        style={{ display: 'block', flexShrink: 0 }}
      >
        <circle cx="20" cy="20" r="19" fill="#1e3a8a" stroke="#c9a961" strokeWidth="1.2" />
        <circle cx="20" cy="20" r="14" fill="#f5f2ea" />
        {/* Anchor */}
        <g stroke="#1e3a8a" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="20" cy="12" r="1.6" fill="#1e3a8a" />
          <line x1="20" y1="13.6" x2="20" y2="27" />
          <line x1="16.5" y1="16" x2="23.5" y2="16" />
          <path d="M13 22 Q 13 26 16 27 Q 18 27.5 20 27" />
          <path d="M27 22 Q 27 26 24 27 Q 22 27.5 20 27" />
          <line x1="13" y1="22" x2="12" y2="22" />
          <line x1="27" y1="22" x2="28" y2="22" />
        </g>
      </svg>
      {!compact && (
        <span className="logo-word">
          S.I.M<span className="logo-word-accent">&nbsp;sarl</span>
        </span>
      )}
    </Link>
  );
}
