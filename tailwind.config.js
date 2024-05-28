/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        color: {
          1: '#181818',
          2: '#262243',
        },
      },
      fontSize: {
        'clamp-xl': [
          'clamp(1.8rem, 1.8rem + 2vw, 4rem)',
          { letterSpacing: '-0.01', lineHeight: '1.2' },
        ],
        'clamp-lg': [
          'clamp(1.3rem, 1.2rem + 1vw, 2.5rem)',
          { letterSpacing: '-0.01', lineHeight: '1.2' },
        ],
        'clamp-hero': [
          'clamp(1rem, 1rem + 0.5vw, 1.25rem)',
          { letterSpacing: '0', lineHeight: '1.6' },
        ],
        'clamp-base': [
          'clamp(1rem, 0.8rem + 0.5vw, 1.1rem)',
          { letterSpacing: '0', lineHeight: '1.6' },
        ],
      },
    },
  },
  plugins: [],
}
