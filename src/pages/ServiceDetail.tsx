import { Link, Navigate, useParams } from 'react-router-dom';
import { services } from '../data/services';
import CTAFinal from '../sections/CTAFinal';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      <section className="project-hero">
        <div className="project-hero-media" aria-hidden="true">
          <img src={service.image} alt="" loading="eager" />
          <div className="project-hero-overlay" />
        </div>
        <div className="container project-hero-inner">
          <div className="project-hero-meta mono">
            <span>Service</span>
            <span className="dot" aria-hidden="true">·</span>
            <span>{service.index}</span>
          </div>
          <h1 className="project-hero-title">{service.title}</h1>
          <p className="project-hero-summary">{service.short}</p>
          <Link to="/services" className="project-hero-back mono">
            ← Retour aux services
          </Link>
        </div>
      </section>

      <section className="section project-intro">
        <div className="container project-intro-inner">
          <div className="project-intro-body">
            <span className="eyebrow">Présentation</span>
            <h2 className="section-title">Notre approche.</h2>
            <p className="project-intro-desc">{service.description}</p>
          </div>
          <aside className="project-specs-card">
            <span className="eyebrow">Domaines de compétences</span>
            <ul className="service-detail-list" role="list">
              {service.competences.map((c) => (
                <li key={c}>
                  <span className="capability-dot" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section project-blocks">
        <div className="container">
          <div className="project-block">
            <span className="eyebrow">Nos moyens</span>
            <h2 className="section-title">Équipements et personnel dédiés.</h2>
            <ul className="service-detail-list is-cols" role="list">
              {service.moyens.map((m) => (
                <li key={m}>
                  <span className="capability-dot" aria-hidden="true" />
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {service.gallery && service.gallery.length > 0 && (
        <section className="section project-gallery">
          <div className="container">
            <header className="section-head">
              <span className="eyebrow">Galerie</span>
              <h2 className="section-title">Nos réalisations.</h2>
            </header>
            <ul className="project-gallery-grid" role="list">
              {service.gallery.map((src, i) => (
                <li key={i} className={`project-gallery-item ${i === 0 ? 'is-primary' : ''}`}>
                  <img src={src} alt="" loading="lazy" />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CTAFinal />
    </>
  );
}
