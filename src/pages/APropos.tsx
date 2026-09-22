import PageHero from '../components/PageHero';
import About from '../sections/About';
import HSEBlock from '../sections/HSEBlock';
import Testimonials from '../sections/Testimonials';
import CTAFinal from '../sections/CTAFinal';
import { media } from '../data/media';

export default function APropos() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="Une équipe qualifiée au service de l’industrie ivoirienne."
        lead="Basée à Koumassi (Abidjan), S.I.M sarl est spécialisée dans la soudure industrielle et maritime : tuyauterie, chaudronnerie, usinage, onshore/offshore, naval et logistique."
        image={media.pageHeroes.apropos}
      />
      <About hideHeader />
      <HSEBlock />
      <Testimonials hideHeader />
      <CTAFinal />
    </>
  );
}
