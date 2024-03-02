import Link from 'next/link';
import React from 'react';
import { MdOutlineFileDownload } from "react-icons/md";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	children:string,
	cdnUrl:string
}

export default function Anchor_CV(props:Props) {

	const {cdnUrl,children,className,...attr} = props;

	return (
		<Link
			href={ cdnUrl }
			target={ '_blank' }
			prefetch={ false }
			className={`w-fit inline-block`}
		>
			<div
				className={ `flex items-center w-fit primary_btn gap-2 py-1.5 ${className || ''}` }
				{...attr}
			>
				<div>
					{children}
				</div>
				<div>
					<MdOutlineFileDownload
						size={ 25 }
						className={ `animate-bounce_low` }
					/>
				</div>
			</div>
		</Link>
	);
}