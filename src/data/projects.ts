// Structure prête à recevoir des vraies réalisations S.I.M sarl.
// Aucun projet fictif n'est déclaré tant que le client n'a pas fourni
// les descriptifs, images et détails de ses chantiers réels.

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: 'tuyauterie' | 'chaudronnerie' | 'usinage' | 'onshore-offshore' | 'naval' | 'echangeur-aero' | 'logistique';
  categoryLabel: string;
  location: string;
  scope: string;
  year: string;
  summary: string;
  presentation: string;
  context: string;
  challenge: string;
  approach: string;
  gallery: string[];
  specs: Array<{ label: string; value: string }>;
  featured?: boolean;
  beforeImage?: string;
  afterImage?: string;
};

// Vide : les vraies réalisations seront ajoutées ici quand le client
// aura fourni les informations et les photos correspondantes.
export const projects: Project[] = [];

export const projectFilters = [
  { id: 'all', label: 'Tous' },
  { id: 'tuyauterie', label: 'Tuyauterie' },
  { id: 'chaudronnerie', label: 'Chaudronnerie' },
  { id: 'usinage', label: 'Usinage' },
  { id: 'onshore-offshore', label: 'Onshore/Offshore' },
  { id: 'naval', label: 'Naval' },
  { id: 'echangeur-aero', label: 'Échangeur & Aéro' },
  { id: 'logistique', label: 'Logistique' },
] as const;

export type ProjectFilter = (typeof projectFilters)[number]['id'];

export const featuredProjects = projects.filter((p) => p.featured);
