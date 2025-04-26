export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#F5F5F7',
        mainTitleBlue: '#0381FF',
        subTitleBlue: '#0B122A',
        activeButtonBacground: 'rgba(3, 129, 255, 0.03)',
        buttonBorderColor: '#0381FF'
      },
      fontFamily: {
        'sf': ['"SF Pro Display"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};