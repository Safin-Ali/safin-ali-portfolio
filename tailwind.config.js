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
        "wh-base":`#F0F4F9`,
        "wh-block":`#FBFCFD`,
        "wh-hover":`#F3F5F7`,
        "wh-menu-hover":`#E8EBF0`,
        "bl-base":`#1B1B1B`,
        "primary":`#F0F4F9`,
      }
    },
  },
  plugins: [],
}
