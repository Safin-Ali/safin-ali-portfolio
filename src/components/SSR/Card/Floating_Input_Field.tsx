import React, { useId } from 'react';

interface PropsType extends React.InputHTMLAttributes<HTMLInputElement> {
    labelVal:string,
};

export default function Floating_Input_Field (props:PropsType) {

	const uniqueID = useId();

    const modifedVal = {
        ...props,

        className: `floating_field peer ${props.className}`,
        id: props.id || uniqueID,
        placeholder: props.placeholder || ' ',
    };

	const {labelVal,...attr} = modifedVal;

    return (
        <div className="relative my-5">
            <input
            {
                ...attr
            }
            />
            <label aria-label={uniqueID} htmlFor={ props.id || uniqueID } className={`floating_label`}>{labelVal}</label>
        </div>
    );
}