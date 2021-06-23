module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-hero-patterns'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-hero-patterns'),
  ],
};
