// Assets images. Dossier public/ (chemins servis à la racine du site).
// - logo-sim.jpg  = logo officiel S.I.M sarl
// - catalogue/8.jpeg = photos ingénieur + soudeur (SANS texte catalogue)
// - catalogue/9.jpeg = photos équipe complète + soudeur (SANS texte catalogue)
// - images/welding-workshop.jpg = photo d'illustration (soudure industrielle,
//   format paysage 16:9) utilisée pour la bannière visuelle. Photo de stock
//   libre de droits (Unsplash), à but d'ambiance — pas un chantier S.I.M réel.
//
// Les pages du catalogue (1-7, 10) contiennent du texte imprimé
// ("AVANT", "APRÈS", "DOMAINES DE COMPÉTENCES"...) et NE doivent PAS être
// utilisées comme visuels de fond. Elles restent disponibles pour usage
// éditorial ponctuel uniquement.
//
// Les photos 8 et 9 du catalogue sont en format PORTRAIT (748x1080 /
// 810x1080) — à réserver aux emplacements verticaux ou carrés. Ne pas les
// utiliser dans un bandeau large (object-fit:cover écraserait le sujet).

export const media = {
  logo: '/logo-sim.jpg',
  team: '/catalogue/9.jpeg',
  engineer: '/catalogue/8.jpeg',
  weldingWorkshop: '/images/welding-workshop.jpg',
  // Photo hero : étincelles de soudure, grande zone sombre à gauche
  // idéale pour la lisibilité du texte (2400x1350, 16:9).
  heroWelding: '/images/hero-welding-sparks.jpg',
};
