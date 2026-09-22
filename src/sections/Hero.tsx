import { Link } from 'react-router-dom';
import { site } from '../data/site';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-bg-gradient" />
        <div className="hero-bg-pattern" />
        <div className="hero-bg-glow" />
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
      </div>

      <div className="hero-decoration" aria-hidden="true">
        <svg viewBox="0 0 200 400" xmlns="http://www.w3.org/2000/svg">
          {/* Ancre stylisée en watermark */}
          <g stroke="rgba(201, 169, 97, 0.18)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="100" cy="120" r="10" />
            <line x1="100" y1="130" x2="100" y2="280" />
            <line x1="70" y1="150" x2="130" y2="150" />
            <path d="M50 240 Q 50 290 90 300 Q 100 302 110 300 Q 150 290 150 240" />
            <line x1="50" y1="240" x2="35" y2="240" />
            <line x1="150" y1="240" x2="165" y2="240" />
          </g>
        </svg>
      </div>
    </section>
  );
}
