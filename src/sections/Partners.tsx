import { partners } from '../data/partners';
import { partnersIntro } from '../data/company';

type Props = { hideHeader?: boolean };

export default function Partners({ hideHeader = false }: Props) {
  return (
    <section className="section partners">
      <div className="container">
        {!hideHeader && (
          <header className="section-head">
            <span className="eyebrow">{partnersIntro.eyebrow}</span>
            <h2 className="section-title">{partnersIntro.title}</h2>
            <p className="section-lead">{partnersIntro.lead}</p>
          </header>
        )}

        <ul className="partners-grid" role="list">
          {partners.map((p) => (
            <li key={p.id} className="partner-item">
              <div className="partner-name">{p.name}</div>
              {p.fullName && <div className="partner-full">{p.fullName}</div>}
              <div className="partner-sector mono">{p.sector}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
