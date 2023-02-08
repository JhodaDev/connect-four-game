/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        black: '#000',
        'dark-purple': '#5C2DD5',
        purple: '#7945FF',
        pink: '#FD6687',
        yellow: '#FFCE67',
        white: '#FFF'
      },
      fontSize: {
        l: '3.5rem',
        m: '1.938rem',
        s: '1.25rem',
        xs: '1rem'
      },
      boxShadow: {
        black: '0px 10px 0px #000000'
      },
      maxWidth: {
        xxs: '21.875rem'
      },
      maxHeight: {
        xl: 'calc(100vh + 9rem)'
      }
    }
  },
  plugins: []
}
