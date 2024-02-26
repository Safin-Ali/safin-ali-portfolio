import Link from 'next/link';
import {ReactNode} from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	iconNode: ReactNode,
	userId:string,
	desSrc:string
}

export default function Contact_Card ({
	iconNode: Icon,
	className,
	desSrc,
	userId,
	...attr
}:Props) {

	return (
		<Link
			href={desSrc}
			target={'_blank'}
		>
			<div
			className={`contact_card ${className || ''}`}
			{...attr}
		>
			<div>
				{
					Icon
				}
			</div>

			<div className={`my-2`}>
				<span className={`font-light`}>{userId}</span>
			</div>
		</div>
		</Link>
	);
}