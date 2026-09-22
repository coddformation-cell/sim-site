import PageHero from '../components/PageHero';
import Projects from '../sections/Projects';
import CTAFinal from '../sections/CTAFinal';
import { media } from '../data/media';

export default function Projets() {
  return (
    <>
      <PageHero
        eyebrow="Réalisations"
        title="Nos chantiers récents en tuyauterie, chaudronnerie, naval et offshore."
        lead="Un aperçu de nos réalisations pour l’industrie ivoirienne — tuyauterie, chaudronnerie, usinage, onshore/offshore, naval et logistique."
        image={media.pageHeroes.realisations}
      />
      <Projects hideHeader />
      <CTAFinal />
    </>
  );
}
