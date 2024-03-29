import Text_Expandable_Nav_Btn from '@/components/CSR/Button/Text_Expandable_Nav_Btn';
import { ProjectDataShortType } from '@/types/types';
import Image from 'next/image';
import React from 'react';
import { TbWorldShare } from 'react-icons/tb';
import Projects_Url_Btn_Group from '../Group/Projects_Url_Btn_Group';

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
				<Projects_Url_Btn_Group
					live={projectLiveURL}
					source={projectCodeURL}
				/>
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