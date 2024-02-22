'use client';
import useTextSlicer from '@/hooks/useTextSlicer';
import React from 'react';

interface Props extends React.HTMLAttributes<HTMLButtonElement>{
	sliceRange:number,
	text:string,
	cb?:() => void
}

export default function Text_Expandable_Btn(props: Props) {
	const {children,onClick,text,sliceRange,...rest} = props;
	const {callback,isSliced,slicedText} = useTextSlicer({
		range:sliceRange,
		text
	});

	const handler = () => {
		if(props.cb) {
			return props.cb
		} else {
			return callback
		}
	}

	return (
		<button
			{...rest}
			onClick={handler}
		>
			{
				slicedText
			}
			{
				isSliced && <span>... <strong className={`underline`}>readmore »</strong></span>
			}

	</button>
	);
}
