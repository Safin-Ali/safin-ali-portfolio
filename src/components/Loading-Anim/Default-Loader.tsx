import React from 'react';

export default function DefaultLoader() {

	return (
		<div className={`spinner`}>
			<div className={`dot1`}></div>
			<div className={`dot2`}></div>
			<div className={`dot3`}></div>
		</div>
	);
};