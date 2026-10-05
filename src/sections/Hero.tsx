import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { site } from '../data/site';
import { withBase } from '../lib/asset';

const SLIDES = [1, 2, 3, 4].map((n) => ({
  lg: withBase(`/images/hero/hero-${n}.jpg`),
  md: withBase(`/images/hero/hero-${n}-md.jpg`),
}));

const ROTATE_MS = 7000;

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % SLIDES.length), ROTATE_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        {SLIDES.map((s, i) => (
          <img
            key={s.lg}
            src={s.md}
            srcSet={`${s.md} 1200w, ${s.lg} 2400w`}
            sizes="100vw"
            alt=""
            className={`hero-bg-photo ${i === active ? 'is-active' : ''}`}
            loading={i === 0 ? 'eager' : 'lazy'}
            fetchPriority={i === 0 ? 'high' : 'auto'}
            decoding="async"
          />
        ))}
        <div className="hero-bg-gradient" />
      </div>

      <div className="container hero-content">
        <div className="hero-brandline">
          <span className="mono hero-brand">S.I.M sarl</span>
          <span className="hero-brandline-dot" aria-hidden="true" />
          <span className="mono hero-brand-region">{site.region}</span>
        </div>

        <h1 className="hero-title">
          Soudure Industrielle
          <br />
          <span className="hero-title-accent">& Maritime.</span>
        </h1>

        <p className="hero-baseline mono">{site.baseline}</p>

        <p className="hero-sub">{site.subline}</p>

        <div className="hero-actions">
          <Link to="/contact" className="btn btn-primary">
            Demander un devis
            <span aria-hidden="true">→</span>
          </Link>
          <Link to="/services" className="btn btn-ghost">
            Nos services
          </Link>
        </div>

        <dl className="hero-meta">
          <div>
            <dt className="mono">Expertises</dt>
            <dd>Tuyauterie · Chaudronnerie · Usinage</dd>
          </div>
          <div>
            <dt className="mono">Interventions</dt>
            <dd>Onshore · Offshore · Naval</dd>
          </div>
          <div>
            <dt className="mono">Localisation</dt>
            <dd>Koumassi — Abidjan · Côte d’Ivoire</dd>
          </div>
        </dl>

        <div className="hero-dots" role="group" aria-label="Photos de chantier">
          {SLIDES.map((s, i) => (
            <button
              key={s.lg}
              type="button"
              className={`hero-dot ${i === active ? 'is-active' : ''}`}
              aria-label={`Afficher la photo ${i + 1}`}
              aria-pressed={i === active}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
