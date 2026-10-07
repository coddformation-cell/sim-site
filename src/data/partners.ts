import { withBase } from '../lib/asset';

// Logos des partenaires de S.I.M sarl, transmis par le client (oct. 2026).
// Fichiers préparés dans public/images/partenaires/ (fond rogné, WebP).
export type Partner = {
  slug: string;
  name: string;
  src: string;
  width: number;
  height: number;
};

const raw = [
  { slug: 'sir', name: 'SIR — Société Ivoirienne de Raffinage', width: 388, height: 260 },
  { slug: 'petroci', name: 'PETROCI', width: 198, height: 260 },
  { slug: 'port-autonome-abidjan', name: 'Port Autonome d’Abidjan', width: 260, height: 260 },
  { slug: 'gestoci', name: 'GESTOCI — Société de Gestion des Stocks Pétroliers de Côte d’Ivoire', width: 389, height: 260 },
  { slug: 'smb', name: 'SMB', width: 321, height: 260 },
  { slug: 'onep', name: 'ONEP — Office National de l’Eau Potable', width: 520, height: 218 },
  { slug: 'ocean-rig', name: 'Ocean Rig', width: 520, height: 152 },
  { slug: 'foxtrot-international', name: 'Foxtrot International', width: 520, height: 231 },
  { slug: 'seramar', name: 'SERAMAR', width: 462, height: 260 },
  { slug: 'ateman', name: 'ATEMAN — Atelier de la Marine Nationale', width: 520, height: 258 },
  { slug: 'its', name: 'ITS — Ivoire Techniques et Services', width: 384, height: 260 },
  { slug: 'icm-holding', name: 'ICM Holding', width: 254, height: 194 },
];

export const partners: Partner[] = raw.map((p) => ({
  ...p,
  src: withBase(`/images/partenaires/${p.slug}.webp`),
}));
