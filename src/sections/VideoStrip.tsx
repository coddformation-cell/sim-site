import { Link } from 'react-router-dom';
import VideoGallery from '../components/VideoGallery';
import { homeVideos } from '../data/videos';

export default function VideoStrip() {
  return (
    <section className="section video-strip">
      <div className="container">
        <header className="section-head">
          <span className="eyebrow">Chantiers en vidéo</span>
          <h2 className="section-title">Nos interventions en mouvement.</h2>
          <p className="section-lead">
            Soudure en atelier, levages, structures de cuves et plateformes en
            mer : de courts extraits filmés sur nos chantiers.
          </p>
        </header>

        <VideoGallery videos={homeVideos} className="video-grid-4" />

        <div className="field-strip-actions">
          <Link to="/realisations" className="btn btn-ghost">
            Voir toutes les vidéos <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
