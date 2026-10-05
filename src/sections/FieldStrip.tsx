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
            Cuves, tuyauterie, soudure, levage, plateformes en mer et travaux
            sous-marins : quelques images de nos chantiers.
          </p>
        </header>

        <ul className="field-mosaic" role="list">
          {homeFieldPhotos.map((p, i) => (
            <li key={p.src} className={`field-mosaic-item ${i === 0 ? 'is-big' : ''}`}>
              <img
                src={i === 0 ? p.src : p.thumb}
                alt={p.alt}
                width={i === 0 ? p.width : p.thumbWidth}
                height={i === 0 ? p.height : p.thumbHeight}
                loading="lazy"
                decoding="async"
              />
            </li>
          ))}
        </ul>

        <div className="field-strip-actions">
          <Link to="/realisations" className="btn btn-ghost">
            Toutes les photos et vidéos <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
