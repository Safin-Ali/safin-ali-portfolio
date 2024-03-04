import Image, { StaticImageData } from 'next/image';
import React from 'react';
import Chip from '../Chip/Chip';
import { SkillsTech } from '@/types/types';


interface Props {
	placeholderImg: StaticImageData,
	categ: string,
	techs: SkillsTech[],
	services: string[]
}

export default function Skills_Info_Card(props: Props) {

	const { categ, placeholderImg, services, techs } = props;

	return (
		<div className={ 'skill_card_container' }>
			<div className={ `basis-full md:basis-[80%] mx-auto flex md:mr-5 lg:mr-0 items-center` }>
				<div>
					<div
						className={ `border p-2 md:p-5 rounded-xl bg-fade-linear-tb border-primary-border` }
					>
						<div>
							<Image
								width={ 300 }
								height={ 300 }
								alt={ `${categ}_placeholder` }
								src={ placeholderImg }
								placeholder={ 'blur' }
								className={ `mx-auto` }
							/>
						</div>

						<h6 className={ `my-2 text-xl capitalize font-medium` }><span>{ categ.replace('_', '-') }</span></h6>
						<ul className={ `flex gap-2 flex-wrap justify-center` }>
							{ techs.map(({ colorCSS, label }, idx) => {

								return <li
										key={ idx }
									>
									<Chip
										className={ `${colorCSS} shadow-lg` }
									>
										{ label }
									</Chip>
								</li>
							})
							}
						</ul>
					</div>
				</div>
			</div>
			<div className={ `basis-full` }>
				<h4 className={ `text-2xl font-light my-2 md:my-0 sm:text-center` }>— Services —</h4>

				<ul className={ `list-decimal px-4 text-sm sm:text-base text-left` }>
					{ services.map((service, idx) => <li
						key={ idx }
						className={ `my-2` }
					>
						{ service }.
					</li>) }
				</ul>
			</div>
		</div>

	);
}