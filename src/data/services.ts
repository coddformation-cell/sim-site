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
};

// Contenu 100% issu du catalogue officiel S.I.M sarl.
// Ordre : 01 Tuyauterie · 02 Chaudronnerie · 03 Usinage · 04 Onshore/Offshore
//       · 05 Naval · 06 Échangeur & Aéro · 07 Logistique
export const services: SIMService[] = [
  {
    id: 'tuyauterie',
    image: '/images/services/tuyauterie.jpg',
    slug: 'tuyauterie',
    index: '01',
    title: 'Tuyauterie',
    short: 'Fabrication, installation et maintenance des systèmes de tuyauterie industriels.',
    description:
      'Nos équipes tuyauterie interviennent sur l’ensemble des chantiers industriels : préfabrication en atelier, installation sur site et maintenance des lignes. Nous mettons en œuvre des procédés de soudage arc et TIG conformes aux exigences du secteur.',
    competences: [
      'Travaux de chanfreinage',
      'Travaux de découpage',
      'Travaux d’alignement',
      'Travaux de soudage',
    ],
    moyens: [
      'Tuyauteurs qualifiés',
      'Soudeurs qualifiés',
      'Groupe électrogène',
      'Équipements de soudage ARC / TIG',
    ],
  },
  {
    id: 'chaudronnerie',
    image: '/images/services/chaudronnerie.jpg',
    slug: 'chaudronnerie',
    index: '02',
    title: 'Chaudronnerie',
    short: 'Conception et réparation d’ouvrages métalliques complexes.',
    description:
      'Notre pôle chaudronnerie couvre la conception, la fabrication et la réparation d’appareils sous pression et d’ouvrages métalliques complexes : charpentes, silos, tanks, cuves, trémies, châteaux d’eau et réservoirs sur mesure.',
    competences: [
      'Appareils sous pression',
      'Chaudières',
      'Ballons',
      'Construction métallique',
      'Charpentes',
      'Silos',
      'Tanks de stockage',
      'Cuves',
      'Trémies',
      'Châteaux d’eau',
      'Confection de réservoirs',
    ],
    moyens: [
      'Personnel qualifié',
      'Bureau d’études',
      'Atelier de fabrication',
      'Cisaille',
      'Plieuse',
      'Rouleuse',
      'Poinçonneuse',
      'Rouleuse de profilés',
      'Soudage à l’électrode',
    ],
  },
  {
    id: 'usinage',
    image: '/images/services/usinage.jpg',
    slug: 'usinage',
    index: '03',
    title: 'Usinage',
    short: 'Fabrication et ajustement de pièces mécaniques de précision.',
    description:
      'Notre atelier d’usinage réalise des pièces mécaniques sur plans ou d’après échantillon, de la petite à la grosse pièce, ainsi que le taillage d’engrenages. Un parc machines complet pour vos travaux de précision.',
    competences: [
      'Travaux sur plans',
      'Études et réalisations',
      'Usinage de petites, moyennes et grosses pièces',
      'Taillage d’engrenages',
    ],
    moyens: [
      'Personnel technique qualifié',
      'Appareil de découpe au plasma',
      'Scie à ruban',
      'Fraiseuse',
      'Tour parallèle et verticale',
      'Perceuse radiale',
      'Aléseuse',
      'Mortaiseuse',
    ],
  },
  {
    id: 'onshore-offshore',
    image: '/images/services/onshore-offshore.jpg',
    slug: 'onshore-offshore',
    index: '04',
    title: 'Onshore / Offshore',
    short: 'Interventions sur terre et en mer pour l’industrie pétrolière et gazière.',
    description:
      'Nos équipes onshore et offshore mobilisent tuyauteurs, soudeurs et mécaniciens qualifiés et habilités pour des interventions sur site : montage, démontage, épreuves et travaux mécaniques.',
    competences: [
      'Travaux de tuyauterie',
      'Travaux de chaudronnerie',
      'Travaux mécaniques',
      'Travaux de montage / démontage',
      'Travaux d’épreuves',
    ],
    moyens: [
      'Personnel technique qualifié et habilité',
      'Tuyauteurs qualifiés',
      'Soudeurs qualifiés',
      'Groupe électrogène',
      'Équipements de soudage certifiés',
    ],
  },
  {
    id: 'naval',
    image: '/images/services/naval.jpg',
    slug: 'naval',
    index: '05',
    title: 'Construction & Réparation Navale',
    short: 'Mécanique, maintenance navale, sablage et peinture.',
    description:
      'Notre pôle naval prend en charge la réparation et la maintenance des bateaux : mécanique et alignement moteur, entretien de coque, instrumentation, sablage et peinture. Nos chantiers combinent expertise soudure et savoir-faire maritime.',
    competences: [
      'Mécanique navale',
      'Réparation et alignement moteur',
      'Maintenance navale',
      'Entretien de coque',
      'Entretien moteur',
      'Instrumentation',
      'Sablage',
      'Peinture',
    ],
    moyens: [
      'Personnel qualifié',
      'Poste de soudage TIG / MIG',
      'Compresseur d’air',
      'Groupe électrogène',
      'Camion à bras auxiliaire',
      'Pompe haute pression',
    ],
  },
  {
    id: 'echangeur-aero',
    image: '/images/services/echangeur-aero.jpg',
    slug: 'echangeur-aero',
    index: '06',
    title: 'Échangeur & Aéro',
    short: 'Réparation et maintenance des échangeurs de chaleur industriels.',
    description:
      'Notre équipe spécialisée intervient sur les échangeurs de chaleur et aéroréfrigérants des installations industrielles : diagnostic, nettoyage, réparation des faisceaux et calandres, remise en service.',
    competences: [
      'Inspection et diagnostic d’échangeurs',
      'Nettoyage des faisceaux et calandres',
      'Réparation des tubes et bouchonnage',
      'Remontage et essais d’étanchéité',
      'Maintenance des aéroréfrigérants',
    ],
    moyens: [
      'Personnel qualifié',
      'Outillage spécialisé',
      'Pompes haute pression',
      'Équipements de contrôle et essais',
    ],
  },
  {
    id: 'logistique',
    image: '/images/services/logistique.jpg',
    slug: 'logistique',
    index: '07',
    title: 'Logistique',
    short: 'Location d’équipements de levage, de soudage, de découpe et matériels de chantier.',
    description:
      'Notre pôle logistique met à disposition des équipements de levage, de soudage, de découpe et de production pour vos chantiers en location courte ou longue durée. Grues, camions, chariots, groupes électrogènes, bateaux, pompes et outillage.',
    competences: [
      'Location de grues',
      'Location de camion à bras auxiliaire',
      'Location de postes autonomes',
      'Location d’équipements de soudage TIG / MIG / MMA',
      'Location d’équipements de découpe',
      'Location de chariot élévateur',
      'Location de chariot télescopique',
      'Location de pompe à épreuve',
      'Location de déboulonneuse pneumatique',
      'Location de groupe électrogène',
      'Location de bateau d’avitaillement',
      'Location de bateau de plaisance',
      'Location de pompe thermique',
    ],
    moyens: [
      'Parc de matériels dédié',
      'Chauffeurs et opérateurs',
      'Maintenance interne',
      'Disponibilité sur préavis',
    ],
  },
];
