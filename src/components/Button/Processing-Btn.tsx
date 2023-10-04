import React from 'react';
import {} from 'react-icons';
interface PropsType {
    children: React.ReactNode,
    className?: string
};

export default function ProcessingBtn({ children, className = 'flex-full-center gap-2' }: PropsType) {

    return (
        <div className={className}>
            <div>{ children }</div>
			<div className="processing-loader"></div>
        </div>
    );
};