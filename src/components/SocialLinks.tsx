import type { ReactElement } from 'react';
import { site } from '../data/site';

const ICONS: Record<string, ReactElement> = {
  Facebook: (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path
        fill="currentColor"
        d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z"
      />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z"
      />
    </svg>
  ),
};

type Props = {
  className?: string;
};

// Comptes réels confirmés au dos du catalogue papier (icône + nom de page,
// aucune URL cliquable imprimée). Pas de lien tant que l'URL exacte n'est
// pas transmise par le client — voir data/site.ts.
export default function SocialLinks({ className = '' }: Props) {
  return (
    <ul className={`social-links ${className}`} role="list">
      {site.socials.map((s) => (
        <li key={s.name} className="social-links-item">
          <span className="social-links-icon" aria-hidden="true">
            {ICONS[s.name]}
          </span>
          <span className="social-links-text">
            <span className="social-links-platform">{s.name}</span>
            <span className="social-links-handle">{s.handle}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}
