import { Link } from 'react-router-dom';
import { services } from '../data/services';
import { homeServicesIntro } from '../data/company';
import ServiceCover from '../components/ServiceCover';

export default function HomeServices() {
  return (
    <section className="section home-services">
      <div className="container">
        <header className="section-head">
          <span className="eyebrow">{homeServicesIntro.eyebrow}</span>
          <h2 className="section-title">{homeServicesIntro.title}</h2>
          <p className="section-lead">{homeServicesIntro.lead}</p>
        </header>

        <ul className="home-services-grid" role="list">
          {services.map((s) => (
            <li key={s.id} className="home-service-card">
              <Link to={`/services/${s.slug}`} className="home-service-inner">
                <div className="home-service-media">
                  <ServiceCover index={s.index} title={s.title} />
                </div>
                <div className="home-service-body">
                  <h3 className="home-service-title">{s.title}</h3>
                  <p className="home-service-short">{s.short}</p>
                  <span className="home-service-cta mono">
                    En savoir plus <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
