import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { site } from '../data/site';

export default function RejoignezNous() {
  return (
    <>
      <PageHeader
        eyebrow="Rejoignez-nous"
        title="Carrières, candidatures spontanées et partenariats."
        lead="S.I.M sarl accueille les candidatures de professionnels qualifiés du secteur industriel et maritime, ainsi que les propositions de partenariat."
      />

      <section className="section join-section">
        <div className="container join-grid">
          <article className="join-card">
            <span className="mono join-card-tag">Carrières</span>
            <h2 className="join-card-title">Rejoignez nos équipes.</h2>
            <p className="join-card-desc">
              Tuyauteurs, soudeurs, chaudronniers, techniciens usinage,
              mécaniciens navals, personnels habilités onshore/offshore : nous
              renforçons régulièrement nos équipes pour accompagner la croissance
              de nos chantiers.
            </p>
            <p className="join-card-note mono">
              Envoyez votre candidature à l’adresse ci-dessous, avec CV et
              références de vos précédentes interventions.
            </p>
            <a href={`mailto:${site.contact.email}`} className="btn btn-primary">
              {site.contact.email}
            </a>
          </article>

          <article className="join-card">
            <span className="mono join-card-tag">Partenariats</span>
            <h2 className="join-card-title">Développons vos chantiers.</h2>
            <p className="join-card-desc">
              Vous êtes opérateur industriel, EPC, armateur ou entreprise de
              services et cherchez un partenaire local pour vos travaux de
              soudure, tuyauterie, chaudronnerie, usinage, naval ou logistique en
              Côte d’Ivoire ? Écrivez-nous.
            </p>
            <p className="join-card-note mono">
              Notre équipe commerciale revient vers vous rapidement pour
              étudier votre demande.
            </p>
            <Link to="/contact" className="btn btn-ghost">
              Prendre contact
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}
