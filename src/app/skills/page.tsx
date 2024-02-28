import React from 'react';
import userInterfacePlaceHolder from '../../../public/assets/user_interface_placeholder.webp';
import serverPlaceHolder from '../../../public/assets/server_placeholder.webp';
import toolsPlaceHolder from '../../../public/assets/tools_placeholder.webp';
import Skills_Info_Card from '@/components/SSR/Card/Skills_Info_Card';
import { skills_arr } from '@/data/skills-tech';

export default function Page() {

	return (
		<div className={ `flex-full-center h-full` }>
			<div className={ `text-center w-full h-full` }>
				<div className={ `content_header` }>
					<h3>My Technical Skills</h3>
					<p><span className={`text-base font-light`}>Proficient in:</span></p>
				</div>

				<div className={ `h-page w-3/4 mx-auto overflow-y-scroll px-2` }>
					{
						Object.entries(skills_arr).map(([category, techs], idx) => {
							let imgSrc = category === 'front_end' ? userInterfacePlaceHolder : category === 'back_end' ? serverPlaceHolder : toolsPlaceHolder
							return (
								<Skills_Info_Card
									key={idx}
									placeholderImg={imgSrc}
									categ={category}
									techs={techs.tech}
									services={techs.services}
								/>
							)
						})
					}
				</div>
			</div>
		</div>
	);
}
