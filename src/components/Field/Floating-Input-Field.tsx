import React from 'react';
interface PropsType extends React.InputHTMLAttributes<HTMLInputElement> {
    children:string,
};

export default function FloatingInputField({
    children,
    ...props
}:PropsType) {

    const attr = {
        ...props,
        className: `floating-field peer ${props.className}`,
        id: props.id || 'floating_field',
        placeholder: props.placeholder || ' '
    }

    return (
        <div className="relative my-5">
            <input
            {
                ...attr
            }
            />
            <label htmlFor={ 'floating_field' } className={`floating-label ${props.className}`}>{children}</label>
        </div>
    );
};