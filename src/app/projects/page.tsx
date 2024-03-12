import Project_Info_Card from '@/components/SSR/Card/Project_Info_Card';
import { ProjectDataShortType, ProjectDataType } from '@/types/types';
import { API } from '@/utils/http-fetcher';
import React from 'react';

export default async function page() {

	const x: ProjectDataShortType[] = await (await API.get('project/all')).json();

	const projectsData = [...x, ...x, ...x];

	return (
		<div className={ `flex-full-center h-full` }>
			<div className={`h-full`}>
				<div className={ `content_header` }>
					Projects Showcase
					<p><span className={`text-base font-light`}>Selected Personal Projects:</span></p>
				</div>
				<div
				className={ `flex md:px-2 flex-col gap-3 overflow-y-scroll w-[95%] h-page-mb md:h-page
				md:w-[80%] lg:h-page-mb xl:h-page px-1 lg:w-3/4 mx-auto` }>
					{
						projectsData.map((obj) => {
							const {
								_id,
								projectCodeURL,
								projectLiveURL,
								projectName,
								projectThumb,
								shortText
							} = obj;
							return <Project_Info_Card
								_id={ _id }
								key={ _id }
								projectCodeURL={ projectCodeURL }
								projectLiveURL={ projectLiveURL }
								projectName={ projectName }
								projectThumb={ projectThumb }
								shortText={ shortText }
							/>
						})
					}
				</div>
			</div>
		</div>
	);
}