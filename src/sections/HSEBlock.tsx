import { hseStatement } from '../data/company';
import { media } from '../data/media';

export default function HSEBlock() {
  return (
    <section className="section hse-block">
      <div className="container hse-block-inner">
        <div className="hse-block-media">
          <img src={media.hse} alt="" loading="lazy" />
          <div className="hse-block-overlay" />
        </div>
        <div className="hse-block-body">
          <span className="eyebrow">{hseStatement.eyebrow}</span>
          <h2 className="section-title">Sécurité, qualité et maîtrise opérationnelle.</h2>
          <p className="hse-block-desc">{hseStatement.description}</p>
          <ul className="hse-block-pillars mono" role="list">
            {hseStatement.pillars.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
