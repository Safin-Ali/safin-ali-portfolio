'use client';
import React, { memo, useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";


interface Props extends React.HTMLAttributes<HTMLUListElement> {
	options: string[],
	selValue: string,
	stateCb: (val:string) => any,
	icon?: JSX.Element,
	selContainer?: React.HTMLAttributes<HTMLDivElement>,
	selectedElement?: React.HTMLAttributes<HTMLDivElement>,
	itemElements?: React.LiHTMLAttributes<HTMLLIElement>
}

export default memo(function Select_Option_Field({
	options,
	selectedElement,
	selValue,
	stateCb,
	itemElements,
	selContainer,
	icon: Icon,
	className,
	...attr
}: Props) {

	const { className: selClassName, onClick, ...selAttr } = selectedElement || { className: '' };
	const { className: selContainerClassName, ...selContainerAttr } = selContainer || { className: '' };
	const { className: itemElmClassName, onClick:itemClick, ...itemElmAttr } = itemElements || { className: '' };

	const [{closeAnim,show},setVis] = useState<{
		readonly show:boolean,
		readonly closeAnim:boolean
	}>({
		closeAnim:false,
		show:false
	});

	return <div
	onClick={() => {
		if(show) {
			setVis({closeAnim:true,show})
			return
		}
		setVis({closeAnim,show:!show})
	}}
	className={ `select_field_cont  ${show ? 'bg-white/15' : ''} ${selContainerClassName || ''}` }
	{ ...selContainerAttr }
>

	{/* icons */ }

	<div>
		{ Icon }
	</div>

	<div
		className={ `select_field ${selClassName || ''}` }
		{ ...selAttr }
	>
		{
			selValue
		}
	</div>

	<div>
		<IoIosArrowDown className={ `text-lg md:text-xl duration-200 ${show ? 'rotate-180' : ''}` } />
	</div>
	{
		show &&
		<ul
			onAnimationEnd={() => closeAnim && setVis({
				closeAnim:false,
				show:false
			})}
			className={ `${closeAnim ? 'opacity-100 animate-fade_out' : 'opacity-0 animate-fade_in'} ${className || ''}` }
			{ ...attr }
		>
			{
				options.map((elm, idx) => <li
					className={ `${selValue === elm ? 'bg-white/10 pointer-events-none' : ''} ${itemElmClassName || ''}` }
					key={ idx }
					onClick={ (e) => {
						e.stopPropagation()
						setVis({closeAnim:true,show})
						stateCb(elm)
					} }
					{ ...itemElmAttr }
				>
					{ elm }
				</li>)
			}
		</ul>
	}
</div>;
})