import { Link } from 'react-router-dom';
import { services } from '../data/services';

export default function ServicesAlternating() {
  return (
    <section className="section services-alt">
      <div className="container">
        <ul className="services-alt-list" role="list">
          {services.map((s, i) => (
            <li
              key={s.id}
              className={`services-alt-row ${i % 2 === 1 ? 'is-reverse' : ''}`}
            >
              <div className="services-alt-media">
                <img src={s.image} alt="" loading="lazy" />
                <span className="services-alt-index mono">{s.index}</span>
              </div>
              <div className="services-alt-body">
                <h3 className="services-alt-title">{s.title}</h3>
                <p className="services-alt-desc">{s.description}</p>

                <div className="services-alt-cols">
                  <div>
                    <span className="services-alt-label mono">Domaines de compétences</span>
                    <ul role="list">
                      {s.competences.map((c) => (
                        <li key={c}>
                          <span className="capability-dot" aria-hidden="true" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="services-alt-label mono">Nos moyens</span>
                    <ul role="list">
                      {s.moyens.map((m) => (
                        <li key={m}>
                          <span className="capability-dot" aria-hidden="true" />
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="services-alt-footer">
                  <Link to={`/services/${s.slug}`} className="btn btn-ghost">
                    En savoir plus
                  </Link>
                  <Link to="/contact" className="btn btn-primary">
                    Demander un devis
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
