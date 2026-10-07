// Assets images. Dossier public/ (chemins servis à la racine du site).
// - logo-sim.jpg  = logo officiel S.I.M sarl
// - catalogue/8.jpeg = photos ingénieur + soudeur (SANS texte catalogue)
// - catalogue/9.jpeg = photos équipe complète + soudeur (SANS texte catalogue)
// - images/chantiers/* = vraies photos de chantiers S.I.M (voir data/gallery.ts)
// - Plus aucune photo d'illustration (stock) : le client veut uniquement des
//   photos réelles de l'entreprise (ou son logo). La couverture Usinage utilise
//   une photo de chantier S.I.M faute de photo d'usinage dédiée.
//
// Les pages du catalogue (1-7, 10) contiennent du texte imprimé
// ("AVANT", "APRÈS", "DOMAINES DE COMPÉTENCES"...) et NE doivent PAS être
// utilisées comme visuels de fond. Elles restent disponibles pour usage
// éditorial ponctuel uniquement.
//
// Les photos 8 et 9 du catalogue sont en format PORTRAIT (748x1080 /
// 810x1080) — à réserver aux emplacements verticaux ou carrés. Ne pas les
// utiliser dans un bandeau large (object-fit:cover écraserait le sujet).

import { withBase } from '../lib/asset';

export const media = {
  logo: withBase('/logo-sim.jpg'),
  team: withBase('/catalogue/9.jpeg'),
  engineer: withBase('/catalogue/8.jpeg'),
  weldingWorkshop: withBase('/images/chantiers/offshore-grue-mer.jpg'),
  // Bandeaux : vraies photos de chantier (page À propos / bandeau d'accueil).
  teamIndustrial: withBase('/images/chantiers/cuve-grande-equipe.jpg'),
};
