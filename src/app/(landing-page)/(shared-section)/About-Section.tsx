import AboutCard from '@/components/Card/About-Card';
import SectionTitle from '@/components/Section-Title/Section-Title';
import { ProjectDataType } from '@/types/projects-data-type';
import API from '@/utilities/fetch-data';
import Image from 'next/image';

export default async function AboutSection() {

	const data: ProjectDataType[] = (await API.get('/projects', "no-cache"));

	return (
		<>
			<section id={ 'about-section' } className={ `customise-container my-7 sm:my-10 md:my-20` }>
				<SectionTitle
					title={ 'About Me' }
					sub_title={ "My Introduction" }
					iconSRC={ 'https://svgshare.com/i/uCr.svg' }
				/>

				<div className={ `flex-full-center gap-x-10 md:flex-row flex-col w-full` }>

					{/* my professional image */ }
					<div className={ `basis-1/2` }>
						<div className={ `w-9/12 mx-auto md:w-full my-5 md:my-10 overflow-hidden` }>
							<Image
								src={ 'https://i.ibb.co/8MJBTHk/sa-fin-ali.jpg' }
								alt={ `safin-ali-photo` }
								width={ 350 }
								height={ 250 }
								className={ `mx-auto -scale-x-100 rounded-md` }
							/>
						</div>
					</div>

					{/* my short bio */ }
					<div className={ `basis-1/2` }>

						{/* achived cards */ }

						<div className={ `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-center w-full` }>
							<AboutCard
								iconSRC={ `https://svgshare.com/i/u8s.svg` }
								title={ 'Experince' }
								subtitle={ `${new Date().getFullYear() - 2022} years working` }

							/>
							<AboutCard
								iconSRC={ `https://svgshare.com/i/u7g.svg` }
								title={ 'Completed' }
								subtitle={ `${data.length} projects` }

							/>
							<AboutCard
								iconSRC={ `https://svgshare.com/i/u8c.svg` }
								title={ 'Support' }
								subtitle={ `8/24 hours` }

							/>
						</div>

						<article className={ `my-10` }>
							<p>
								<span className={`note-text inline-block`}>Hey, I from <span className={`note-word`}>Bangladesh</span>. Student of <span className={`note-word`}>Digital Technology in Business</span>. A <span className={`note-word`}>self learner</span> and generat programming logic without <span className={`note-word`}>AI</span>.</span>

								<br /> <br />

								<span className={`mb-1 inline-block`}>A part which i like to do:</span>

								<br />
								- Playing Games 🎮<br />
								- Experiment in a programe 🔬<br />
								- Creating NPM package 🧑‍💻<br />
								- Discussing a particular topic 🗣
							</p>
						</article>
					</div>

				</div>
			</section>
		</>
	);
};