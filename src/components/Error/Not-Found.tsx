import Image from 'next/image';
import React from 'react';
interface PropsType {
	size?:number,
};

export default function NotFound({size = 100}:PropsType) {

	return (
			<Image
				src={'https://i.ibb.co/3NPc74H/imageedit-1-7365599756.gif'}
				alt={'not_found'}
				width={size}
				style={{
					margin:`0 auto`
				}}
				height={size}
			/>
	);
};