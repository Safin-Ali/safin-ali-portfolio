import Image from 'next/image';
import React from 'react';
import image1 from '../../../public/assets/code_template_1.webp';
import Multi_Text_Slide from '@/components/CSR/Multi-Text-Slider/Multi_Text_Slider';
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareFacebook } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";

export default function Page() {

	return (
		<div className={ `home_page` }>

			{/* text block */ }

			<div className={ `home_page_text_block` }>

				<div className={ `font-bold` }>

					{/* welcome block */ }
					<h2 className={ `text-5xl text-primary-header-txt my-3` }>
						Hello! <span className={`hello_anim_emoji`}></span>
					</h2>

					{/* multi skill status */ }
					<h2 className={ `text-3xl text-primary-header-txt my-5` }>
						<span>I am </span>
						<span>
							<Multi_Text_Slide
								textArr={ [
									'Safin Ali'
								] }
								once
								lazyTime={1}
								changeTime={ 6 }
							/>
						</span>
					</h2>

					{/* short bio of my skills */ }
					<p className={ `font-light text-lg` }>
						A skilled JavaScript Developer. 👨‍💻
						<br />
						Creating and Developing user-friendly interface. 📰
						<br />
						Responsive Web Design. 📝📱
						<br />
						Problem Solving. 📖💡
					</p>
				</div>
			</div>

			{/* code image block */ }

			<div className={ `basis-1/2 relative` }>
				<div className={ `blob_home` }></div>
				<div className={ `absolute left-[50%] top-[2%] z-[2]` }>
					<Image
						width={ 240 }
						height={ 240 }
						src={ image1.src }
						alt={ 'code_template_1' }
					/>
				</div>
				<div className={ `absolute left-[18%] top-[30%]` }>
					<Image
						width={ 240 }
						height={ 240 }
						src={ image1.src }
						alt={ 'code_template_1' }
					/>
				</div>
			</div>

			{/* social media links*/ }
			<div className={ `social_media_block` }>

					<div className={`text-xl font-light`}>
						Find out more —
					</div>

					<a href={ 'https://www.linkedin.com/in/safin-ali/' } target={ '_blank' }>
						<IoLogoLinkedin size={ 25 } />
					</a>
					<a href={ 'https://www.facebook.com/safin.ali.7205' } target={ '_blank' }>
						<FaSquareFacebook size={ 25 } />
					</a>
					<a href={ 'https://github.com/Safin-Ali/' } target={ '_blank' }>
						<SiGithub size={ 25 } />
					</a>
			</div>
		</div>
	);
}