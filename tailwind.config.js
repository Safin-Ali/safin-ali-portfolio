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
        "wh-base":`#F7F7F7`,
        "wh-block":`#FBFCFD`,
        "wh-hover":`#F3F5F7`,
        "wh-menu-hover":`#E8EBF0`,
        "wh-border":`#E2E5EA`,
        "bl-base":`#1B1B1B`,
        "bl-sub-title":`#666666`,
        "primary":`#0079FF`,
      },
      height:{
        'nav': '70px',
        'fit-screen': 'calc(100vh - 70px)',
      },
      boxShadow:{
        'normal': '6px 10px 18px 0px rgb(0 0 0 / 10%)'
      }
    },
  },
  plugins: [],
}
