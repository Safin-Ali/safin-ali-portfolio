import InputFieldProps from '@/types/field-type';
import React from 'react';
interface PropsType extends InputFieldProps {
    children:string,
};

export default function FloatingInputField({
    children,
    ...props
}:PropsType) {



    return (
        <div className="relative">
            <input
            className={`floating-field peer ${props.className}`}
            id={props.id ||'floating_field'}
            placeholder={props.placeholder || ' '}
            />
            <label htmlFor={ 'floating_field' } className={`floating-label ${props.className}`}>{children}</label>
        </div>
    );
};