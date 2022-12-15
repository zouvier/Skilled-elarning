/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors:{
        'skill-lblue':'#666CA3',
        'skill-dblue':'#13183F',
        'skill-gray': '#83869A',
        'skill-npink':'#F74780',
        'skill-pink':'#FFA7C3',
        'skill-white': '#FFFFFF',
        'skill-orange1':'#F02AA6',
        'skill-orange2':'#FF6F48',
        'skill-orange1-hover':'hsl(322, 87%, 55%, 0.5)',
        'skill-orange2-hover':'hsl(13, 100%, 64%, 0.5)',
        'skill-purple1':'#4851FF',
        'skill-purple2':'#F02AA6',
        'skill-purple1-hover':'hsl(237, 100%, 64%,0.5)',
        'skill-purple2-hover':'hsl(322, 87%, 55%, 0.5)',
      },
      fontFamily:{
        'jakarta':['Plus Jakarta Sans', 'sans-serif']
      },
      gridTemplateRows: {
        "header-and-footer": 'auto 1fr auto'
      },
      screens: {
        'custom-z': {'max': '429px'},
        'custom-x': {'max': '767px'},
        'custom-y': {'min':'600px'},
        'xs':'370px',
        ...defaultTheme.screens,
        
        
      },
    },
  },
  plugins: [],
}
