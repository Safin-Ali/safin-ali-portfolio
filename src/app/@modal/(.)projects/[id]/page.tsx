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
			header={'Project Modal'}
		>
			<Project_Details
				id={params.id}

			/>
		</Intercept_Modal>
	);
}