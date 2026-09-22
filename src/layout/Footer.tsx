import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import { navLinks, site } from '../data/site';
import { services } from '../data/services';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Logo />
          <p>
            Soudure Industrielle & Maritime — Tuyauterie, Chaudronnerie, Usinage,
            Onshore/Offshore, Naval, Échangeur & Aéro et Logistique en Côte d’Ivoire.
          </p>
          <ul className="footer-locations" role="list">
            <li>
              <span className="mono">Siège</span> {site.contact.address}
            </li>
            <li>
              <span className="mono">Tél</span> {site.contact.phone1}
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            {services.map((s) => (
              <li key={s.id}>
                <Link to={`/services/${s.slug}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href={`tel:${site.contact.phone1.replace(/\s/g, '')}`}>
                {site.contact.phone1}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
            </li>
            <li>{site.contact.web}</li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {year} S.I.M sarl — Soudure Industrielle & Maritime.</span>
        <span className="footer-demo">Tous droits réservés.</span>
      </div>
    </footer>
  );
}
