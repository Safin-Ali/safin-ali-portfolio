import { ProjectDataType } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Chip from '@/components/SSR/Chip/Chip';
import Projects_Url_Btn_Group from '@/components/SSR/Group/Projects_Url_Btn_Group';
import { webPackagesIcons } from '@/data/packages-icon';
import { API } from '@/utils/http-fetcher';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	id:string,
}

export default async function Project_Details ({
	id,
	className = '',
	...attr
}:Props) {

	const {
		projectName,
		projectCategory,
		projectCodeURL,
		projectLiveURL,
		projectOthersInfo,
		projectTech,
		projectThumb,
		shortText
	}:ProjectDataType = await (await API.get(`project/${id}`)).json();;

	return (
		<div
			className={ `project_details_container ${className}` }
			{...attr}
		>

		<div
			className={ `pt-3 md:pt-10 self-baseline` }
		>

			<div className={`my-5`}>
				<Image
					src={projectThumb}
					alt={`${projectName}_thumbnail`}
					width={500}
					height={500}
					className={`rounded-lg mx-auto`}
				/>
			</div>

			<h3 className={ `text-4xl my-5 text-primary-header-txt font-bold` }>
					{ projectName }
			</h3>

			{/* project category chips */ }
			<div>
				<ul className={`flex flex-wrap sm:flex-nowrap items-center gap-x-3 gap-y-1.5`}>
					{
						projectCategory.map((elm, idx) => <li key={ idx }><Chip className={ `inline-block border-primary-border` }>{ elm }</Chip></li>)
					}
				</ul>
			</div>

			{/* project overview */ }
			<div className={ `my-5` }>
				<h4 className={ `text-2xl font-semibold` }>
					<Link id={ 'overview' } href={ '#overview' } prefetch={ false }>Overview</Link>
				</h4>
				<p>{ shortText }</p>
			</div>

			{/* projects used packages */ }
			<div className={ `my-5` }>
				<h4 className={ `text-2xl font-semibold` }>
					<Link id={ 'packages' } href={ '#packages' } prefetch={ false }>Packages</Link>
				</h4>

				<ul className={`flex flex-wrap sm:flex-nowrap items-center gap-x-3 gap-y-1.5`}>
					{
						projectTech.map((elm, idx) => {
							const Icon = webPackagesIcons[elm]
							return (
								<li
									title={elm}
									className={ `animate-pulse text-primary-header-txt` }
									key={ idx }
								>
									{
										Icon ? <Icon size={ 30 } /> : elm
									}
								</li>
							)
						})
					}
				</ul>
			</div>

			{/* projects features */ }
			<div className={`my-5`}>
				<h4 className={ `text-2xl font-semibold` }>
					<Link id={ 'features' } href={ '#features' } prefetch={ false }>Features</Link>
				</h4>

				<ul className={`list-inside list-[circle] px-0.5`}>
					{
						projectOthersInfo.features.map((elm, idx) => <li
							key={ idx }
						>
							{elm}
						</li>)
					}
				</ul>
			</div>

			{/* projects  challanges*/ }
			<div className={`my-5`}>
			<h4 className={ `text-2xl font-semibold` }>
					<Link id={ 'challanges' } href={ '#challanges' } prefetch={ false }>Challanges</Link>
				</h4>

				<ul className={`list-inside list-[square] px-0.5`}>
					{
						projectOthersInfo.challenges.map((elm, idx) => <li key={ idx }>{ elm }</li>)
					}
				</ul>
			</div>

			{/* project urls for source and live */}
			<div className={`my-5`}>
			<h4 className={ `text-2xl font-semibold` }>
					<Link id={ 'source&live' } href={ '#source&live' } prefetch={ false }>Source & Live</Link>
				</h4>
				<div className={`my-5`}>
				<Projects_Url_Btn_Group
					className={`xs:gap-4 xsm:gap-8 text-center`}
					live={projectLiveURL}
					source={projectCodeURL}
				/>
				</div>
			</div>

		</div>

	</div>
	);
}