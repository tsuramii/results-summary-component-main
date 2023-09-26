/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        hanken: ['HankenGrotesk', 'sans'],
      },
      colors: {
        'lightred': '#ff5757',
        'orangeyyellow': '#ffb01f',
        'greenteal': '#00bd91',
        'cobaltblue': '#1125d4',
        'lighslateblue': '#7857ff',
        'lightroyalblue': '#2e2be9',
        'violetblue': '#4e21ca',
        'persianblue': '#2421ca',
        'white': '#ffffff',
        'paleblue': '#ebf1ff',
        'lightlavender': '#c8c7ff',
        'darkgrayblue': '#303b5a'
      },
    },
  },
  plugins: [],
}