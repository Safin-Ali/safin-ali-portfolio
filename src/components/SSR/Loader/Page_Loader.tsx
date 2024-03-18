import Image from 'next/image';
import React from 'react';
import myAvatar from '../../../app/favicon.ico';
import Spinner from './Spinner';

export default function Page_Loader() {

	return (
		<section className={ `w-full h-dvh flex-full-center` }>

			<div className={`p-5`}>
				<div
					className={`animate-translate_y w-1/2 sm:w-3/5 md:w-4/5 lg:w-full mx-auto translate-y-[20%]`}
					style={{
						animationDelay:'0.7s'
					}}
				>
					<Image
						src={ myAvatar }
						alt={ 'My_Avatar' }
						width={ 200 }
						height={ 200 }
						className={`animate-fade_in mx-auto`}
						style={{
							animationDuration:'0.3s',
							animationTimingFunction:'ease-in'
						}}
					/>
				</div>

				<div
					className={`flex-full-center opacity-0 gap-x-2 animate-fade_in_up`}
					style={{
						animationDelay:'1.3s'
					}}
				>
					<div className={`text-2xl flex-full-center`}>
						<h4 className={`block`}>Please wait a moment</h4>
						<div className={`three_dots_loader`}></div>
					</div>
				</div>
			</div>
		</section>
	);
}