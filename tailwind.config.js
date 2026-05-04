/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#18181B',      // Zinc 900
          charcoal: '#27272A',  // Zinc 800
          granite: '#3F3F46',   // Zinc 700
        },
        mopane: {
          DEFAULT: '#C05A33',   
          light: '#E27B55',
          dark: '#9A4524',
        },
        stone: {
          300: '#D4D4D8',       // Legible light grey for body text
          400: '#A1A1AA',       // Muted text
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'], 
      },
      backgroundImage: {
        'node-gradient': 'linear-gradient(135deg, #D92685 0%, #7028E4 100%)',
      }
    },
  },
  plugins: [],
}