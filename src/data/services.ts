import { media } from './media';

export type SIMService = {
  id: string;
  slug: string;
  index: string;
  title: string;
  short: string;
  description: string;
  competences: string[];
  moyens: string[];
  image: string;
  gallery?: string[];
};

// Contenu issu du catalogue officiel S.I.M. sarl.
export const services: SIMService[] = [
  {
    id: 'tuyauterie',
    slug: 'tuyauterie',
    index: '01',
    title: 'Tuyauterie',
    short: 'Fabrication, installation et maintenance des systèmes de tuyauterie industriels.',
    description:
      'Nos équipes tuyauterie interviennent sur l’ensemble des chantiers industriels : conception, préfabrication en atelier, installation sur site et maintenance des lignes. Nous mettons en œuvre des procédés de soudage (arc, TIG) conformes aux exigences du secteur.',
    competences: [
      'Travaux de chanfreinages',
      'Travaux de découpages',
      'Travaux d’alignements',
      'Travaux de soudages',
    ],
    moyens: [
      'Tuyauteurs qualifiés',
      'Soudeurs qualifiés',
      'Groupe électrogène',
      'Équipements de soudages (poste à souder : arc, tig)',
    ],
    image: media.services.tuyauterie,
    gallery: [media.services.tuyauterie, media.engineer, media.team],
  },
  {
    id: 'chaudronnerie',
    slug: 'chaudronnerie',
    index: '02',
    title: 'Chaudronnerie',
    short: 'Conception et réparation d’ouvrages métalliques complexes.',
    description:
      'Notre pôle chaudronnerie couvre la conception, la fabrication et la réparation d’appareils sous pression et d’ouvrages métalliques complexes. Nous prenons en charge des projets allant de la charpente aux réservoirs sur mesure.',
    competences: [
      'Appareils sous pression : chaudières, ballons',
      'Construction métallique : charpente, silos, tank de stockage',
      'Cuves, trémies, châteaux d’eau',
      'Confection de réservoirs',
    ],
    moyens: [
      'Personnels qualifiés',
      'Bureau d’études',
      'Atelier de fabrication',
      'Cisaille · Plieuse · Rouleuse · Poinçonneuse',
      'Rouleuse de profilés',
      'Soudage à l’électrode',
    ],
    image: media.services.chaudronnerie,
    gallery: [media.services.chaudronnerie, media.team, media.engineer],
  },
  {
    id: 'usinage',
    slug: 'usinage',
    index: '03',
    title: 'Usinage',
    short: 'Fabrication et ajustement de pièces mécaniques de précision.',
    description:
      'Notre atelier d’usinage réalise des pièces mécaniques sur plans ou d’après échantillon, de la petite à la grosse pièce, ainsi que le taillage d’engrenages. Nous mobilisons un parc machines complet pour vos travaux de précision.',
    competences: [
      'Travaux sur plans',
      'Études et réalisations',
      'Usinage en petite, moyenne et grosse pièces',
      'Taillage d’engrenage',
    ],
    moyens: [
      'Personnels techniques qualifiés',
      'Appareil de découpe au plasma',
      'Scie à ruban',
      'Fraiseuse',
      'Tour parallèle et verticale',
      'Perceuse radiale · Aléseuse · Mortaiseuse',
    ],
    image: media.services.usinage,
    gallery: [media.services.usinage, media.engineer, media.team],
  },
  {
    id: 'onshore-offshore',
    slug: 'onshore-offshore',
    index: '04',
    title: 'Onshore & Offshore',
    short: 'Interventions sur terre et en mer pour l’industrie pétrolière et gazière.',
    description:
      'Nos équipes onshore et offshore mobilisent tuyauteurs, soudeurs et mécaniciens qualifiés pour des interventions sur site : montage, démontage, épreuves et travaux mécaniques. Le personnel est habilité pour les environnements réglementés.',
    competences: [
      'Travaux de tuyauteries',
      'Travaux de chaudronneries',
      'Travaux mécaniques',
      'Travaux de montages / démontages',
      'Travaux d’épreuves',
    ],
    moyens: [
      'Personnels techniques qualifiés et habilités',
      'Tuyauteurs qualifiés',
      'Soudeurs qualifiés',
      'Groupe électrogène',
      'Équipements de soudages certifiés (poste à souder : arc, tig)',
    ],
    image: media.services.onshoreOffshore,
    gallery: [media.services.onshoreOffshore, media.engineer, media.team],
  },
  {
    id: 'naval',
    slug: 'naval',
    index: '05',
    title: 'Construction & Réparation NAVAL',
    short: 'Mécanique et maintenance naval, sablage, peinture.',
    description:
      'Notre pôle naval prend en charge la réparation et la maintenance des bateaux : mécanique, entretien de coque, instrumentation, sablage et peinture. Nos chantiers combinent expertise soudure et savoir-faire maritime.',
    competences: [
      'Mécanique navale (réparation et alignement moteur)',
      'Maintenance navale (entretien coque, moteur, instrumentation)',
      'Sablage et peinture',
    ],
    moyens: [
      'Personnels qualifiés',
      'Postes de soudage (TIG, MIG)',
      'Compresseur d’air',
      'Groupe électrogène',
      'Camion à bras auxiliaire',
      'Pompe à haute pression',
    ],
    image: media.services.naval,
    gallery: [media.services.naval, media.engineer, media.team],
  },
  {
    id: 'logistique',
    slug: 'logistique',
    index: '06',
    title: 'Logistique',
    short: 'Solutions de location d’équipements et de gestion des équipements lourds.',
    description:
      'Notre pôle logistique met à disposition des équipements de levage, de soudage et de production pour vos chantiers en location courte ou longue durée : grues, camions, chariots, groupes électrogènes, bateaux, pompes et outillage de découpe.',
    competences: [
      'Location de grues',
      'Location de camions à bras auxiliaires',
      'Location de postes autonomes',
      'Location d’équipements de soudage (TIG, MIG, MMA…)',
      'Location d’équipements de découpe (meule, cisaille, plasma)',
      'Location de chariot élévateur et télescopique',
      'Location de pompes (à épreuve, thermique)',
      'Location de déblonneuse pneumatique',
      'Location de groupe électrogène',
      'Location de bateau d’avitaillement et de plaisance',
    ],
    moyens: [
      'Parc de matériels dédié',
      'Chauffeurs et opérateurs',
      'Maintenance interne',
      'Disponibilité 24/7 sur préavis',
    ],
    image: media.services.logistique,
    gallery: [media.services.logistique, media.team, media.engineer],
  },
  {
    id: 'echangeur-aero',
    slug: 'echangeur-aero',
    index: '07',
    title: 'Échangeur & Aéro',
    short: 'Réparation et maintenance des échangeurs de chaleur industriels.',
    description:
      'Notre équipe spécialisée intervient sur les échangeurs de chaleur et aéroréfrigérants des installations industrielles : diagnostic, nettoyage, réparation des faisceaux, remise en service.',
    competences: [
      'Inspection et diagnostic d’échangeurs',
      'Réparation des faisceaux et calandres',
      'Nettoyage haute pression',
      'Remontage et essais d’étanchéité',
    ],
    moyens: [
      'Personnels qualifiés',
      'Outillage spécialisé',
      'Pompes haute pression',
      'Équipements de contrôle et essais',
    ],
    image: media.services.echangeurAero,
    gallery: [media.services.echangeurAero, media.engineer, media.team],
  },
];
