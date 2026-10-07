import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Le site est servi à la racine du domaine personnalisé www.simsarl.com
// (GitHub Pages, voir public/CNAME). Si le site repasse sous
// https://coddformation-cell.github.io/sim-site/, remettre base: '/sim-site/'
// ici ET pathSegmentsToKeep = 1 dans public/404.html.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
