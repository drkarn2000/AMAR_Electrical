import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f8ff',
          100: '#dfeeff',
          200: '#c9e4ff',
          300: '#9bc9ff',
          400: '#64a7ff',
          500: '#3a85ff',
          600: '#1d5fe6',
          700: '#204bb0',
          800: '#203f8a',
          900: '#1f356d',
          950: '#131d40'
        },
        electric: '#f6c548',
        midnight: '#071a2f',
        slateglass: '#edf6ff'
      },
      boxShadow: {
        soft: '0 20px 45px rgba(14, 53, 98, 0.12)',
        glow: '0 16px 40px rgba(58, 133, 255, 0.25)',
        electric: '0 14px 34px rgba(246, 197, 72, 0.25)'
      },
      backgroundImage: {
        'hero-grid': 'radial-gradient(circle at 1px 1px, rgba(80, 150, 255, 0.18) 1px, transparent 0)'
      }
    }
  },
  plugins: []
};

export default config;
