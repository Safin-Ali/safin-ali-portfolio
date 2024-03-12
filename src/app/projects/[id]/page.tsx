import Chip from '@/components/SSR/Chip/Chip';
import Spinner from '@/components/SSR/Loader/Spinner';
import { ProjectDataType } from '@/types/types';
import { API } from '@/utils/http-fetcher';
import React from 'react';

interface Props {
	params: {
		id: string
	}
}

export default async function Page(props: Props) {

	const { id } = props.params;

	const {
		projectName,
		projectCategory,
		projectCodeURL,
		projectLiveURL,
		projectOthersInfo,
		projectTech,
		projectThumb,
		shortText
	}: ProjectDataType = await (await API.get(`project/${id}`)).json();

	return (
		<div className={ `flex-full-center h-full` }>

			<div className={`w-3/4 mx-auto h-page overflow-y-auto self-baseline my-10`}>
			<h3>{ projectName }</h3>

{/* project category chips */ }
<div>
	<ul>
		{
			projectCategory.map((elm, idx) => <li key={ idx }><Chip className={`inline-block`}>{elm}</Chip></li>)
		}
	</ul>
</div>

{/* project overview */ }
<div>
	<p>{ shortText }</p>
</div>

{/* projects used packages */ }
<div>
	<h3>Packges</h3>

	<ul>
		{
			projectTech.map((elm, idx) => <li key={ idx }>{ elm }</li>)
		}
	</ul>
</div>
{/* projects features */ }
<div>
	<h3>Features</h3>

	<ul>
		{
			projectOthersInfo.features.map((elm, idx) => <li key={ idx }>{ elm }</li>)
		}
	</ul>
</div>
{/* projects  challanges*/ }
<div>
	<h3>Features</h3>

	<ul>
		{
			projectOthersInfo.challenges.map((elm, idx) => <li key={ idx }>{ elm }</li>)
		}
	</ul>
</div>

			</div>

		</div>
	);
}