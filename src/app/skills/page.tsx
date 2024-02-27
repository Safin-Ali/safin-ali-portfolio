import React from 'react';
import Image from 'next/image';
import userInterfacePlaceHolder from '../../../public/assets/user_interface_placeholder.webp';
import serverPlaceHolder from '../../../public/assets/server_placeholder.webp';
import toolsPlaceHolder from '../../../public/assets/tools_placeholder.webp';

export default function Page() {

	const skillsData = {
		'front_end': [
			'NextJS',
			'Redux',
			'SASS',
			'TailwindCSS',
		],
		'back_end': [
			'NodeJS',
			'ExpressJS',
			'Socket.io',
			'MongoDB',
		],
		'tools': [
			'GIT',
			'Figma',
			'VS Code',
			'TypeScript',
		]
	}

	const renderSkills = () => {
		return Object.entries(skillsData).map(([category, skills], idx) => {
			let imgSrc = category === 'front_end' ? userInterfacePlaceHolder : category === 'back_end' ? serverPlaceHolder : toolsPlaceHolder
			return (
				<div
				key={ idx }
				className={ `border p-5 rounded-xl bg-fade-linear-tb border-primary-border` }
			>
				<div>
					<Image
						width={300}
						height={300}
						alt={'skill_front_end'}
						src={imgSrc.src}
					/>
				</div>

				<h6 className={ `my-2 text-xl font-medium` }><span>{ category.replace('_', ' ') }</span></h6>
				<ul>
					{ skills.map((skill, idx) => <li key={ idx }>{ skill }</li>) }
				</ul>
			</div>
			)
		});
	}

	return (
		<div className={ `relative flex-full-center h-screen` }>
			<div className={`text-center`}>
				<div className={ `content_header` }>
					My Technical Skills
				</div>
				<div className={ `grid grid-cols-3 capitalize gap-5 justify-center items-center h-full` }>
					{ renderSkills() }
				</div>
			</div>
		</div>
	);
}
