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

			<div className={`basis-1/2`}>
				<div className={`my-2`}>
					<h4 className={`text-2xl text-primary-header-txt`}>{ projectName }</h4>
				</div>
				<div className={`my-5`}>
					<p className={`font-light`}>
						<Text_Expandable_Nav_Btn
						path={_id}
						sliceRange={195}
						className={`text-justify`}
						>
							{shortText}
						</Text_Expandable_Nav_Btn>
					</p>
				</div>

				<div className={ `flex gap-2 my-2` }>
					<div>
						<a className={ `primary_btn` } href={ projectCodeURL } target={ '_blank' }>
							<span>Source Code </span>
							<span className={`animate-slight_to_lr inline-block`}>»</span>
						</a>
					</div>
					<div>
						<a className={ `primary_btn` } href={ projectLiveURL } target={ '_blank' }>
							<span>Live Demo </span>
							<span className={`animate-slight_to_lr inline-block`}>»</span>
						</a>
					</div>
				</div>
			</div>
			<div className={`basis-1/2`}>
				<Image
					src={projectThumb}
					alt={projectName+`_thumbnail`}
					width={300}
					height={300}
					className={`rounded-md mx-auto`}
				/>
			</div>
		</figure>
	);
}