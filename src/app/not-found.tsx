import Route_Back_Btn from '@/components/CSR/Button/Route_Back_Btn';
import React from 'react';

export default function NotFound() {

	return (
		<div className={ `flex-full-center relative flex-col h-screen w-full opacity-0 animate-fade_in` }>
			<div>
				<h2 className={ `text-6xl font-bold` }>
					4
					<span className={`animate-bounce_low inline-block`}>0</span>
					4
				</h2>
			</div>

			<div className={`my-2 text-center`}>
				<p className={ `my-1.5` }>Page Not Found</p>
				<p className={ `my-1.5` }><span>We&rsquo;re sorry, the page you requested was not found.</span></p>
			</div>

			<div>
				<Route_Back_Btn/>
			</div>
		</div>
	);
}