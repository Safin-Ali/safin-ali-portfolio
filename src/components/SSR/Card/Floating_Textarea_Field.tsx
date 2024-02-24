import React, { useId } from 'react';

interface PropsType extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    labelVal:string,
};

export default function Floating_Textarea_Field (props:PropsType) {

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
            <textarea
            {
                ...attr
            }
            />
            <label aria-label={uniqueID} htmlFor={ props.id || uniqueID } className={`floating_label peer-placeholder-shown:top-7 peer-focus:peer-placeholder-shown:top-1.5`}>{labelVal}</label>
        </div>
    );
}