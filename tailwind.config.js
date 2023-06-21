/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        "wh-base":`hsl(220 0% 98% / 1)`,
        "wh-block":`#FBFCFD`,
        "wh-hover":`hsl(210 10% 97% / 1)`,
        "wh-menu-hover":`#E8EBF0`,
        "wh-border":`#E2E5EA`,
        "bl-base":`#1B1B1B`,
        "bl-sub-title":`#666666`,
        "primaryL":`hsl(217 2% 25% / 1)`,
      },
      spacing:{
        'nav':'70px'
      },
      height:{
        'nav': '70px',
        'fit-screen': 'calc(100vh - 70px)',
      },
      boxShadow:{
        'normal': '6px 10px 18px 0px',
        'card': '2px 7px 10px 0px',
        'square': '0px 0px 20px 15px',
      }
    },
  },
  plugins: [],
}
