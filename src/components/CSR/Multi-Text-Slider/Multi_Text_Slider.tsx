'use client'
import React, { useEffect, useState } from 'react';
import styleMultiTextSlide from './multi-text-slide.module.css';
interface PropsType {
	textArr: string[],
	once?:boolean,
	style?: React.CSSProperties,
	className?: string,
	changeTime?: number,
	lazyTime?: number
};

export default function Multi_Text_Slide(props: PropsType) {

	const { textArr,
		className = ``,
		once = false,
		style = {},
		changeTime = 2,
		lazyTime = 0.5
	} = props;

	const [textState, updateTextState] = useState<{
		index:number,
		remount:boolean
	}>({
		index:0,
		remount:false
	});

	if (changeTime <= lazyTime) {
		throw new Error(`{changeTime} props value must be greater than {lazyTime} props value`);
	} else if (textArr.length <= 1 && !once) {
		throw new Error(`{textArr} props must be contain multiple string`);
	}
	useEffect(() => {
		if(!once) {
			setTimeout(() => {
				if (textState.index === textArr.length - 1) {
					return updateTextState({...textState,index:0});
				}
				updateTextState({...textState,index:textState.index+1});
			}, changeTime*1000);
		} else {
			setTimeout(() => {
				updateTextState({...textState,remount:!textState.remount});
			}, changeTime*1000);
		}
		return () => {};
	}, [textState.index,textState.remount]);

	return (
		<div key={textState.remount ? 'remounted' : 'not-remounted'} className={ styleMultiTextSlide['multi-text-root'] }>
			{
				textArr.map((txt, idx) => <span
					style={ {
						...style,
						animationDuration: `${lazyTime + 's'}`
					} }
					className={ `${idx === textState.index ? styleMultiTextSlide['multi-text-textIn'] : ''} ${className}`}
					key={ idx }
				>
					{ txt }
				</span>)
			}
		</div>
	);
};