import PageHero from '../components/PageHero';
import Partners from '../sections/Partners';
import CTAFinal from '../sections/CTAFinal';
import { media } from '../data/media';

export default function Partenaires() {
  return (
    <>
      <PageHero
        eyebrow="Partenaires"
        title="Ils nous font confiance."
        lead="S.I.M sarl accompagne les grands acteurs industriels, énergétiques et maritimes de Côte d’Ivoire dans leurs projets de tuyauterie, chaudronnerie, usinage, onshore/offshore et naval."
        image={media.pageHeroes.partenaires}
      />
      <Partners hideHeader />
      <CTAFinal />
    </>
  );
}
