import React from 'react';
import Navbar from '../components/Navbar';
import Launcher from '../components/Launcher';
import Footer from '../components/Footer';

interface LauncherPageProps {
  onOpenModal: (name: 'about' | 'terms' | 'security') => void;
}

function LauncherPage({ onOpenModal }: LauncherPageProps) {
  return (
    <>
      <Navbar onOpenModal={onOpenModal} />
      <div className="min-h-screen bg-black transition-colors duration-500">
        <Launcher onOpenModal={onOpenModal} />
        <Footer onOpenModal={onOpenModal} />
      </div>
    </>
  );
}

export default React.memo(LauncherPage);
