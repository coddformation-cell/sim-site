import { Link } from 'react-router-dom';

export default function CTAFinal() {
  return (
    <section className="section cta-final">
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
