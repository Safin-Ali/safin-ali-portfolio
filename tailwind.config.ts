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
				'glow':'#99999e',
				'primary-header-txt':'#dbdbdd',
				'primary-parag-txt':'#a0a1a6',
				'primary-btn-purple':'#6357f7',
				'primary-btn-pink':'#a937fe',
				'primary-border':'#222433'
			}
		},
	},
	plugins: [
		customCssUtility
	],
};
export default config;
