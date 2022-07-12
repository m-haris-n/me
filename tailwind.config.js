module.exports = {
  mode:'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'heading': "'Ubuntu', sans-serif"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
