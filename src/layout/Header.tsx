import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../components/Logo';
import { navLinks } from '../data/site';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const close = () => setOpen(false);

  return (
    <header className={`header ${scrolled || open ? 'is-scrolled' : ''} ${open ? 'is-menu-open' : ''}`}>
      <div className="container header-inner">
        <Logo />

        <nav className="header-nav" aria-label="Navigation principale">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `header-link ${isActive ? 'is-active' : ''}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <NavLink to="/contact" className="btn btn-solid header-cta">
            Demander un devis
          </NavLink>
          <button
            type="button"
            className={`burger ${open ? 'is-open' : ''}`}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="burger-icon"
              >
                <line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="20" y1="4" x2="4" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <>
                <span />
                <span />
                <span />
              </>
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu ${open ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        <button
          type="button"
          className="mobile-menu-close"
          aria-label="Fermer le menu"
          onClick={close}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
            <line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="20" y1="4" x2="4" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span>Fermer</span>
        </button>

        <nav className="mobile-nav" aria-label="Navigation mobile">
          {navLinks.map((l, i) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `mobile-link ${isActive ? 'is-active' : ''}`
              }
              style={{ transitionDelay: `${100 + i * 40}ms` }}
              onClick={close}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <NavLink to="/contact" className="btn btn-primary mobile-cta" onClick={close}>
          Demander un devis
        </NavLink>
      </div>
    </header>
  );
}
