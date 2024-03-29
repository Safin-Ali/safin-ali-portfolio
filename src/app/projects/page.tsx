import Project_Info_Card from '@/components/SSR/Card/Project_Info_Card';
import { ProjectDataShortType } from '@/types/types';
import { API } from '@/utils/http-fetcher';

export default async function page() {

	const x: ProjectDataShortType[] = await (await API.get('project/all')).json();

	const projectsData = [...x, ...x, ...x];

	return (
		<div className={ `flex-full-center h-full` }>
			<div className={ `h-full` }>
				<div
					className={ `content_header` }
					style={ {
						animationDuration: '1.2s'
					} }
				>
					Projects Showcase
					<p><span className={ `text-base font-light` }>Selected Personal Projects:</span></p>
				</div>
				<div
					className={ `content_wrapper opacity-0 animate-fade_in flex md:px-2 flex-col gap-3 w-full md:w-[85%] px-[5%] lg:w-3/4 mx-auto` }
					style={ {
						animationDuration: '0.5s',
						animationTimingFunction:'ease-out',
						animationDelay:'0.34s'
					} }
				>
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