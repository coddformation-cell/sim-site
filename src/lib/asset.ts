// Préfixe un chemin public (ex: '/images/foo.jpg') avec le base path Vite
// (défini dans vite.config.ts — '/sim-site/' tant que servi sur GitHub
// Pages sans domaine personnalisé, '/' sur www.simsarl.com).
export function withBase(path: string): string {
  return import.meta.env.BASE_URL.replace(/\/$/, '') + path;
}
