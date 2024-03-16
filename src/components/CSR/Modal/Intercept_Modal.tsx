'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { IoClose } from "react-icons/io5";

interface Props extends React.HTMLAttributes<HTMLDivElement>{
	children: React.ReactNode,
}

export default function Intercept_Modal(props: Props) {

	const { children, className, ...attr } = props;

	const [modalState,setModalState] = useState<boolean>(false);

	const { back } = useRouter();

	const dismissModal = () => {
		setModalState(true);
	}

	useEffect(() => {
		document.addEventListener('keydown',(e) => {
			if(e.key === 'Escape') {
				dismissModal();
			}
		})
		return () => {
			document.removeEventListener('keydown',() => {})
		};
	}, [])

	return createPortal(<>
		<div className={ `modal_blur` }></div>
		<div
				className={ `modal_container ${modalState ? 'animate-fade_out_down' :''} ${className || ''}` }
				style={{
					animationDuration:'0.275s'
				}}
				onAnimationEnd={() => modalState && back()}
				{...attr}
			>
					<div className={`border-b border-primary-border w-full px-5 py-2 top-0 flex justify-between`}>
					<div className={`pt-1 text-lg md:text-2xl font-semibold`}>

					</div>
					<button onClick={dismissModal}>
						<IoClose
							className={`text-primary-header-txt`}
							size={30}
						/>
					</button>
				</div>
				<div className={`w-full overflow-y-auto`}>
					{children}
				</div>
		</div>
	</>, document.getElementById('modal-root')!);
}