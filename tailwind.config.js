/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'commonShopperHero': "url('/assets/Hero-Image.png')",
        'personalShopperHero': "url('/assets/PersonalShopper-Hero.png')",
        'storeChainHero': "url('/assets/StoreChain-Hero.png')",
        'caseStudyHero': "url('/assets/Case-Study-Hero-Image.png')",
        'aboutHero': "url('/assets/About-Hero-Image.png')",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      height: {
        'hamburgerBar': '0.188rem',
      },
      colors: {
        'orangePrimary': '#FF6C11',
        'bluePrimary': '#3F3D56',
        'blueSecondary': '#615F74',
        'blueTertiary': '#9F9EAB',
        'blueLight': '#F8F8FF',
        'blueAccent': '#7572A2',
        'blueBtnHover': '#605E8B',
        'blueGray': '#E0DEFB',
        'blueGrayLight': '#F9F8FF',
        'grayLight': '#C9C5C5',
      },
      screens: {
        'selectionCustom': '1078px',
        'footerCustom': '1165px',
        'xs': '25.3rem',
      },
      spacing: {
        'half': '50%',
      },
    },
  },
  plugins: [],
}

