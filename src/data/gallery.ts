import { withBase } from '../lib/asset';
import { rawPhotos } from './gallery.generated';

export type PhotoTag =
  | 'tuyauterie'
  | 'chaudronnerie'
  | 'onshore-offshore'
  | 'naval'
  | 'echangeur-aero'
  | 'logistique'
  | 'soudure'
  | 'sous-marin';

export type FieldPhoto = {
  slug: string;
  src: string;
  thumb: string;
  alt: string;
  width: number;
  height: number;
  thumbWidth: number;
  thumbHeight: number;
  tags: PhotoTag[];
};

export const photoCategories: { tag: PhotoTag; label: string }[] = [
  { tag: 'tuyauterie', label: 'Tuyauterie' },
  { tag: 'chaudronnerie', label: 'Chaudronnerie' },
  { tag: 'soudure', label: 'Soudure' },
  { tag: 'onshore-offshore', label: 'Onshore / Offshore' },
  { tag: 'sous-marin', label: 'Sous-marin' },
  { tag: 'naval', label: 'Naval' },
  { tag: 'echangeur-aero', label: 'Échangeur & Aéro' },
  { tag: 'logistique', label: 'Logistique' },
];

// Photos réelles de chantiers S.I.M, transmises par le client (archives
// d'images, film et diaporama de présentation). Légendes strictement
// descriptives de ce qu'on voit — aucun nom de client, de lieu ni de date
// inventé. EXIF/GPS retirés, filigrane du téléphone recadré.
const toPhoto = (p: (typeof rawPhotos)[number]): FieldPhoto => ({
  slug: p.slug,
  src: withBase(`/images/chantiers/${p.slug}.jpg`),
  thumb: withBase(`/images/chantiers/${p.slug}-sm.jpg`),
  alt: p.alt,
  width: p.width,
  height: p.height,
  thumbWidth: p.thumbWidth,
  thumbHeight: p.thumbHeight,
  tags: p.tags as PhotoTag[],
});

const all = rawPhotos.map(toPhoto);
const bySlug = new Map(all.map((p) => [p.slug, p]));

export const photo = (slug: string): FieldPhoto => {
  const found = bySlug.get(slug);
  if (!found) throw new Error(`Photo introuvable : ${slug}`);
  return found;
};

// Mélange les domaines (au lieu d'enchaîner 20 photos de cuves d'affilée).
const interleave = (photos: FieldPhoto[]): FieldPhoto[] => {
  const groups = new Map<string, FieldPhoto[]>();
  for (const p of photos) {
    const key = p.tags[0] ?? 'autre';
    groups.set(key, [...(groups.get(key) ?? []), p]);
  }
  const lists = [...groups.values()];
  const out: FieldPhoto[] = [];
  for (let i = 0; lists.some((l) => i < l.length); i++) {
    for (const l of lists) if (i < l.length) out.push(l[i]);
  }
  return out;
};

const isDirector = (slug: string) => slug.startsWith('dg-');
const isTeam = (slug: string) => slug.startsWith('equipe-');

export const fieldPhotos: FieldPhoto[] = interleave(
  all.filter((p) => !isDirector(p.slug) && !isTeam(p.slug))
);

export const photosForService = (serviceId: string): FieldPhoto[] => {
  const tags: PhotoTag[] =
    serviceId === 'onshore-offshore' ? ['onshore-offshore', 'sous-marin'] : [serviceId as PhotoTag];
  return fieldPhotos.filter((p) => p.tags.some((t) => tags.includes(t)));
};

export const homeFieldPhotos: FieldPhoto[] = [
  'cuve-radiale-dessus',
  'offshore-pont-groupe',
  'tuyauterie-equipe-montage',
  'soudeur-etincelles',
  'naval-cale',
  'sous-marin-soudure',
  'grue-chantier',
  'cuve-equipe-machines',
  'cuve-soudage-toles',
].map(photo);

export const directorPhotos = {
  portrait: photo('dg-entretien'),
  trophees: photo('dg-trophees'),
  withTrophies: photo('dg-portrait-trophees'),
  poster: photo('dg-affiche-prix'),
};

// Photo mise en avant sous la présentation de chaque service (page détail).
const asideSlugs: Record<string, string> = {
  tuyauterie: 'tuyauterie-equipe-montage',
  chaudronnerie: 'cuve-radiale-dessus',
  'onshore-offshore': 'offshore-grue-mer',
  naval: 'naval-cale',
  'echangeur-aero': 'recipient-technicien',
  logistique: 'grue-chantier',
};
export const serviceAside = (serviceId: string): FieldPhoto | null => {
  const slug = asideSlugs[serviceId];
  return slug && bySlug.has(slug) ? photo(slug) : null;
};

export const teamPhotos: FieldPhoto[] = ['cuve-grande-equipe', 'cuve-radiale-equipe', 'cuve-equipe-fond'].map(photo);
