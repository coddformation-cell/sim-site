import { withBase } from '../lib/asset';

export type FieldPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const photo = (slug: string, alt: string, width: number, height: number): FieldPhoto => ({
  src: withBase(`/images/chantiers/${slug}.jpg`),
  alt,
  width,
  height,
});

// Photos réelles de chantiers S.I.M, transmises par le client. Légendes
// strictement descriptives de ce qu'on voit (aucun nom de client, de lieu
// ni de date inventé). Métadonnées EXIF/GPS retirées au traitement.
export const fieldPhotos: FieldPhoto[] = [
  photo('cuve-interieur', "Intérieur d'une cuve de stockage", 1020, 765),
  photo('soudeur-etincelles', 'Soudeur en action', 744, 992),
  photo('cuve-equipe-soudure', "Équipe de soudeurs au travail sur le fond d'une cuve", 1600, 823),
  photo('atelier-conduite', "Préparation d'une conduite en atelier", 900, 1600),
  photo('offshore-pont', "Matériel sur le pont d'une plateforme en mer", 1600, 823),
  photo('cuve-soudage-toles', 'Soudage de tôles sur un fond de cuve', 1600, 823),
  photo('tuyauterie-vanne', 'Intervention sur une vanne et sa tuyauterie', 984, 1600),
  photo('sous-marin-2', 'Inspection sous-marine', 1600, 1200),
  photo('cuve-levage-grue', "Levage d'un élément de cuve par grue", 984, 1600),
  photo('tuyauterie-atex', 'Réseau de tuyauterie industrielle en zone ATEX', 1600, 823),
  photo('soudeur-chantier', 'Soudage sur chantier', 1600, 823),
  photo('technicien-cuve', 'Technicien en tenue de chantier près d’une cuve', 765, 1020),
  photo('cuve-structure-dessus', 'Structure de cuve en cours de montage, vue de dessus', 1600, 823),
  photo('grue-mobile', 'Grue mobile en opération', 984, 1600),
  photo('offshore-materiel', 'Groupe électrogène et échafaudages sur une plateforme en mer', 1600, 823),
  photo('cuve-echafaudage', 'Chantier de cuve avec échafaudage', 1600, 823),
  photo('sous-marin-1', 'Intervention sous-marine sur une structure métallique', 1600, 1200),
  photo('transport-tubes', 'Transport de tubes en acier sur remorque', 1600, 823),
  photo('cuve-fond-eclaire', "Travaux sur le fond d'une cuve", 1600, 823),
];

const bySrc = (slug: string) => {
  const src = withBase(`/images/chantiers/${slug}.jpg`);
  const found = fieldPhotos.find((p) => p.src === src);
  if (!found) throw new Error(`Photo chantier introuvable : ${slug}`);
  return found;
};

export const homeFieldPhotos: FieldPhoto[] = [
  bySrc('cuve-interieur'),
  bySrc('cuve-soudage-toles'),
  bySrc('offshore-pont'),
  bySrc('tuyauterie-atex'),
];
