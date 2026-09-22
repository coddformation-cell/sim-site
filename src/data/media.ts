// Photos issues du catalogue officiel S.I.M. sarl (dossier public/catalogue/).
// Chaque URL est un chemin local — les fichiers sont livrés avec le repo.

const CAT = (n: number) => `/catalogue/${n}.jpeg`;

export const media = {
  // Covers et branding
  cover: CAT(1),
  logo: CAT(12),
  back: CAT(11),
  partnersBoard: CAT(10),

  // Services (chaque service pointe vers sa fiche du catalogue)
  services: {
    tuyauterie: CAT(2),
    chaudronnerie: CAT(3),
    usinage: CAT(4),
    onshoreOffshore: CAT(5),
    naval: CAT(6),
    logistique: CAT(7),
    echangeurAero: CAT(1),
  },

  // Équipe et opérations
  team: CAT(9),
  engineer: CAT(8),

  // Hero et bannières visuelles
  hero: CAT(5),
  visualBanner: CAT(6),
  manifesto: CAT(8),
  hse: CAT(9),
  about: CAT(9),

  // Page heroes
  pageHeroes: {
    services: CAT(2),
    realisations: CAT(6),
    apropos: CAT(9),
    partenaires: CAT(10),
  },
};

export type MediaKey = keyof typeof media;
