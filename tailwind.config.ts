import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#a68b47',
        ink: '#111111',
        charcoal: '#1c1c1c',
        gunmetal: '#2d2d2d',
        frost: '#9e9e9e',
        alabaster: '#e8e8e8'
      },
      boxShadow: {
        glow: '0 20px 80px rgba(0,0,0,0.35)',
      },
      fontFamily: {
        serif: ['Cinzel', 'serif'],
        sans: ['Montserrat', 'sans-serif']
      },
    },
  },
  plugins: [],
};

export default config;
