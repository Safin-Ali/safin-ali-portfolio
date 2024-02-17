'use client'
import React, { useEffect, useState } from 'react';
import styleMultiTextSlide from './multi-text-slide.module.css';
interface PropsType {
	textArr: string[],
	style?: React.CSSProperties,
	className?: string,
	changeTime?: number,
	lazyTime?: number
};

export default function Multi_Text_Slide(props: PropsType) {

	const { textArr,
		className = ``,
		style = {},
		changeTime = 2,
		lazyTime = 0.5
	} = props;

	const [textIdx, setTextIndex] = useState<number>(0);

	useEffect(() => {

		if (changeTime <= lazyTime) {
			throw new Error(`{changeTime} props value must be greater than {lazyTime} props value`);
		} else if (textArr.length <= 1) {
			throw new Error(`{textArr} props must be contain multiple string`);
		}

		setTimeout(() => {
			if (textIdx === textArr.length - 1) {
				return setTextIndex(0);
			}
			setTextIndex(textIdx + 1);
		}, changeTime*1000);
	}, [textIdx]);

	return (
		<div className={ styleMultiTextSlide['multi-text-root'] }>
			{
				textArr.map((txt, idx) => <span
					style={ {
						...style,
						animationDuration: `${lazyTime + 's'}`
					} }
					className={ `${idx === textIdx ? styleMultiTextSlide['multi-text-textIn'] : ''} ${className}`}
					key={ idx }
				>
					{ txt }
				</span>)
			}
		</div>
	);
};