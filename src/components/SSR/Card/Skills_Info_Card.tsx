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
			<div className={ `basis-[80%] flex items-center` }>
				<div>
					<div
						className={ `border p-5 rounded-xl bg-fade-linear-tb border-primary-border` }
					>
						<div>
							<Image
								width={ 300 }
								height={ 300 }
								alt={ 'skill_front_end' }
								src={ placeholderImg }
								placeholder={ 'blur' }
								className={ `mx-auto` }
							/>
						</div>

						<h6 className={ `my-2 text-xl capitalize font-medium` }><span>{ categ.replace('_', '-') }</span></h6>
						<ul className={ `flex gap-2 justify-center` }>
							{ techs.map(({ colorCSS, label }, idx) => {

								return <li key={ idx }>
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
				<h4 className={ `text-2xl font-light` }>— Services —</h4>

				<ul className={ `list-decimal text-left` }>
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