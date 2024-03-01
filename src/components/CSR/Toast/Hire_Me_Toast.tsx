'use client';
import React from 'react';
import Primary_Btn from '../Button/Primary_Btn';

export default function Hire_Me_Toast() {

	return (
			<div className={`hire_me_toast_cont`}>
				<div
					className={ `hire_me_toast animate-fade_in_up` }
					style={{
						animationTimingFunction:'ease-out'
					}}
				>

					<p><span>Excited to take on new challenges</span></p>

					<div>
						<Primary_Btn
							onClick={ () => {
								window.open(process.env.NEXT_PUBLIC_MY_RESUME_CDN, '_blank')
							} }
							className={ `py-1 px-4` }
						>
							Resume
						</Primary_Btn>
					</div>
				</div>
			</div>
	);
}