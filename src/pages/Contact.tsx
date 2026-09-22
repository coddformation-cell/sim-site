import PageHeader from '../components/PageHeader';
import ContactSection from '../sections/Contact';

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Parlons de votre projet industriel ou maritime."
        lead="Décrivez brièvement votre besoin — notre équipe revient vers vous rapidement."
      />
      <ContactSection />
    </>
  );
}
