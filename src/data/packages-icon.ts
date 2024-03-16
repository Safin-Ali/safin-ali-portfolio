import {
	SiExpress,
	SiRedux,
	SiReact,
	SiMongodb,
	SiNextdotjs,
	SiTailwindcss
} from "react-icons/si";

type ReactIconComponent = React.FC<React.SVGProps<SVGSVGElement>>;

export const webPackagesIcons:{
	[key:string]:typeof SiExpress
} = {
	'reactjs': SiReact,
	'nextjs':SiNextdotjs,
	'tailwindcss':SiTailwindcss,
	'mongodb':SiMongodb,
	'expressjs':SiExpress,
	'redux':SiRedux
}