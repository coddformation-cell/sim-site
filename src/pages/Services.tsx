import PageHeader from '../components/PageHeader';
import ServicesAlternating from '../sections/ServicesAlternating';
import CTAFinal from '../sections/CTAFinal';
import { media } from '../data/media';

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Nos services"
        title="Sept expertises complémentaires pour vos projets industriels et maritimes."
        lead="De la tuyauterie à la construction navale, en passant par la chaudronnerie, l’usinage, les interventions onshore/offshore, l’échangeur & aéro et la logistique — chaque domaine est présenté avec ses compétences et les moyens dédiés."
        image={media.weldingWorkshop}
      />
      <ServicesAlternating />
      <CTAFinal />
    </>
  );
}
