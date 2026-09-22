// Contenu S.I.M. sarl — données réelles issues du catalogue officiel.

export type Testimonial = {
  id: string;
  role: string;
  organisation: string;
  quote: string;
};

// Témoignages placeholder — à remplacer par de vrais retours S.I.M.
export const testimonials: Testimonial[] = [
  {
    id: 't1',
    role: 'Responsable maintenance',
    organisation: 'Partenaire industriel',
    quote:
      'Une équipe technique fiable, disponible et rigoureuse. Nos chantiers sont livrés dans les délais et à la qualité attendue.',
  },
  {
    id: 't2',
    role: 'Chef de projet',
    organisation: 'Opérateur onshore',
    quote:
      'Le savoir-faire soudure et tuyauterie de S.I.M. est reconnu sur nos sites. La coordination HSE est irréprochable.',
  },
  {
    id: 't3',
    role: 'Responsable technique',
    organisation: 'Armateur',
    quote:
      'Un excellent partenaire pour la réparation et la maintenance de nos bateaux. Résultat visible avant/après.',
  },
];

export const keyFigures = [
  { value: '15+', label: 'années d’expérience', hint: '' },
  { value: '7', label: 'domaines d’expertise', hint: '' },
  { value: '12+', label: 'partenaires industriels', hint: '' },
  { value: '24/7', label: 'disponibilité opérationnelle', hint: '' },
];

export const processSteps = [
  {
    step: '01',
    title: 'Écoute et cadrage',
    description:
      'Nous cernons votre besoin, le périmètre technique et les contraintes HSE dès le premier échange.',
  },
  {
    step: '02',
    title: 'Étude et proposition',
    description:
      'Étude technique par notre bureau d’études, sélection des méthodes et des équipements, proposition commerciale.',
  },
  {
    step: '03',
    title: 'Exécution',
    description:
      'Mobilisation des équipes qualifiées, exécution en atelier ou sur site, suivi HSE quotidien.',
  },
  {
    step: '04',
    title: 'Livraison et suivi',
    description:
      'Contrôle qualité, essais, remise au client et suivi de maintenance selon vos besoins.',
  },
];

export const values = [
  {
    title: 'Qualité',
    text: 'Un contrôle rigoureux à chaque étape, du bureau d’études à la remise au client.',
  },
  {
    title: 'Sécurité',
    text: 'La sécurité des équipes et des installations est notre priorité absolue sur tous nos chantiers.',
  },
  {
    title: 'Respect des délais',
    text: 'Un engagement fort sur les délais convenus, avec un pilotage précis de chaque mission.',
  },
  {
    title: 'Proximité',
    text: 'Une équipe basée en Côte d’Ivoire, mobilisable rapidement sur vos sites industriels et maritimes.',
  },
];

export const hseStatement = {
  eyebrow: 'HSE et qualité',
  title: 'La sécurité et la qualité au cœur de nos chantiers.',
  description:
    'Chez S.I.M sarl, la sécurité, la qualité et le respect de l’environnement sont intégrés dans chaque procédure. Nos personnels sont qualifiés et habilités, nos équipements de soudage certifiés, et nos méthodes documentées.',
  pillars: ['Sécurité', 'Qualité', 'Environnement', 'Ponctualité'],
};

export const manifestoBlock = {
  eyebrow: 'Notre approche',
  title: 'Soudure industrielle et maritime, avec exigence.',
  paragraphs: [
    'Basée à Abidjan, S.I.M sarl accompagne depuis plus d’une décennie les grands acteurs industriels et maritimes de Côte d’Ivoire — de l’eau potable au raffinage pétrolier, du port autonome à la marine nationale.',
    'De la tuyauterie à la construction navale, en passant par la chaudronnerie, l’usinage, les interventions onshore/offshore et la logistique, nous mettons à votre disposition un savoir-faire complet et une équipe qualifiée, mobilisable rapidement sur vos chantiers.',
  ],
};

export const visualBannerContent = {
  eyebrow: '',
  title: 'De la soudure au chantier offshore, une expertise complète.',
  cta: 'Découvrir nos services',
  ctaTo: '/services',
};

export const homeProjectsIntro = {
  eyebrow: 'Réalisations',
  title: 'Quelques réalisations récentes.',
  lead:
    'Un aperçu de nos chantiers en tuyauterie, chaudronnerie, naval et onshore/offshore.',
};

export const homeServicesIntro = {
  eyebrow: 'Nos services',
  title: 'Sept expertises complémentaires pour vos chantiers.',
  lead:
    'De la tuyauterie à la construction navale, S.I.M sarl couvre toute la chaîne des travaux industriels et maritimes.',
};

export const partnersIntro = {
  eyebrow: 'Partenaires',
  title: 'Ils nous font confiance.',
  lead:
    'Nous accompagnons de grands acteurs industriels, énergétiques et maritimes de Côte d’Ivoire.',
};
