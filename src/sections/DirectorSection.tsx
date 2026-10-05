import { directorPhotos } from '../data/gallery';

export default function DirectorSection() {
  const { portrait, trophees, withTrophies, poster } = directorPhotos;

  return (
    <section className="section director-section">
      <div className="container director-grid">
        <figure className="director-portrait" data-reveal>
          <img
            src={portrait.thumb}
            alt={portrait.alt}
            width={portrait.thumbWidth}
            height={portrait.thumbHeight}
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            <strong>Capitaine Mory Koné</strong>
            <span className="mono">Directeur Général de S.I.M sarl</span>
          </figcaption>
        </figure>

        <div className="director-body">
          <span className="eyebrow">Direction</span>
          <h2 className="section-title">Une direction reconnue pour son savoir-faire.</h2>
          <p className="director-lead">
            En mars 2024, le directeur général de S.I.M sarl a reçu le prix du
            Meilleur Manager d’Entreprise de Soudure Maritime (Africa Dubai
            Business Award, Dubaï), ainsi que le Super Prix Argent IDBF.
          </p>
          <div className="director-awards">
            <figure data-reveal>
              <img
                src={withTrophies.thumb}
                alt={withTrophies.alt}
                width={withTrophies.thumbWidth}
                height={withTrophies.thumbHeight}
                loading="lazy"
                decoding="async"
              />
            </figure>
            <figure data-reveal>
              <img
                src={poster.thumb}
                alt={poster.alt}
                width={poster.thumbWidth}
                height={poster.thumbHeight}
                loading="lazy"
                decoding="async"
              />
            </figure>
            <figure className="director-awards-wide" data-reveal>
              <img
                src={trophees.thumb}
                alt={trophees.alt}
                width={trophees.thumbWidth}
                height={trophees.thumbHeight}
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
