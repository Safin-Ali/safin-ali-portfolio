import Image from 'next/image';
import React from 'react';
import image1 from '../../../public/assets/code_template_1.webp';
import Multi_Text_Slide from '@/components/CSR/Multi-Text-Slider/Multi_Text_Slider';
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareFacebook } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import Hire_Me_Toast from '@/components/CSR/Toast/Hire_Me_Toast';
import Anchor_CV from '@/components/SSR/Anchor/Anchor_CV';

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
					<div
						className={ `md:w-[500px] mx-auto md:relative md:h-[500px]` }
					>
						<div className={ `code_img_1` }>
							<Image
								width={ 240 }
								height={ 240 }
								src={ image1 }
								placeholder={'blur'}
								alt={ 'code_template_1' }
								className={`w-full md:w-3/4`}
							/>
						</div>
						<div className={ `code_img_2` }>
							<Image
								width={ 240 }
								height={ 240 }
								placeholder={'blur'}
								src={ image1 }
								alt={ 'code_template_1' }
								className={ `mx-auto sm:mx-0 w-[90%] md:w-3/4` }
							/>
						</div>
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

					<div
						className={ `my-5 xl:hidden animate-fade_in_up xl:animate-none opacity-0` }
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
				</div>

				{/* social media links*/ }
				<div
					className={ `animate-fade_in opacity-0 social_media_block` }
					style={{
						animationDelay:'1.4s',
						animationTimingFunction:'ease-in'
					}}
				>

					<div className={ `text-xl font-light text-primary-header-txt` }>
						Find out more —
					</div>

					<a className={ `duration-150 hover:text-sky-600` } href={ 'https://www.linkedin.com/in/safin-ali/' } target={ '_blank' }>
						<IoLogoLinkedin size={ 25 } />
					</a>
					<a className={ `duration-150 hover:text-blue-600` } href={ 'https://www.facebook.com/safin.ali.7205' } target={ '_blank' }>
						<FaSquareFacebook size={ 25 } />
					</a>
					<a className={ `duration-150 hover:text-gray-950` } href={ 'https://github.com/Safin-Ali/' } target={ '_blank' }>
						<SiGithub className={ `rounded-full duration-200 ease-in-out hover:bg-primary-header-txt` } size={ 25 } />
					</a>
				</div>

			</div>
			{/* hire me toast */ }
			<div className={ `hidden xl:block` }>
				<Hire_Me_Toast />
			</div>
		</>
	);
}