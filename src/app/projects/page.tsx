import Project_Info_Card from '@/components/SSR/Card/Project_Info_Card';
import { ProjectDataShortType, ProjectDataType } from '@/types/types';
import { API } from '@/utils/http-fetcher';
import React from 'react';

export default async function page() {

	const x: ProjectDataShortType[] = await (await API.get('projects/categ?category=javascript')).json();

	const projectsData = [...x, ...x, ...x]

	return (
		<div className={ `relative flex-full-center h-screen` }>
			<div className={`glow_effect`}></div>
			<div>
				<div className={ `content_header relative z-[2]` }>
					My Experinces In
				</div>
				<div className={ `flex px-2 flex-col gap-3 overflow-y-scroll max-h-80 w-1/2 mx-auto` }>
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