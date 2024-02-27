import type { Config } from "tailwindcss";
import customCssUtility from "./custom-css-utility";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors:{
				'navy':'#050a1a',
				'primary-header-txt':'#F6F6F7',
				'primary-parag-txt':'#c9c9cf',
				'primary-btn-purple':'#6357f7',
				'primary-btn-pink':'#a937fe',
				'primary-border':'#ffffff33'
			},
			boxShadow:{
				'half-border':'0px -0.5px 0px 0.5px'
			},
			backgroundImage:{
				'fade-linear-tb':'linear-gradient(to bottom, rgba(215, 215, 215, 0.15) 0%, transparent 70%, transparent 90%, transparent 100%)'
			},
			animation:{
				'slight_to_lr': 'slight_lr 3s ease-in-out infinite'
			},
			keyframes:{
				'slight_lr':{
					'0%':{
						'transform':'translateX(0)'
					},
					'100%':{
						'transform':'translateX(60%)'
					}
				}
			},
		},
	},
	plugins: [
		customCssUtility
	],
};
export default config;
