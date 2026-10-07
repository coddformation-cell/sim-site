// Exécuté après `vite build` : génère une vraie page HTML par route (avec son
// titre, sa description et son URL canonique), le plan du site et vérifie le
// résultat. Sans ça, GitHub Pages répond « 404 » aux pages internes et Google
// ne les indexe pas.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const dist = path.join(root, 'dist');
const seo = JSON.parse(fs.readFileSync(path.join(root, 'src/data/seo.json'), 'utf8'));
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');

const escape = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const swap = (html, pattern, replacement, label) => {
  if (!pattern.test(html)) throw new Error(`prerender: balise introuvable dans index.html (${label})`);
  return html.replace(pattern, () => replacement);
};

const urlFor = (route) => seo.origin + (route === '/' ? '/' : route + '/');

// Données structurées « WebSite » : uniquement sur l'accueil, pour que Google affiche
// « S.I.M sarl » comme nom du site (et non « simsarl.com »).
const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': seo.origin + '/#website',
  url: seo.origin + '/',
  name: seo.siteName,
  alternateName: ['SIM sarl', 'SIM SARL', 'Soudure Industrielle et Maritime', 'simsarl.com'],
  inLanguage: 'fr',
  publisher: { '@id': seo.origin + '/#organisation' },
};

const render = (route, meta) => {
  const url = urlFor(route);
  const title = escape(meta.title);
  const description = escape(meta.description);
  let html = template;
  html = swap(html, /<title>[\s\S]*?<\/title>/, `<title>${title}</title>`, 'title');
  html = swap(html, /<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${description}" />`, 'description');
  html = swap(html, /<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${url}" />`, 'canonical');
  html = swap(html, /<meta property="og:title" content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${title}" />`, 'og:title');
  html = swap(html, /<meta property="og:description" content="[^"]*"\s*\/?>/, `<meta property="og:description" content="${description}" />`, 'og:description');
  html = swap(html, /<meta property="og:url" content="[^"]*"\s*\/?>/, `<meta property="og:url" content="${url}" />`, 'og:url');
  if (route === '/') {
    const tag = `    <script type="application/ld+json">${JSON.stringify(websiteJsonLd)}</script>\n  </head>`;
    html = swap(html, /\s*<\/head>/, `\n${tag}`, 'head');
  }
  return html;
};

const routes = Object.keys(seo.pages);
for (const route of routes) {
  const html = render(route, seo.pages[route]);
  const file = route === '/' ? path.join(dist, 'index.html') : path.join(dist, route, 'index.html');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
}

const today = new Date().toISOString().slice(0, 10);
const sitemap =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  routes
    .map((r) => `  <url>\n    <loc>${urlFor(r)}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`)
    .join('\n') +
  '\n</urlset>\n';
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap);

// Vérifications : chaque page existe, a un titre unique et son canonical.
const titles = new Set();
for (const route of routes) {
  const file = route === '/' ? path.join(dist, 'index.html') : path.join(dist, route, 'index.html');
  const html = fs.readFileSync(file, 'utf8');
  const title = (html.match(/<title>([\s\S]*?)<\/title>/) || [])[1];
  if (!title) throw new Error(`prerender: pas de titre pour ${route}`);
  if (titles.has(title)) throw new Error(`prerender: titre en double (${route})`);
  titles.add(title);
  if (!html.includes(`<link rel="canonical" href="${urlFor(route)}" />`)) throw new Error(`prerender: canonical absent (${route})`);
}
console.log(`prerender: ${routes.length} pages générées + sitemap.xml`);
