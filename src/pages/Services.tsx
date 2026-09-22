import PageHero from '../components/PageHero';
import ServicesAlternating from '../sections/ServicesAlternating';
import Process from '../sections/Process';
import CTAFinal from '../sections/CTAFinal';
import { media } from '../data/media';

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Nos services"
        title="Sept expertises complémentaires pour vos projets industriels et maritimes."
        lead="De la tuyauterie à la construction navale, en passant par la chaudronnerie, l’usinage, les interventions onshore/offshore, l’échangeur et la logistique."
        image={media.pageHeroes.services}
      />
      <ServicesAlternating />
      <Process />
      <CTAFinal />
    </>
  );
}
