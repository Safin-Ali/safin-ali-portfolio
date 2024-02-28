import { chipColorCSSGen } from '@/utils/common-utils';

export const skills_arr = {
	'front_end': {
		tech: [
			{
				label: 'NextJS',
				colorCSS: chipColorCSSGen('slate-400')
			},
			{
				label: 'Redux',
				colorCSS: chipColorCSSGen('violet-600')
			},
			{
				label: 'SASS',
				colorCSS: chipColorCSSGen('pink-600')
			},
			{
				label: 'TailwindCSS',
				colorCSS: chipColorCSSGen('sky-500')
			},
		],
		services: [
			'Crafting user interfaces from scratch with attention to detail',
			'Implementing pixel-perfect responsive layouts for seamless user experiences across devices',
			'Optimizing and scaling applications while measuring and improving web vitals for enhanced performance',
			'Writing clean and maintainable code using modern JavaScript (ES6+) best practices',
			'Creating reusable components and maintaining simplicity for easier maintenance and scalability',
		]
	},
	'back_end': {
		tech: [
			{
				label: 'Express',
				colorCSS: chipColorCSSGen('green-600')
			},
			{
				label: 'Terminal',
				colorCSS: chipColorCSSGen('slate-400')
			},
			{
				label: 'Socket',
				colorCSS: chipColorCSSGen('slate-400')
			},
			{
				label: 'NonSQL',
				colorCSS: chipColorCSSGen('emerald-600')
			},
		],
		services: [
			'Real-time communication with Socket.IO',
			'RESTful API development with Express.js',
			'Efficient server management using terminal commands',
			'NoSQL database design and implementation (MongoDB)',
			'Authentication and authorization for secure APIs',
			'Logging and error handling for robust backend operations',
		]
	},
	'tools': {
		tech: [
			{
				label: 'GIT',
				colorCSS: chipColorCSSGen('orange-600')
			},
			{
				label: 'Figma',
				colorCSS: chipColorCSSGen('pink-600')
			},
			{
				label: 'VS Code',
				colorCSS: chipColorCSSGen('sky-600')
			},
			{
				label: 'TypeScript',
				colorCSS: chipColorCSSGen('blue-500')
			},
		],
		services: [
			'Git for version control and collaboration',
			'Figma for UI/UX design and prototyping',
			'Visual Studio Code as the primary development environment',
			'TypeScript for type-safe JavaScript development',
			'Browser developer tools for debugging, precise CSS implementation and optimizing web applications'
		]
	}
};