import { Link } from 'react-router-dom';
import { featuredProjects } from '../data/projects';
import { homeProjectsIntro } from '../data/company';

export default function HomeProjects() {
  return (
    <section className="section home-projects">
      <div className="container">
        <header className="section-head">
          <span className="eyebrow">{homeProjectsIntro.eyebrow}</span>
          <h2 className="section-title">{homeProjectsIntro.title}</h2>
          <p className="section-lead">{homeProjectsIntro.lead}</p>
        </header>

        <div className="home-projects-grid">
          {featuredProjects.map((p, i) => (
            <Link
              key={p.id}
              to={`/realisations/${p.slug}`}
              className={`home-project-card ${i === 0 ? 'is-primary' : ''}`}
            >
              <div className="home-project-media">
                <img src={p.image} alt="" loading="lazy" />
                <span className="home-project-cat mono">{p.categoryLabel}</span>
              </div>
              <div className="home-project-body">
                <h3 className="home-project-title">{p.title}</h3>
                <p className="home-project-summary">{p.summary}</p>
                <dl className="home-project-mini">
                  <div>
                    <dt className="mono">Lieu</dt>
                    <dd>{p.location}</dd>
                  </div>
                  <div>
                    <dt className="mono">Année</dt>
                    <dd>{p.year}</dd>
                  </div>
                </dl>
                <span className="home-project-cta mono">
                  Voir le projet <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="home-projects-footer">
          <Link to="/realisations" className="btn btn-ghost">
            Voir toutes les réalisations
          </Link>
        </div>
      </div>
    </section>
  );
}
