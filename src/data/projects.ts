import { media } from './media';

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: 'tuyauterie' | 'chaudronnerie' | 'usinage' | 'onshore-offshore' | 'naval' | 'logistique';
  categoryLabel: string;
  location: string;
  scope: string;
  year: string;
  image: string;
  summary: string;
  presentation: string;
  context: string;
  challenge: string;
  approach: string;
  gallery: string[];
  specs: Array<{ label: string; value: string }>;
  featured?: boolean;
};

// Références basées sur les activités documentées dans le catalogue S.I.M.
// Les détails précis (date, client) sont à ajuster selon les projets réels du client.
export const projects: Project[] = [
  {
    id: 'p1',
    slug: 'reparation-navale-sirius',
    title: 'Réparation navale — Sirius',
    category: 'naval',
    categoryLabel: 'Naval',
    location: 'Port d’Abidjan',
    scope: 'Réparation complète coque et peinture',
    year: '2024',
    image: media.services.naval,
    summary:
      'Restauration complète d’un bateau : coque, mécanique naval, sablage et peinture.',
    presentation:
      'Chantier de réparation navale complet sur le bateau Sirius : entretien coque, alignement moteur, sablage intégral et remise en peinture.',
    context:
      'Le bateau nécessitait une remise en état complète après plusieurs années d’exploitation. Le chantier s’est déroulé au port d’Abidjan avec accès marée.',
    challenge:
      'Coordonner la mécanique navale, le sablage et la peinture dans un délai contraint par les fenêtres d’exploitation du client.',
    approach:
      'Mobilisation d’une équipe pluridisciplinaire (soudeurs, mécaniciens, peintres) et pilotage centralisé du planning.',
    gallery: [media.services.naval, media.engineer, media.team],
    specs: [
      { label: 'Client', value: 'Armateur privé' },
      { label: 'Durée', value: '6 semaines' },
      { label: 'Moyens', value: 'Postes TIG/MIG · Compresseur d’air · Groupe électrogène' },
      { label: 'Livrables', value: 'Bateau restauré et opérationnel' },
    ],
    featured: true,
  },
  {
    id: 'p2',
    slug: 'tuyauterie-industrielle-koumassi',
    title: 'Tuyauterie industrielle',
    category: 'tuyauterie',
    categoryLabel: 'Tuyauterie',
    location: 'Zone industrielle — Abidjan',
    scope: 'Fabrication et installation de tuyauteries',
    year: '2024',
    image: media.services.tuyauterie,
    summary:
      'Préfabrication en atelier et installation sur site de lignes industrielles.',
    presentation:
      'Fabrication en atelier puis installation sur site de lignes de tuyauterie industrielles avec raccordement, alignement et soudages certifiés.',
    context:
      'Le client cherchait à étendre son réseau de tuyauteries process avec des exigences fortes en qualité de soudure.',
    challenge:
      'Préparer les préfabrications à l’atelier tout en s’adaptant aux contraintes du site pendant l’installation.',
    approach:
      'Découpe, chanfreinage et alignement en atelier, transport, montage sur site et tests d’étanchéité.',
    gallery: [media.services.tuyauterie, media.engineer, media.team],
    specs: [
      { label: 'Client', value: 'Industriel local' },
      { label: 'Durée', value: '8 semaines' },
      { label: 'Moyens', value: 'Postes arc/TIG · Groupe électrogène · Équipements de coupe' },
      { label: 'Livrables', value: 'Réseau installé et éprouvé' },
    ],
  },
  {
    id: 'p3',
    slug: 'chaudronnerie-reservoir',
    title: 'Confection de réservoir de stockage',
    category: 'chaudronnerie',
    categoryLabel: 'Chaudronnerie',
    location: 'Site industriel — Abidjan',
    scope: 'Conception et fabrication d’un réservoir sur mesure',
    year: '2024',
    image: media.services.chaudronnerie,
    summary:
      'Conception, fabrication et livraison d’un réservoir de stockage sur mesure.',
    presentation:
      'Notre bureau d’études a conçu un réservoir de stockage adapté au procédé du client, réalisé en atelier avec plieuse, rouleuse et poste à souder.',
    context:
      'Le client avait besoin d’un réservoir dédié pour son procédé, avec dimensions et matériaux spécifiques.',
    challenge:
      'Fabriquer un ouvrage sur mesure en atelier et l’installer sur site avec les contraintes de manutention.',
    approach:
      'Étude en bureau, découpe et pliage en atelier, roulage et soudure, transport et pose sur site.',
    gallery: [media.services.chaudronnerie, media.engineer, media.team],
    specs: [
      { label: 'Client', value: 'Industriel local' },
      { label: 'Durée', value: '10 semaines' },
      { label: 'Moyens', value: 'Cisaille · Plieuse · Rouleuse · Poste électrode' },
      { label: 'Livrables', value: 'Réservoir livré, installé et éprouvé' },
    ],
  },
  {
    id: 'p4',
    slug: 'intervention-offshore',
    title: 'Intervention offshore — pipeline',
    category: 'onshore-offshore',
    categoryLabel: 'Onshore / Offshore',
    location: 'Champ offshore — Golfe de Guinée',
    scope: 'Montage/démontage et épreuves',
    year: '2024',
    image: media.services.onshoreOffshore,
    summary:
      'Intervention offshore : montage/démontage, travaux mécaniques et épreuves.',
    presentation:
      'Mission offshore d’intervention sur une infrastructure pétrolière : montage/démontage, travaux mécaniques et épreuves techniques.',
    context:
      'L’opérateur avait besoin d’une équipe qualifiée et habilitée pour intervenir rapidement sur son installation offshore.',
    challenge:
      'Mobiliser un personnel habilité et un équipement de soudage certifié dans un délai court, avec HSE renforcée.',
    approach:
      'Mobilisation d’une équipe certifiée, transport du matériel, exécution des travaux et remise en service.',
    gallery: [media.services.onshoreOffshore, media.engineer, media.team],
    specs: [
      { label: 'Client', value: 'Opérateur offshore' },
      { label: 'Durée', value: '4 semaines' },
      { label: 'Moyens', value: 'Postes arc/TIG certifiés · Groupe électrogène' },
      { label: 'Livrables', value: 'Installation remise en service' },
    ],
  },
  {
    id: 'p5',
    slug: 'usinage-piece-mecanique',
    title: 'Usinage de pièces mécaniques',
    category: 'usinage',
    categoryLabel: 'Usinage',
    location: 'Atelier S.I.M. — Koumassi',
    scope: 'Fabrication de pièces sur plans',
    year: '2024',
    image: media.services.usinage,
    summary:
      'Fabrication en atelier de pièces mécaniques d’après plans clients.',
    presentation:
      'Réalisation en atelier de pièces mécaniques d’après plans : tournage, fraisage, perçage, alésage, avec contrôle qualité.',
    context:
      'Plusieurs clients industriels ont sollicité S.I.M. pour la fabrication de pièces de rechange ou spéciales.',
    challenge:
      'Tenir les tolérances demandées sur des matériaux variés, avec des délais courts.',
    approach:
      'Étude sur plan, préparation matière, usinage sur tour et fraiseuse, contrôle dimensionnel.',
    gallery: [media.services.usinage, media.team, media.engineer],
    specs: [
      { label: 'Clients', value: 'Multiples industriels' },
      { label: 'Machines', value: 'Tour parallèle · Fraiseuse · Perceuse radiale' },
      { label: 'Contrôle', value: 'Dimensionnel selon plans' },
    ],
  },
  {
    id: 'p6',
    slug: 'logistique-location-equipements',
    title: 'Location d’équipements de chantier',
    category: 'logistique',
    categoryLabel: 'Logistique',
    location: 'Chantier industriel — Abidjan',
    scope: 'Location de grues et postes de soudage',
    year: '2024',
    image: media.services.logistique,
    summary:
      'Mise à disposition de moyens de levage, de soudage et de groupes électrogènes.',
    presentation:
      'Location clé en main d’équipements de chantier : grues, camion à bras auxiliaires, postes autonomes de soudage, groupes électrogènes.',
    context:
      'Un donneur d’ordre avait besoin de renforcer temporairement son parc de matériels pour un chantier de plusieurs mois.',
    challenge:
      'Fournir un parc adapté, avec maintenance et remplacement rapides en cas de panne.',
    approach:
      'Mobilisation du parc S.I.M. avec chauffeurs et opérateurs, maintenance quotidienne.',
    gallery: [media.services.logistique, media.team, media.engineer],
    specs: [
      { label: 'Client', value: 'Industriel local' },
      { label: 'Durée', value: 'Contrat de 6 mois' },
      { label: 'Matériels', value: 'Grues · Camion à bras · Postes TIG/MIG · Groupes' },
    ],
  },
];

export const projectFilters = [
  { id: 'all', label: 'Tous' },
  { id: 'tuyauterie', label: 'Tuyauterie' },
  { id: 'chaudronnerie', label: 'Chaudronnerie' },
  { id: 'usinage', label: 'Usinage' },
  { id: 'onshore-offshore', label: 'Onshore/Offshore' },
  { id: 'naval', label: 'Naval' },
  { id: 'logistique', label: 'Logistique' },
] as const;

export type ProjectFilter = (typeof projectFilters)[number]['id'];

export const featuredProjects = projects.filter((p) => p.featured).concat(
  projects.filter((p) => !p.featured).slice(0, 2)
);
