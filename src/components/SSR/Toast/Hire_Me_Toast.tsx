import React from 'react';
import Link from 'next/link';

export default function Hire_Me_Toast() {

	return (
			<div className={`hire_me_toast_cont`}>
				<div
					className={ `hire_me_toast animate-fade_in_up opacity-0` }
					style={{
						animationDelay:'1.5s',
						animationTimingFunction:'ease-out'
					}}
				>

					<p><span>Excited to take on new challenges</span></p>

					<div>
						<Link
							href={process.env.NEXT_PUBLIC_MY_RESUME_CDN!}
							target={"_blank"}
							className={ `primary_btn inline-block py-1 px-4` }
						>
							Resume
						</Link>
					</div>
				</div>
			</div>
	);
}