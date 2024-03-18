'use client';

import React from 'react';
import Primary_Btn from './Primary_Btn';
import { useRouter } from 'next/navigation';

export default function Route_Back_Btn () {

	const {back} = useRouter()

	return (
		<Primary_Btn
			className={`px-8`}
			onClick={back}

		>
			Back
		</Primary_Btn>
	);
}