/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect, useState } from 'react';

type themeLiteral = 'light' | 'dark'

export default function ThemeToggle() {
	const [isDark, setDark] = useState<boolean>(false);
	const [toggle, setToggle] = useState<boolean>(false);

	/**
	 *
	 * @param isDark
	 * @param oppositeThemeVal
	 * @param prefers
	 */
	const updateTheme = (isDark:boolean,oppositeThemeVal:themeLiteral,prefers:boolean = false) => {
		const dom = document.documentElement.classList;
		dom.replace(isDark ? 'light' : 'dark',oppositeThemeVal);
		setDark(isDark);
		if(!prefers) localStorage.setItem('theme', oppositeThemeVal);
	};

	useEffect(() => {
		const systemTheme = matchMedia('(prefers-color-scheme: dark)').matches;
		const curTheme = localStorage.getItem('theme');
		const oppositeThemeVal = !isDark ? 'light' : 'dark';
		console.log('sa');


		if (!curTheme && !toggle) {
			if (systemTheme) {
				updateTheme(true,'dark',true);
			}
		} else if (!curTheme) {
			updateTheme(isDark ? true : false,oppositeThemeVal);
		} else if (curTheme === 'dark') {
			updateTheme(false,'light');
		} else {
			updateTheme(true,'dark');
		};
	}, [toggle]);

	return (
		<label className="switch">
			<input onClick={ () => {
				setDark(!isDark);
				setToggle(!toggle);
			} }
				type="checkbox" />
			<span className={ `slider ${isDark ? 'moon' : 'sun'}` }></span>
		</label>
	);
};