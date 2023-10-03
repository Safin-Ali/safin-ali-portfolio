/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import useThemeToggler from '@/hooks/useThemeToggler';
import React, { memo, useState } from 'react';

export default memo(function ThemeToggle() {

	const [isDark,setDark] = useState<boolean>(false);
	const {theme,updateTheme} = useThemeToggler({
		activeHandler:setDark
	});
	const handleToggleForStore = () => {
		updateTheme(theme === 'dark' ? 'light' : 'dark',true)
	};
	return (
		<label className="switch">
			<input onClick={handleToggleForStore}
				type="checkbox" />
			<span className={ `slider ${isDark ? 'moon' : 'sun'}` }></span>
		</label>
	);
});