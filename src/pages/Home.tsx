import Hero from '../sections/Hero';
import Manifesto from '../sections/Manifesto';
import HomeServices from '../sections/HomeServices';
import VisualBanner from '../sections/VisualBanner';
import HomeProjects from '../sections/HomeProjects';
import Partners from '../sections/Partners';
import KeyFigures from '../sections/KeyFigures';
import HSEBlock from '../sections/HSEBlock';
import CTAFinal from '../sections/CTAFinal';

export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <HomeServices />
      <VisualBanner />
      <HomeProjects />
      <KeyFigures />
      <HSEBlock />
      <Partners />
      <CTAFinal />
    </>
  );
}
