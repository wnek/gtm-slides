module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        'spt-yellow': '#FFBC00',
      },
      fontFamily: {
        'roboto-serif': ['"Roboto Serif"', 'serif'],
      },
    },
  },
}