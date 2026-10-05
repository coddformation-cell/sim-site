import Hero from '../sections/Hero';
import Manifesto from '../sections/Manifesto';
import HomeServices from '../sections/HomeServices';
import VisualBanner from '../sections/VisualBanner';
import FieldStrip from '../sections/FieldStrip';
import DirectorSection from '../sections/DirectorSection';
import CTAFinal from '../sections/CTAFinal';

export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <HomeServices />
      <VisualBanner />
      <FieldStrip />
      <DirectorSection />
      <CTAFinal />
    </>
  );
}
