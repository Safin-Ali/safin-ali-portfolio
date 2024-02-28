import React, { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
	children: string
}

export default function Chip(props: Props) {

	const { children, className, ...attr } = props;
	return (
		<div
			className={ `chip ${className || ''}` }
			{ ...attr }
		>
			{ children }
		</div>
	);
}