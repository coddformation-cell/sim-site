import { partners } from '../data/partners';

export default function PartnersSection() {
  return (
    <section className="section partners-section" aria-labelledby="partners-title">
      <div className="container">
        <header className="section-head">
          <span className="eyebrow">Partenaires</span>
          <h2 id="partners-title" className="section-title">
            Nos partenaires.
          </h2>
        </header>

        <ul className="partners-grid" role="list">
          {partners.map((p) => (
            <li key={p.slug} className="partner-card">
              <img
                src={p.src}
                alt={p.name}
                width={p.width}
                height={p.height}
                loading="lazy"
                decoding="async"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
