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
      <section className="service-detail-hero">
        <div className="container service-detail-hero-inner">
          <div className="service-detail-hero-meta mono">
            <span>Service {service.index}</span>
          </div>
          <h1 className="service-detail-hero-title">{service.title}</h1>
          <p className="service-detail-hero-summary">{service.short}</p>
          <Link to="/services" className="project-hero-back mono">
            ← Retour aux services
          </Link>
        </div>
      </section>

      <section className="section service-detail-intro">
        <div className="container service-detail-grid">
          <div className="service-detail-body">
            <span className="eyebrow">Notre approche</span>
            <h2 className="section-title">Présentation.</h2>
            <p className="service-detail-desc">{service.description}</p>
            <div className="service-detail-actions">
              <Link to="/contact" className="btn btn-primary">
                Demander un devis
              </Link>
              <Link to="/services" className="btn btn-ghost">
                Voir tous les services
              </Link>
            </div>
          </div>

          <aside className="service-detail-side">
            <div className="service-detail-block">
              <span className="mono service-detail-label">Domaines de compétences</span>
              <ul className="service-detail-list">
                {service.competences.map((c) => (
                  <li key={c}>
                    <span className="capability-dot" aria-hidden="true" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="service-detail-block">
              <span className="mono service-detail-label">Nos moyens</span>
              <ul className="service-detail-list">
                {service.moyens.map((m) => (
                  <li key={m}>
                    <span className="capability-dot" aria-hidden="true" />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CTAFinal />
    </>
  );
}
