import { withBase } from '../lib/asset';

// Bannière officielle S.I.M sarl (fournie par le client, oct. 2026).
// Affichée en entier, sans recadrage : le texte et les pictogrammes
// font partie de l'image.
export default function HeroBanner() {
  return (
    <section className="hero-banner" aria-label="S.I.M sarl — Soudure Industrielle et Maritime">
      <img
        src={withBase('/images/banniere-sim.jpg')}
        alt="S.I.M sarl, Soudure Industrielle et Maritime — soudage, tuyauterie, chaudronnerie, usinage, maintenance, montage et travaux maritimes à Abidjan, Côte d’Ivoire"
        width="1280"
        height="476"
        decoding="async"
        fetchPriority="high"
      />
    </section>
  );
}
