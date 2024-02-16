export default function customCssUtility({ addUtilities }) {
	const newUtilities = {
		'.flex-full-center': {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		},
	};

	addUtilities(newUtilities, ['responsive', 'hover']);
}