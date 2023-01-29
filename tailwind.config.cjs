/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "Avenir", "Helvetica", "Arial", "sans-serif"],
        grotesk: ['Space Grotesk', "sans-serif"],
      },
      fontSize: {
        '5xl': ['3.052rem', '1'],
      },
      colors: {
        'indigo': {
          '50': '#f3f3ff',
          '100': '#e9e9fe',
          '200': '#d6d7fe',
          '300': '#b6b5fd',
          '400': '#918bfa',
          '500': '#5b47f5',
          '600': '#5333ed',
          '700': '#4a27da',
          '800': '#3e21b6',
          '900': '#341d95',
        },
      }
    },
  },
  plugins: [],
};
