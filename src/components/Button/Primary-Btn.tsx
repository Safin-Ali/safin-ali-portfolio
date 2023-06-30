import React from 'react';
interface PropsType {
    children: React.ReactNode,
    className?: string
};

export default function PrimaryBtn({ children, className }: PropsType) {

    return (
        <div>
            <button className={ `pmr-btn ${className}` }>{ children }</button>
        </div>
    );
};