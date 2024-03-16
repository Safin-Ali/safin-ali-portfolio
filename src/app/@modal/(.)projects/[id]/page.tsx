import Project_Details from '@/app/projects/[id]/(section)/Project_Details';
import Intercept_Modal from '@/components/CSR/Modal/Intercept_Modal';
import React from 'react';

interface Props {
	params:{
		id:string
	}
}

export default function ModalPage ({params}:Props) {

	return (
		<Intercept_Modal
		>
			<Project_Details
				id={params.id}
				className={`px-[5%] md:px-5`}

			/>
		</Intercept_Modal>
	);
}