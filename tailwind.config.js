/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'bg-brand-blue/5', 'bg-brand-blue/10', 'bg-brand-blue/20', 'bg-brand-blue/30',
    'bg-brand-blue/40', 'bg-brand-blue/50', 'bg-brand-blue/60', 'bg-brand-blue/70',
    'bg-brand-blue/80', 'bg-brand-blue/90', 'bg-brand-blue/100',
    'text-brand-blue/5', 'text-brand-blue/10', 'text-brand-blue/20', 'text-brand-blue/30',
    'text-brand-blue/40', 'text-brand-blue/50', 'text-brand-blue/60', 'text-brand-blue/70',
    'text-brand-blue/80', 'text-brand-blue/90', 'text-brand-blue/100',
    'bg-brand-gold/5', 'bg-brand-gold/10', 'bg-brand-gold/20', 'bg-brand-gold/30',
    'bg-brand-gold/40', 'bg-brand-gold/50', 'bg-brand-gold/60', 'bg-brand-gold/70',
    'bg-brand-gold/80', 'bg-brand-gold/90', 'bg-brand-gold/100',
    'text-brand-gold/5', 'text-brand-gold/10', 'text-brand-gold/20', 'text-brand-gold/30',
    'text-brand-gold/40', 'text-brand-gold/50', 'text-brand-gold/60', 'text-brand-gold/70',
    'text-brand-gold/80', 'text-brand-gold/90', 'text-brand-gold/100',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0A',
        surface: '#141414',
        line: '#2A2A2A',
        text: '#F7F7F7',
        muted: '#A3A3A3',
        'brand-blue': {
          DEFAULT: '#1E3A8A',
          light: '#3B82F6',
          dark: '#1E3A8A',
        },
        'brand-gold': {
          DEFAULT: '#C5A059',
          soft: '#DFC28B',
          dark: '#A3813E',
        },
        ivory: '#FBFAF8',
        charcoal: '#2A2724',
      },
      fontFamily: {
        display: ['"Cinzel"', 'serif'],
        body: ['"Merriweather"', 'serif'],
      },
    },
  },
  plugins: [],
}
