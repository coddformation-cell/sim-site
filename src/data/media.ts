// Photos issues du catalogue officiel S.I.M sarl (dossier public/catalogue/).
// Les photos les plus « clean » (sans texte catalogue) sont 8.jpeg et 9.jpeg.

const CAT = (n: number) => `/catalogue/${n}.jpeg`;

export const media = {
  // Branding
  logo: '/logo-sim.jpg',

  // Photos "clean" (sans watermark texte du catalogue) - à privilégier
  engineer: CAT(8), // ingénieur SIM en tenue bleue + soudeur
  team: CAT(9), // équipe complète + soudeur en action

  // Hero home : photo équipe = plus authentique et sans texte overlay
  hero: CAT(9),

  // Visual banner : soudeur en action
  visualBanner: CAT(8),

  // Manifesto : ingénieur en action
  manifesto: CAT(8),

  // HSE + About : équipe complète
  hse: CAT(9),
  about: CAT(9),

  // Services : chaque service pointe vers sa fiche du catalogue
  // (les fiches 2-7 contiennent 4 photos + du texte de titre)
  services: {
    tuyauterie: CAT(2),
    chaudronnerie: CAT(3),
    usinage: CAT(4),
    onshoreOffshore: CAT(5),
    naval: CAT(6),
    logistique: CAT(7),
    echangeurAero: CAT(9),
  },

  // Réalisations = photos catalogue (avec le texte du service correspondant)
  // Alternative propre : réutiliser les photos clean 8/9
  projects: {
    naval: CAT(6),
    tuyauterie: CAT(2),
    chaudronnerie: CAT(3),
    onshoreOffshore: CAT(5),
    usinage: CAT(4),
    logistique: CAT(7),
  },

  partnersBoard: CAT(10),

  // Page heroes : utiliser les photos propres
  pageHeroes: {
    services: CAT(8),
    realisations: CAT(9),
    apropos: CAT(9),
    partenaires: CAT(8),
  },
};

export type MediaKey = keyof typeof media;
