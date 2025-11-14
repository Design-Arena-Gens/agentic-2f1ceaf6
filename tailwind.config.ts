import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B7A75', // emerald teal
        secondary: '#0F172A', // slate-900
        accent: '#7C3AED', // violet-600
      },
      backgroundImage: {
        'grid': 'linear-gradient(to right, rgba(124,58,237,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(124,58,237,0.08) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '24px 24px',
      },
    },
  },
  plugins: [],
} satisfies Config;
