import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { siteLock } from '../data/lock';
import { site } from '../data/site';
import { withBase } from '../lib/asset';

// Voile flouté plein écran : le contenu reste derrière, flou et inactif
// (clics, clavier et lecteurs d'écran bloqués via `inert`).
export default function SiteLock() {
  useEffect(() => {
    if (!siteLock.enabled) return;
    const root = document.getElementById('root');
    root?.setAttribute('inert', '');
    document.body.classList.add('is-site-locked');
    return () => {
      root?.removeAttribute('inert');
      document.body.classList.remove('is-site-locked');
    };
  }, []);

  if (!siteLock.enabled) return null;

  return createPortal(
    <div className="site-lock" role="dialog" aria-modal="true" aria-labelledby="site-lock-title">
      <div className="site-lock-card">
        <img
          src={withBase('/logo-sim.jpg')}
          alt="S.I.M sarl"
          width="72"
          height="72"
          className="site-lock-logo"
        />
        <h1 id="site-lock-title" className="site-lock-title">
          {siteLock.title}
        </h1>
        <p className="site-lock-text">{siteLock.message}</p>
        <p className="site-lock-contact">
          S.I.M sarl —{' '}
          <a href={`tel:${site.contact.phone1.replace(/\s/g, '')}`}>{site.contact.phone1}</a>
        </p>
      </div>
    </div>,
    document.body
  );
}
