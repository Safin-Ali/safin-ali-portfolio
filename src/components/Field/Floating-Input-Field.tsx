import React, { useId } from 'react';
interface PropsType extends React.InputHTMLAttributes<HTMLInputElement> {
    children:string,
};

export default function FloatingInputField({
    children,
    ...props
}:PropsType) {

    const uniqueID = useId();

    const attr = {
        ...props,
        className: `floating-field peer ${props.className}`,
        id: props.id || uniqueID,
        placeholder: props.placeholder || ' '
    }

    return (
        <div className="relative my-5">
            <input
            {
                ...attr
            }
            />
            <label aria-label={uniqueID} htmlFor={ props.id || uniqueID } className={`floating-label ${props.className}`}>{children}</label>
        </div>
    );
};