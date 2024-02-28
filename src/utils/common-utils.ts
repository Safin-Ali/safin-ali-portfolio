export const getGreeting = (): string => {
	const currentTime = new Date();
	const currentHour = currentTime.getHours();

	let greeting: string;

	switch (true) {
		case currentHour < 12 && currentHour > 6:
			greeting = 'morning!';
			break;
		case currentHour < 18 && currentHour > 6:
			greeting = 'afternoon!';
			break;
		case currentHour < 21 && currentHour > 6:
			greeting = 'evening!';
			break;
		default:
			greeting = 'night!'
			break;

	}

	return greeting;
}

/**
 *
 * return css string for chip only color name.
 *
 * @param colorName - color name css `red-500`
 * @returns
 */
export const chipColorCSSGen = (colorName:string) => {
	return `text-${colorName} border-${colorName} shadow-${colorName}/25`
}