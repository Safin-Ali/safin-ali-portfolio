import React from 'react';
interface PropsType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
};



export default function PrimaryBtn(props: PropsType) {

    return (
        <div>
            <button {...props}  className={ `pmr-btn ${props.className}` }>{ props.children }</button>
        </div>
    );
};