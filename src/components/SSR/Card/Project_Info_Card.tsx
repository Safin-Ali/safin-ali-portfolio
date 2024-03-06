import Text_Expandable_Nav_Btn from '@/components/CSR/Button/Text_Expandable_Nav_Btn';
import { ProjectDataShortType } from '@/types/types';
import Image from 'next/image';
import React from 'react';

export default function Project_Info_Card(props: ProjectDataShortType) {

	const {
		_id,
		projectCodeURL,
		projectLiveURL,
		projectName,
		projectThumb,
		shortText
	} = props;

	return (
		<figure className={ `project_card_container` }>

			<div className={`basis-full order-2 md:order-none`}>
				<div className={`my-1 sm:my-2`}>
					<h4 className={`text-2xl text-primary-header-txt`}>{ projectName }</h4>
				</div>
				<div className={`my-3 md:my-5`}>
					<p className={`font-light`}>
						<Text_Expandable_Nav_Btn
						path={`projects/${_id}`}
						sliceRange={200}
						className={`text-left`}
						>
							{shortText}
						</Text_Expandable_Nav_Btn>
					</p>
				</div>

				<div className={ `flex gap-2 mt-5 sm:mt-2 my-2` }>
					<div>
						<a className={ `primary_btn text-sm sm:text-base` } href={ projectCodeURL } target={ '_blank' }>
							<span>Source Code </span>
							<span className={`animate-slight_to_lr inline-block`}>»</span>
						</a>
					</div>
					<div>
						<a className={ `primary_btn text-sm sm:text-base` } href={ projectLiveURL } target={ '_blank' }>
							<span>Live Demo </span>
							<span className={`animate-slight_to_lr inline-block`}>»</span>
						</a>
					</div>
				</div>
			</div>
			<div className={`basis-full order-1 md:order-none`}>
				<Image
					src={projectThumb}
					alt={projectName+`_thumbnail`}
					width={400}
					height={400}
					className={`rounded-md mx-auto`}
				/>
			</div>
		</figure>
	);
}