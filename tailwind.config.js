/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // enable manual dark mode switching
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Roboto', 'sans-serif'],
      },
      colors: {
        // primary accent changed from hot pink to dark navy blue
        'neon-pink': '#0a192f',
        'neon-cyan': '#00ffff',
        'neon-green': '#39ff14',
        'neon-blue': '#1b03a3',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '0.99',
            transform: 'scale(1.02)',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.4',
            transform: 'scale(0.98)',
          },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 4px rgba(255,255,255,0.8), 0 0 10px rgba(255,110,199,0.6)' },
          '50%': { textShadow: '0 0 8px rgba(255,255,255,1), 0 0 20px rgba(255,110,199,0.8)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        flicker: 'flicker 3s infinite',
        glow: 'glow 2s infinite',
        slideIn: 'slideIn 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};
