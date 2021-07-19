module.exports = {
  mode: 'jit',
  purge: ['./styles/**/*', './components/**/*', './pages/**/*'],
  theme: {
    extend: {
      fontFamily: {
        sans:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',
        mono:
          'ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace'
      }
    }
  },
  variants: {},
  plugins: []
}
