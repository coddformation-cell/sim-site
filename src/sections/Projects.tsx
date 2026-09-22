import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { projectFilters, projects, type ProjectFilter } from '../data/projects';

type Props = { hideHeader?: boolean };

export default function Projects({ hideHeader = false }: Props) {
  const [filter, setFilter] = useState<ProjectFilter>('all');

  const items = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section className="section projects">
      <div className="container">
        <header className={`section-head projects-head ${hideHeader ? 'is-filters-only' : ''}`}>
          {!hideHeader && (
            <div>
              <span className="eyebrow">Réalisations</span>
              <h2 className="section-title">Nos chantiers récents.</h2>
              <p className="section-lead">
                Un aperçu de nos réalisations en tuyauterie, chaudronnerie,
                usinage, naval, onshore/offshore et logistique.
              </p>
            </div>
          )}
          <div
            className="projects-filters"
            role="tablist"
            aria-label="Filtrer les projets par discipline"
          >
            {projectFilters.map((f) => (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={filter === f.id}
                className={`filter-btn ${filter === f.id ? 'is-active' : ''}`}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </header>

        <div className="projects-grid">
          {items.map((p, i) => (
            <Link
              to={`/realisations/${p.slug}`}
              key={p.id}
              className="project-card"
              style={{ transitionDelay: `${Math.min(i, 4) * 60}ms` }}
            >
              <div className="project-media">
                <img src={p.image} alt="" loading="lazy" />
                <span className="project-cat mono">{p.categoryLabel}</span>
              </div>
              <div className="project-body">
                <h3 className="project-title">{p.title}</h3>
                <dl className="project-specs">
                  <div>
                    <dt className="mono">Lieu</dt>
                    <dd>{p.location}</dd>
                  </div>
                  <div>
                    <dt className="mono">Périmètre</dt>
                    <dd>{p.scope}</dd>
                  </div>
                  <div>
                    <dt className="mono">Année</dt>
                    <dd>{p.year}</dd>
                  </div>
                </dl>
              </div>
            </Link>
          ))}
        </div>

        {items.length === 0 && (
          <p className="projects-empty">Aucun projet dans cette discipline pour le moment.</p>
        )}
      </div>
    </section>
  );
}
