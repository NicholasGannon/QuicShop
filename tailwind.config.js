/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        DMSans: ["DM Sans", "sans-serif"],
      },

      screens: {
        'xs': '450px',
      },

      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      },

      keyframes: {
        'open-menu': {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(0%)',
          }
        },
      },

      colors: {
        orangePrimary: "#FF6C11",
        orangeSecondary: "#EC5A00",
        bluePrimary: "#3F3D56",
        blueSecondary: "#C0BDE3",
        blueLight: "#EFF1FF",
        grayPrimary: "#404040",
      },
    },
  },
  plugins: [],
}

