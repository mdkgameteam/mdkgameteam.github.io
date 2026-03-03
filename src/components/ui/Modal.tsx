import React from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 max-w-3xl w-full overflow-auto max-h-[90vh] shadow-2xl border border-slate-700/50 animate-bounce-in neon-glow scrollbar-thin scrollbar-thumb-neon-pink scrollbar-track-slate-900 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-neon-cyan hover:scale-125 transition-all duration-300 hover-glow p-2 rounded-lg"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>
        <div className="animate-slide-up">
          {children}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Modal);
