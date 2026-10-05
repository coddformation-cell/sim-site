import { withBase } from '../lib/asset';
import { rawVideos } from './videos.generated';

export type Video = {
  slug: string;
  src: string;
  poster: string;
  alt: string;
  tags: string[];
  duration: number;
  width: number;
  height: number;
};

// Vidéos réelles de chantiers S.I.M, transmises par le client : extraits
// courts (sans le son d'origine), recompressés pour le web. Légendes
// strictement descriptives de ce qu'on voit.
const all: Video[] = rawVideos.map((v) => ({
  slug: v.slug,
  src: withBase(`/videos/${v.slug}.mp4`),
  poster: withBase(`/videos/${v.slug}.jpg`),
  alt: v.alt,
  tags: v.tags,
  duration: v.duration,
  width: v.width,
  height: v.height,
}));

// Alterne les domaines au lieu d'enchaîner dix vidéos du même sujet.
const interleave = (items: Video[]): Video[] => {
  const groups = new Map<string, Video[]>();
  for (const v of items) {
    const key = v.tags[0] ?? 'autre';
    groups.set(key, [...(groups.get(key) ?? []), v]);
  }
  const lists = [...groups.values()];
  const out: Video[] = [];
  for (let i = 0; lists.some((l) => i < l.length); i++) {
    for (const l of lists) if (i < l.length) out.push(l[i]);
  }
  return out;
};

export const videos: Video[] = interleave(all);

export const videosForService = (serviceId: string): Video[] =>
  videos.filter((v) => v.tags.includes(serviceId));

const bySlug = new Map(all.map((v) => [v.slug, v]));
export const video = (slug: string): Video => {
  const found = bySlug.get(slug);
  if (!found) throw new Error(`Vidéo introuvable : ${slug}`);
  return found;
};

export const homeVideos: Video[] = [
  'atelier-tube-etincelles',
  'levage-colonne',
  'cuve-structure-radiale',
  'plateforme-pont-groupe',
].map(video);

// Film de présentation de l'entreprise (avec le directeur général).
export const film = {
  src: withBase('/videos/film-sim.mp4'),
  poster: withBase('/videos/film-sim.jpg'),
  title: 'Film de présentation de S.I.M sarl',
  width: 1280,
  height: 720,
};
