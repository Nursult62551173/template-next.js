module.exports = {
  mode: 'jit',
  purge: ['./styles/**/*', './components/**/*', './pages/**/*'],
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
}
