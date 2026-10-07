import HeroBanner from '../sections/HeroBanner';
import Hero from '../sections/Hero';
import Manifesto from '../sections/Manifesto';
import HomeServices from '../sections/HomeServices';
import FilmSection from '../sections/FilmSection';
import FieldStrip from '../sections/FieldStrip';
import VideoStrip from '../sections/VideoStrip';
import DirectorSection from '../sections/DirectorSection';
import CTAFinal from '../sections/CTAFinal';

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Hero />
      <Manifesto />
      <HomeServices />
      <FilmSection />
      <FieldStrip />
      <VideoStrip />
      <DirectorSection />
      <CTAFinal />
    </>
  );
}
