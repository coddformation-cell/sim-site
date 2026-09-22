import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

export default function Actualites() {
  return (
    <>
      <PageHeader
        eyebrow="Actualités"
        title="Nouveaux projets, chantiers en cours et actualités techniques."
        lead="Cette rubrique présentera prochainement les chantiers en cours, les collaborations en cours et les articles techniques sur nos activités."
      />
      <section className="section empty-state-section">
        <div className="container empty-state">
          <span className="empty-state-badge mono">À venir</span>
          <h2 className="empty-state-title">Aucune actualité publiée pour l’instant.</h2>
          <p className="empty-state-desc">
            Nouveaux projets, chantiers en cours, articles techniques et
            participations à des salons professionnels seront publiés ici.
          </p>
          <div className="empty-state-actions">
            <Link to="/contact" className="btn btn-primary">
              Nous contacter
            </Link>
            <Link to="/services" className="btn btn-ghost">
              Voir nos services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
