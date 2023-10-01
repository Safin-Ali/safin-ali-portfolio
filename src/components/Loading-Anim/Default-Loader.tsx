import React from 'react';
import styleLoader from './loading.style.module.css';

export default function DefaultLoader() {

	return (
		<div className={`${styleLoader.spinner}`}>
			<div className={`${styleLoader.dot1}`}></div>
			<div className={`${styleLoader.dot2}`}></div>
			<div className={`${styleLoader.dot3}`}></div>
		</div>
	);
};