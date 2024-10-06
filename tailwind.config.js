/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
import  withMT  from "@material-tailwind/react/utils/withMT";
export default withMT({
  // darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
        
      },
    },
    extend: {
      colors: {
        'primary-50': '#F4EEFF',
        'primary-100': '#DECCFF',
        'primary-200': '#C8A9FF',
        'primary-300': '#B890FF',
        'primary-400': '#A26EFF',
        'primary-500': '#9254FF',
        'primary-600': '#7C47D9',
        'primary-700': '#5F37A6',
        'primary-800': '#492A80',
        'primary-900': '#2C194D',
        'primary-950': '#0F081A', 
        'grey-50': '#FBFBFB',
        'grey-100': '#F4F4F4',
        'grey-200': '#EDEDED',
        'grey-300': '#E8E8E8',
        'grey-400': '#E0E0E0',
        'grey-500': '#DBDBDB',
        'grey-600': '#BABABA',
        'grey-700': '#8E8E8E',
        'grey-800': '#6E6E6E',
        'grey-900': '#424242',
        'grey-950': '#161616',
        'success-50': '#E5F7ED',
        'success-500': '#00B34D',
        'warning-50': '#FFF6E7',
        'warning-500': '#FFA411',
        'error-50': '#FEECE9',
        'error-500': '#F53D24',

        'white': '#FFFFFF',
        'dark': '#0F081A',
        'focus': '#0E97E5',

        'box-shadow': "0px 0px 4px 0px rgba(0, 0, 0, 15%)",
      },
      screens: {
        'xs': '480px',
      
      },
      width: {
        '10':"10%",
        '15':"15%",
        '20':"20%",
        '25':"25%",
        '30':"30%",
        '35':"35%",
        '40':"40%",
        '45':"45%",
        '50':"50%",
        '55':"55%",
        '60':"60%",
        '65':"65%",
        '70':"70%",
        '75':"75%",
        '80':"80%",
        '85':"85%",
        '90':"90%",
        '95':"95%",
        '100':"100%",
        '420': '420px',
        '465': '465px',
        '680':'680px',
        'content':'1280px',
        'content-course1-user':'1019px',
        'content-course2-user':'865px',
        'sidebar-user':'308px',
        'sidebar-course-user':'415px',
        'height-header':'126px',
        'height-footer':'459px',
        'filter_icon':"invert(59%) sepia(11%) saturate(200%) saturate(135%) hue-rotate(176deg) brightness(96%) contrast(94%)"
      },
      fontFamily: {
        inter: ['Roboto', 'sans-serif'],
        greatvibes: ['Great Vibes', 'cursive'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
  ],
})

