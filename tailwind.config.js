/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',

    },
    extend: {
      colors: {
        primary: '#0EA5E9',
        secondary: '#64748B',
        dark: '#0F172A'
      },
      screen: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}
