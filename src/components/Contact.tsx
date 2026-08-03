import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import logo from '../MDKby.png';
import { supabase } from '../lib/supabase';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ show: boolean; message: string; type: 'success' | 'error' }>({
    show: false,
    message: '',
    type: 'success',
  });

  // Auto-ocultar el toast después de 3 segundos
  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast((prev) => ({ ...prev, show: false }));
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  const showToastMessage = (message: string, type: 'success' | 'error') => {
    setToast({ show: true, message, type });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase
        .from('contacts')
        .insert([formData]);

      if (error) throw error;

      // Enviar correo con EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.nombre,
          email: formData.email,
          message: formData.mensaje,
          time: new Date().toLocaleString()
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setFormData({ nombre: '', email: '', mensaje: '' });
      showToastMessage('¡Mensaje enviado con éxito!', 'success');
    } catch (err) {
      console.error('Error saving contact', err);
      showToastMessage('Hubo un error al enviar el mensaje', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="bg-black py-24 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 animate-glow">
              Contáctanos
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              ¿Tienes alguna pregunta o quieres colaborar con nosotros? Envíanos un mensaje
              y te responderemos lo antes posible.
            </p>

            <div className="relative w-64 h-64 mx-auto md:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-pink to-neon-cyan rounded-lg blur-2xl opacity-50 animate-pulse animate-glow-box"></div>
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 flex items-center justify-center h-full shadow-2xl neon-glow hover-lift">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center bg-black transform hover:scale-110 transition-transform duration-300">
                    <img src={logo} alt="MDK Logo" className="w-full h-full object-contain" />
                  </div>
                  <p className="text-white font-semibold">MDK Team</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-xl p-8 border border-slate-700/50 animate-slide-in-right hover-glow">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
                <label htmlFor="nombre" className="block text-white mb-2 font-medium">
                  Nombre *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/50 transition-all duration-300"
                  placeholder="Tu nombre"
                />
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                <label htmlFor="email" className="block text-white mb-2 font-medium">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/50 transition-all duration-300"
                  placeholder="tu@email.com"
                />
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
                <label htmlFor="mensaje" className="block text-white mb-2 font-medium">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/50 transition-all duration-300 resize-none"
                  placeholder="Escribe tu mensaje aquí..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-neon-pink to-neon-cyan hover:from-neon-cyan hover:to-neon-pink text-white font-semibold py-3 rounded-lg transition-all duration-300 hover-lift neon-glow-strong flex items-center justify-center space-x-2 group disabled:opacity-50"
              >
                <span>{loading ? 'Enviando...' : 'Enviar Mensaje'}</span>
                <Send size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Animated Toast Notification */}
      <div
        className={`fixed bottom-8 right-8 z-50 flex items-center space-x-3 px-6 py-4 rounded-xl shadow-2xl transition-all duration-500 transform ${
          toast.show ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
        } ${
          toast.type === 'success'
            ? 'bg-slate-900 border border-neon-cyan shadow-[0_0_20px_rgba(6,182,212,0.3)]'
            : 'bg-slate-900 border border-neon-pink shadow-[0_0_20px_rgba(236,72,153,0.3)]'
        }`}
      >
        {toast.type === 'success' ? (
          <CheckCircle2 className="text-neon-cyan" size={24} />
        ) : (
          <AlertCircle className="text-neon-pink" size={24} />
        )}
        <p className="text-white font-medium">{toast.message}</p>
      </div>
    </section>
  );
}

export default React.memo(Contact);
