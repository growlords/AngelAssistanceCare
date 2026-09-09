/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        autofill: 'transparent',
        brand: {
          // Light & Warm Healthcare Palette
          ivory: '#FBF9F5',
          'ivory-dark': '#F4F0E8',
          cream: '#FFF7F1',
          'cream-soft': '#FAF4EE',
          aqua: '#EEF7F7',
          'aqua-soft': '#F4FAFA',
          'sky-soft': '#F0F7FA',
          'sky-tint': '#E4F1F7',
          coral: '#E76F51',
          'coral-hover': '#D65A3C',
          'coral-light': '#FCE7DF',
          'coral-soft': '#FFF4EE',
          teal: '#2A9D8F',
          'teal-light': '#E5F5F3',
          navy: '#0F253E',
          'navy-light': '#1A3B5C',
          slate: '#334E68',
          'slate-light': '#486581',
          'slate-soft': '#627D98',
          surface: '#FFFFFF',
          border: '#E4EBF0',
          'border-warm': '#F0E6DD',
          'ocean-dark': '#0D2438',
        },
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(15, 37, 62, 0.05)',
        'elevated': '0 16px 36px -4px rgba(15, 37, 62, 0.08)',
        'glow-coral': '0 0 30px -4px rgba(231, 111, 81, 0.35)',
        'glow-teal': '0 0 30px -4px rgba(42, 157, 143, 0.3)',
        'glow-soft': '0 0 35px -5px rgba(56, 163, 216, 0.18)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('autofill', '&:-webkit-autofill');
    },
  ],
};
