import { Link } from 'react-router-dom';
import { homeFieldPhotos } from '../data/gallery';

export default function FieldStrip() {
  return (
    <section className="section field-strip">
      <div className="container">
        <header className="section-head">
          <span className="eyebrow">Sur le terrain</span>
          <h2 className="section-title">Nos équipes en intervention.</h2>
          <p className="section-lead">
            Quelques images de nos chantiers : cuves, tuyauterie, soudure et
            interventions en mer.
          </p>
        </header>

        <ul className="field-strip-grid" role="list">
          {homeFieldPhotos.map((p) => (
            <li key={p.src} className="field-strip-item" data-reveal>
              <img
                src={p.thumb}
                alt={p.alt}
                width={p.thumbWidth}
                height={p.thumbHeight}
                loading="lazy"
                decoding="async"
              />
            </li>
          ))}
        </ul>

        <div className="field-strip-actions">
          <Link to="/realisations" className="btn btn-ghost">
            Voir toutes les photos <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
