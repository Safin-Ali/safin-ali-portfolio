import React from 'react';

export default function NotFound() {

	return (
		<div className={ `flex-full-center relative flex-col h-screen w-full` }>
			<div className={`glow_effetc`}></div>
			<div>
				<h2 className={ `text-6xl font-bold` }>
					404
				</h2>
			</div>

			<div className={`my-2 text-center`}>
				<p className={ `my-1.5` }>Page Not Found</p>
				<p className={ `my-1.5` }><span>sorry we couldn&apos;t found the pahe you&apos;r looking for.</span></p>
			</div>
		</div>
	);
}