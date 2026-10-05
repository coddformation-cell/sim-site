import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import MediaGallery from '../components/MediaGallery';
import { fieldPhotos, photo } from '../data/gallery';
import { videos } from '../data/videos';
import { projects } from '../data/projects';

export default function Projets() {
  const headerImage = photo('cuve-radiale-dessus').src;

  return (
    <>
      <PageHeader
        eyebrow="Réalisations"
        title="Nos chantiers en tuyauterie, chaudronnerie, naval et offshore."
        lead="Chaque réalisation présentera prochainement le contexte, les défis techniques rencontrés, la solution mise en œuvre et, quand disponibles, les visuels avant/après du chantier."
        image={headerImage}
      />

      <section className="section field-gallery-section">
        <div className="container">
          <header className="section-head">
            <span className="eyebrow">Sur le terrain</span>
            <h2 className="section-title">Nos chantiers en photos et en vidéos.</h2>
            <p className="section-lead">
              Nos équipes en intervention : cuves, tuyauterie, soudure,
              levage, plateformes en mer et travaux sous-marins. Cliquez sur
              un média pour l’agrandir.
            </p>
          </header>
          <MediaGallery photos={fieldPhotos} videos={videos} />
        </div>
      </section>

      {projects.length === 0 ? (
        <section className="section empty-state-section">
          <div className="container empty-state">
            <span className="empty-state-badge mono">À venir</span>
            <h2 className="empty-state-title">
              Nos réalisations seront publiées prochainement.
            </h2>
            <p className="empty-state-desc">
              Les études de cas — descriptif du chantier, défis techniques,
              solutions mises en œuvre et visuels avant/après — seront
              intégrées ici au fur et à mesure de leur validation par le client.
            </p>
            <div className="empty-state-actions">
              <Link to="/services" className="btn btn-ghost">
                Voir nos services
              </Link>
              <Link to="/contact" className="btn btn-primary">
                Discuter d’un projet
              </Link>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
