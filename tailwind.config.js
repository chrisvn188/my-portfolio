/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        color: {
          1: '#1F2028',
        },
      },
      fontSize: {
        1000: [
          'clamp(2rem, 2rem + 2vw, 4rem)',
          { letterSpacing: '-0.01', lineHeight: '1.2' },
        ],
        900: [
          'clamp(1rem, 1rem + 0.5vw, 1.125rem)',
          { letterSpacing: '0', lineHeight: '1.6' },
        ],
      },
    },
  },
  plugins: [],
}
