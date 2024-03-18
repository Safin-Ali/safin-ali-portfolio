import Skills_Info_Card from '@/components/SSR/Card/Skills_Info_Card';
import { skills_arr } from '@/data/skills-tech';
import serverPlaceHolder from '../../../public/assets/server_placeholder.webp';
import toolsPlaceHolder from '../../../public/assets/tools_placeholder.webp';
import userInterfacePlaceHolder from '../../../public/assets/user_interface_placeholder.webp';

export default function Page() {

	return (
		<div className={ `flex-full-center h-full` }>
			<div className={ `text-center w-full h-full overflow-hidden` }>
				<div
					className={ `content_header` }
					style={ {
						animationDuration: '1.2s'
					} }
				>
					<h3>My Technical Skills</h3>
					<p><span className={ `text-base font-light` }>Proficient in:</span></p>
				</div>

				<div
					className={ `content_wrapper
					px-[5%] md:w-full lg:w-10/12 xl:w-3/4 mx-auto md:px-2 opacity-0 animate-fade_in` }
					style={ {
						animationDuration: '0.5s',
						animationTimingFunction:'ease-out',
						animationDelay:'0.34s'
					} }
				>
					{
						Object.entries(skills_arr).map(([category, techs], idx) => {
							let imgSrc = category === 'front_end' ? userInterfacePlaceHolder : category === 'back_end' ? serverPlaceHolder : toolsPlaceHolder
							return (
								<Skills_Info_Card
									key={ idx }
									placeholderImg={ imgSrc }
									categ={ category }
									techs={ techs.tech }
									services={ techs.services }
								/>
							)
						})
					}
				</div>
			</div>
		</div>
	);
}
