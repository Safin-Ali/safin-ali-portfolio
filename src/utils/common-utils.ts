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