import React from 'react';
interface PropsType extends React.InputHTMLAttributes<HTMLInputElement> {
    children:string,
};

export default function FloatingInputField({
    children,
    ...props
}:PropsType) {



    return (
        <div className="relative my-5">
            <input
            className={`floating-field peer ${props.className}`}
            id={props.id ||'floating_field'}
            placeholder={props.placeholder || ' '}
            />
            <label htmlFor={ 'floating_field' } className={`floating-label ${props.className}`}>{children}</label>
        </div>
    );
};