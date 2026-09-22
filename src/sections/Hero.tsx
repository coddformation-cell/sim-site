import { Link } from 'react-router-dom';
import { site } from '../data/site';
import { media } from '../data/media';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-media" aria-hidden="true">
        <img src={media.hero} alt="" loading="eager" />
        <div className="hero-media-overlay" />
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
    </section>
  );
}
