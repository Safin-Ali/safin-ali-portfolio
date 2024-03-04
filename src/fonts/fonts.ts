import {Nunito} from 'next/font/google';

export const nunito = Nunito({
	weight:['200','300','400','500','600','700','800', '900'],
	subsets: ['cyrillic'],
	fallback:['system-ui', 'arial'],
	display: 'swap',
})