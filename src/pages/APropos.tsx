import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { values, homeAboutIntro } from '../data/company';
import { site } from '../data/site';

export default function APropos() {
  return (
    <>
      <PageHeader
        eyebrow="À propos"
        title={homeAboutIntro.title}
        lead={homeAboutIntro.paragraphs[0]}
      />

      <section className="section about-section">
        <div className="container about-grid">
          <div className="about-body">
            <span className="eyebrow">Notre activité</span>
            <h2 className="section-title">
              Une expertise complète, au service de l’industrie et du maritime.
            </h2>
            {homeAboutIntro.paragraphs.map((p, i) => (
              <p key={i} className="about-p">{p}</p>
            ))}
            <p className="about-p">
              Sept expertises complémentaires — tuyauterie, chaudronnerie,
              usinage, onshore/offshore, construction et réparation navale,
              échangeur & aéro, logistique — nous permettent de couvrir toute
              la chaîne de valeur de vos chantiers, de l’étude en atelier à
              l’intervention sur site.
            </p>
            <div className="about-actions">
              <Link to="/services" className="btn btn-primary">Voir nos services</Link>
              <Link to="/contact" className="btn btn-ghost">Nous contacter</Link>
            </div>
          </div>

          <aside className="about-card">
            <span className="eyebrow">Coordonnées</span>
            <ul className="about-card-list">
              <li>
                <span className="mono">Siège</span>
                {site.contact.address}
              </li>
              <li>
                <span className="mono">Téléphone</span>
                {site.contact.phone1}<br />{site.contact.phone2}
              </li>
              <li>
                <span className="mono">Email</span>
                {site.contact.email}
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <header className="section-head">
            <span className="eyebrow">Nos valeurs</span>
            <h2 className="section-title">
              Qualité, sécurité, respect des délais et proximité.
            </h2>
          </header>
          <ul className="values-grid" role="list">
            {values.map((v) => (
              <li key={v.title} className="value-card">
                <span className="value-card-mark" aria-hidden="true" />
                <h3 className="value-card-title">{v.title}</h3>
                <p className="value-card-text">{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section team-section">
        <div className="container empty-state">
          <span className="empty-state-badge mono">À compléter</span>
          <h2 className="empty-state-title">
            Notre histoire, notre équipe et nos qualifications.
          </h2>
          <p className="empty-state-desc">
            Cette section sera enrichie avec l’histoire, la vision, la mission
            et la présentation de l’équipe (dirigeants, techniciens, qualifications
            et expertises) dès que ces informations seront transmises par le client.
          </p>
        </div>
      </section>
    </>
  );
}
