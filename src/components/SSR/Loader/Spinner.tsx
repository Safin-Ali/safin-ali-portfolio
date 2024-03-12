import React from 'react';

type Props = React.HTMLAttributes<HTMLDivElement>;

export default function Spinner (props:Props) {

	const {className,...attr} = props;


	return (
		<div
			className={`spinner ${className || ''}`}
			{...attr}
		>
		</div>
	);
}