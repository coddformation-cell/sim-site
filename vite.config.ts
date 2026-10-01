import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Tant que le site est servi sur https://coddformation-cell.github.io/sim-site/
// (en attendant le domaine www.sim.ci), les assets doivent pointer vers ce
// sous-dossier. À repasser à '/' le jour où le domaine personnalisé est actif
// (voir public/CNAME + public/404.html, à resynchroniser en même temps).
export default defineConfig({
  base: '/sim-site/',
  plugins: [react()],
})
