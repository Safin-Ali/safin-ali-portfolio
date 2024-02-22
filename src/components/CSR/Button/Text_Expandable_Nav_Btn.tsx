'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
	path:string,
	sliceRange:number,
	children:string
}

export default function Text_Expandable_Nav_Btn (props:Props) {

	const router = useRouter();

	const {children,onClick,sliceRange,path,...attrs} = props;

	return (
		<button onClick={() => router.push(path)} {...attrs}>
			{
				children.slice(0,sliceRange)
			} <span>... <strong className={`hover:underline duration-150`}>readmore »</strong></span>
		</button>
	);
}