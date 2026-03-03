import { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Navbar = lazy(() => import('./components/Navbar'));
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const AboutLong = lazy(() => import('./components/AboutLong'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const Terms = lazy(() => import('./components/Terms'));
const Security = lazy(() => import('./components/security'));
const Modal = lazy(() => import('./components/ui/Modal')); // modal overlay
const AdminPage = lazy(() => import('./pages/AdminPage'));

// Pages
const LauncherPage = lazy(() => import('./pages/LauncherPage'));

function HomePage({ openModal }: { openModal: (name: 'about' | 'terms' | 'security') => void }) {
  return (
    <>
      <Navbar onOpenModal={openModal} />
      <Hero />

      <About onShowMore={() => openModal('about')} />
      <Projects />
      <Contact />
      <Footer onOpenModal={openModal} />
    </>
  );
}

function App() {
  // force dark mode only
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const [openModal, setOpenModal] = useState<'about' | 'terms' | 'security' | null>(null);
  const open = (name: 'about' | 'terms' | 'security') => setOpenModal(name);
  const close = () => setOpenModal(null);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black transition-colors duration-500">
        <Suspense fallback={<div className="text-center py-20 text-white">Cargando...</div>}>
          <Routes>
            <Route path="/" element={<HomePage openModal={open} />} />
            <Route path="/launcher" element={<LauncherPage onOpenModal={open} />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>

          {openModal && (
            <Modal open={Boolean(openModal)} onClose={close}>
              {openModal === 'about' && <AboutLong />}
              {openModal === 'terms' && <Terms />}
              {openModal === 'security' && <Security />}
            </Modal>
          )}
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
