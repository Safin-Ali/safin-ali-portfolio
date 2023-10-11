/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				// white color scheme
				"wh-base": `hsl(220 0% 98% / 1)`,
				"wh-block": `#FBFCFD`,
				"wh-hover": `hsl(210 10% 97% / 1)`,
				"wh-menu-hover": `#E8EBF0`,
				"wh-border": `#E2E5EA`,
				// white black scheme
				"bl-base": `hsl(240 30% 6% / 1)`,
				"bl-block": `hsl(240 50% 15% / 1)`,
				"bl-block-2": `hsl(240 50% 23% / 1)`,
				"bl-menu-hover": `#E8EBF0`,
				"bl-border": `#E2E5EA`,
				"bl-sub-title": `#666666`,
				"primaryL": `hsl(217 2% 25% / 1)`,
			},
			spacing: {
				'nav': '70px'
			},
			height: {
				'nav': '70px',
				'fit-screen': 'calc(100vh - 70px)',
			},
			boxShadow: {
				'normal': '6px 10px 18px 0px',
				'card': '2px 7px 10px 0px',
				'square': '0px 0px 20px 15px',
			},
			animation:{
				'slide-up': 'slide-up 1s ease 0s 1 normal forwards',
				'fade':'fade 1s ease 0s 1 normal forwards;'
			},
		},
	},
	plugins: [],
}
