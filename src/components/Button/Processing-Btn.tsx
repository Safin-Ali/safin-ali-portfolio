import React from 'react';
import { } from 'react-icons';

export type AsyncTaskStatusType = 'pending' | 'error' | 'success';

interface PropsType {
	children: React.ReactNode,
	className?: string,
	status?:AsyncTaskStatusType
};

export default function ProcessingBtn({ children,
	className = 'flex-full-center gap-2',
	status = 'pending'
}: PropsType) {

	return (
		<div className={ className }>
			<div>{ children }</div>
			{
				status === 'pending'
					?
						<div className="processing-loader"></div>
					:
				status === 'success'
					?
						<svg stroke="black" className="check__svg" viewBox="7.5 10.5 17 11">
							<path d="M8,15 l 6,6 l 10,-10" fill="none" strokeDasharray="24"></path>
						</svg>
					:
				status === 'error'
					?
						<svg className="cross__svg" strokeWidth="3" viewBox="14.5 14.5 23 23">
							<path className="cross__path cross__path--left" fill="none" d="M16,16 l20,20"></path>
							<path className="cross__path cross__path--right" fill="none" d="M16,36 l20,-20"></path>
						</svg>
					:
						<div className="processing-loader"></div>
			}
		</div>
	);
};