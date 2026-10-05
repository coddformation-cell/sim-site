import { Link } from 'react-router-dom';
import { withBase } from '../lib/asset';

export default function CTAFinal() {
  return (
    <section className="section cta-final">
      <div className="cta-final-media" aria-hidden="true">
        <img src={withBase('/images/hero/cta-equipe.jpg')} alt="" loading="lazy" decoding="async" />
        <div className="cta-final-overlay" />
      </div>
      <div className="container cta-final-inner">
        <span className="eyebrow">Contact</span>
        <h2 className="cta-final-title">
          Vous avez un chantier ?
          <br />
          <span>Parlons de votre projet.</span>
        </h2>
        <div className="cta-final-actions">
          <Link to="/contact" className="btn btn-primary">
            Demander un devis
            <span aria-hidden="true">→</span>
          </Link>
          <Link to="/services" className="btn btn-ghost">
            Nos services
          </Link>
        </div>
      </div>
    </section>
  );
}
