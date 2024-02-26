'use client';
import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children:React.ReactNode
}

export default function Primary_Btn ({
	children,
	className,
	...atr
}:Props) {

	return (
		<button className={`primary_btn ${className||''}`} {...atr}>
			{children}
		</button>
	);
}