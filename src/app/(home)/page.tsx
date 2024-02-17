import Image from 'next/image';
import React from 'react';
import image1 from '../../../public/assets/code_template_1.webp'
import { getGreeting } from '@/utils/common-utils';
import Multi_Text_Slide from '@/components/CSR/Multi-Text-Slider/Multi_Text_Slider';
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareFacebook } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";

export default function page() {

	return (
		<div className={ `home_page` }>
			{/* text block */ }

			<div className={ `home_page_text_block` }>

				<div className={ `font-bold` }>

					{/* greetinh block */ }
					<h2 className={ `text-5xl text-primary-header-txt my-3 capitalize` }>Hey Good { getGreeting() }</h2>

					{/* multi skill status */ }
					<h2 className={ `text-3xl text-primary-header-txt my-5` }>
						<span>I am </span>
						<span>
							<Multi_Text_Slide
								textArr={ [
									'Front End Developer',
									'Back End Developer'
								] }
								changeTime={ 6 }
							/>
						</span>
					</h2>

					{/* short bio of my skills */ }
					<p className={ `font-light text-lg` }>
						creating and developing user-friendly interface. 📰
						<br />
						I am very passionate and dedicated in my work. 📝
						<br />
						like to learn and practice. 📖
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