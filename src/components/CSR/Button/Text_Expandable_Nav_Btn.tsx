'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { FiArrowUpRight } from "react-icons/fi";

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
			} <span>... <strong className={`text-blue-600 hover:underline`}>readmore <strong className={`inline-block`}><FiArrowUpRight size={15}/></strong></strong></span>
		</button>
	);
}