import React from 'react';
import myImage from '../../../public/assets/my_professional_photo.webp';
import Image from 'next/image';
import Link from 'next/link';
import Anchor_CV from '@/components/SSR/Anchor/Anchor_CV';

export default function page() {

	return (
		<div className={ `h-full flex-full-center` }>
			<div className={ `w-full h-full` }>
				<div className={ `content_header` }>
					<h3>About  me</h3>
					<p><span className={ `text-base font-light` }>Introduction:</span></p>
				</div>

				<div className={ `content_wrapper` }>
					<div className={ `flex-full-center gap-[5%] flex-col md:flex-row` }>

						{/* profesional image block */ }
						<div className={ `w-3/4 md:w-fit my-3 relative` }>
							<Image
								src={ myImage }
								placeholder={ 'blur' }
								width={ 350 }
								height={ 350 }
								alt={ 'my_professional_photo' }
								className={ `mx-auto relative z-[5] rounded-md` }

							/>
							<Image
								src={ myImage }
								placeholder={ 'blur' }
								width={ 350 }
								height={ 350 }
								alt={ 'my_professional_photo' }
								className={ `mx-auto image_glow_shadow rounded-md z-[4]` }

							/>
						</div>

						{/* my bio graphy block */ }

						<div
							className={ `px-3 md:px-0 my-2 md:my-0 h-page md:overflow-y-auto md:pr-5 basis-[40%] self-start` }
						>
							<p className={ `my-2` }>I am Safin Ali from Bangladesh. Passionate about technology from a young age, I embarked on my programming journey in 2022, exploring into JavaScript through self-guided learning. The thrill of problem-solving fuels my dedication to coding. I also find joy in contributing to the tech community and imparting knowledge through teaching.</p>

							<p className={ `my-1` }>Beyond coding, I enjoy analytical tasks, diligently testing new concepts. In my downtime, you&rsquo;ll find me embracing various interests, from sports and continual learning to lively discussions and immersive cinematic experiences.</p>

							<p className={ `my-2` }>Always seeking new opportunities for personal and professional growth.</p>

							<p className={ `my-1` }>With strong foundation in javascript I am eager to embark on new challenges and contribute meaningfully to the ever-evolving landscape of software development.</p>
							<div
								className={ `my-5 animate-fade_in opacity-0` }
								style={ {
									animationDelay: '0.4s'
								} }
							>
								<Anchor_CV
									cdnUrl={ process.env.NEXT_PUBLIC_MY_RESUME_CDN! }
								>
									Download CV
								</Anchor_CV>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}