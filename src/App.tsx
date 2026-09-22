import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './pages/Home';
import APropos from './pages/APropos';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Projets from './pages/Projets';
import Actualites from './pages/Actualites';
import RejoignezNous from './pages/RejoignezNous';
import Contact from './pages/Contact';
import './App.css';

const REVEAL_SELECTOR =
  '[data-reveal], .section-head, .home-service-card, .services-alt-row, .value-card, .service-cover, .empty-state';

function RouteScrollReset() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
}

function useReveal(pathname: string) {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    const id = window.setTimeout(() => {
      document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => obs.observe(el));
    }, 50);
    return () => {
      window.clearTimeout(id);
      obs.disconnect();
    };
  }, [pathname]);
}

function AppShell() {
  const { pathname } = useLocation();
  useReveal(pathname);

  return (
    <>
      <RouteScrollReset />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/realisations" element={<Projets />} />
          <Route path="/actualites" element={<Actualites />} />
          <Route path="/rejoignez-nous" element={<RejoignezNous />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}

export default App;
