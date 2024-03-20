'use client';
import React from 'react';
import { IoSearchOutline } from "react-icons/io5";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	containerDiv?:React.HTMLAttributes<HTMLDivElement>
}

export default function Search_Field ({
	placeholder,
	containerDiv,
	type = 'text',
	className = 'bg-transparent focus:outline-none w-full',
	...attr
}:Props) {

	const {className:divClass,...divAttr} = containerDiv || {className:''};

	return (
		<div
			className={`search_field ${divClass || ''}`}
			{...divAttr}
		>
			<div className={`border-r py-2 p-3 border-primary-border`}>
				<span className={`block`}><IoSearchOutline size={20}/></span>
			</div>
			<div>
			<input
				className={`${className || ''}`}
				type="text"
				{...attr}
			/>
			</div>
		</div>
	);
}