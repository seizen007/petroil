/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        prime: '#F40404',
        sec: '#FFB800',

      },
      backgroundImage: {
        'hero-banner': "url(/banner.svg)",
        modern: 'url(/service/modern.png)',
        national: 'url(/service/national.png)',
        supply: 'url(/service/supply.png)',


      },
      fontFamily: {
        'pops': ['Poppins', 'Paprika', 'Open Sans']
      },
      container: {
        center: true,
        padding: '2rem',
        screens: {
          DEFAULT: '100%',
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1208px',

        }

      },

    },
  },


  plugins: [],
}
