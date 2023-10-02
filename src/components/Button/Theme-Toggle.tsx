import newArr from '@/utilities/new-arr';
import React from 'react';
interface PropsType { };

export default function ThemeToggle() {

	return (
			<label className="switch">
				<input type="checkbox"/>
					<span className="slider"></span>
			</label>
	);
};