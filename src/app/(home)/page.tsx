import Image from 'next/image';
import React from 'react';
import image1 from '../../../public/assets/code_template_1.webp';
import Multi_Text_Slide from '@/components/CSR/Multi-Text-Slider/Multi_Text_Slider';
import Anchor_CV from '@/components/SSR/Anchor/Anchor_CV';
import Social_Block from '@/components/SSR/Anchor/Social_Block';

export default function Page() {

	return (
		<>
			<div className={ `home_page` }>

				{/* code image block */ }

				<div
					className={ `code_image_block animate-fade_in opacity-0` }
					style={{
						animationDelay:'0.6s',
						animationDuration:'0.6s',
						animationTimingFunction:'linear'
					}}
				>
						<div className={ `flex justify-center items-center lg:justify-end xl:justify-center h-full` }>
							<Image
								width={ 300 }
								height={ 300 }
								src={ image1 }
								placeholder={'blur'}
								alt={ 'code_template' }
								className={`block`}
							/>
					</div>
				</div>

				{/* text block */ }
				<div className={ `home_page_text_block` }>

					<div className={ `font-bold` }>

						{/* welcome block */ }
						<h2
							className={ `text-4xl text-primary-header-txt my-3 animate-fade_in opacity-0` }
							style={ {
								animationDuration: '0.7s',
								animationTimingFunction: 'ease-in'
							} }
						>
							Hi
							there! <span className={ `hello_anim_emoji` }></span>
						</h2>

						{/* multi skill status */ }
						<h2
							className={ `animate-fade_in text-5xl md:text-6xl text-primary-header-txt my-5 opacity-0` }
							style={{
								animationDelay:'0.6s',
								animationTimingFunction:'ease-in'
							}}
						>
							<span>I am </span>
							<span>
								<Multi_Text_Slide
									textArr={ [
										'Safin Ali'
									] }
									once
									lazyTime={ 1 }
									changeTime={ 6 }
								/>
							</span>
						</h2>

						{/* short bio of my skills */ }
						<div
							className={ `font-light text-lg animate-fade_in_up opacity-0` }
							style={ {
								animationDelay: '0.7s',
								animationTimingFunction:'ease-in',
								opacity: '0',
							} }
						>
							<ul className={ `list-disc md:text-justify lg:text-left md:list-none px-[5%] md:px-0` }>
								<li className={ `my-1.5 md:my-auto` }>A proficient developer skilled in JavaScript programming. 👨‍💻</li>
								<li className={ `my-1.5 md:my-auto` }>Self-motivated and passionate about Computer Science. 🖥️</li>
								<li className={ `my-1.5 md:my-auto` }>Specializing in cutting-edge Front-end Development. 💼</li>
							</ul>
						</div>
					</div>

					{/* download resume button */}
					<div
						className={ `my-5 lg:hidden animate-fade_in_up xl:animate-none opacity-0` }
						style={ {
							animationDelay:'0.8s',
							animationTimingFunction:'ease-in'
						} }
					>
						<Anchor_CV
							cdnUrl={process.env.NEXT_PUBLIC_MY_RESUME_CDN!}
						>
							Download Resume
						</Anchor_CV>
					</div>

					{/* social link */}

					<div className={`flex gap-2 my-2 md:hidden lg:flex xl:hidden`}>
						<Social_Block/>
					</div>
				</div>

			</div>
		</>
	);
}