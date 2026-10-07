import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import seo from '../data/seo.json';

type Meta = { title: string; description: string };
const pages = seo.pages as Record<string, Meta>;

// Met à jour le titre et la description quand on change de page sans recharger.
export default function useRouteMeta() {
  const { pathname } = useLocation();
  useEffect(() => {
    const key = pathname.length > 1 ? pathname.replace(/\/+$/, '') : '/';
    const meta = pages[key] ?? pages['/'];
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description);
  }, [pathname]);
}
