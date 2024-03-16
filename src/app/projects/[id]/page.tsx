import Project_Details from './(section)/Project_Details';
interface Props {
	params: {
		id: string
	}
}

export default async function Page(props: Props) {

	const { id } = props.params;

	return (
		<section className={`overflow-y-auto h-full`}>
			<Project_Details
		id={id}
		className={'w-full px-[5%]'}
		/>
		</section>
	);
}