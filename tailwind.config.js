/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero-banner': "url(./src/assets/banner.svg)",
      },
      fontFamily:{
            'pops':['Poppins','Paprika','Open Sans']
      },
      container:{
        center: true,
        screens : {
          DEFAULT: '100%',
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1144px',
          
        }
      
      }
    },
  },
  plugins: [],
}
