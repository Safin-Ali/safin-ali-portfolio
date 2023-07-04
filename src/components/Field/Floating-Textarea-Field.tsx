import React, { useId } from 'react';

interface PropsType extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
};

export default function FloatingTextAreaField({
    children,
    ...props
}: PropsType) {

    const uniqueID = useId();

    const attr = {
        ...props,
        className: `${props.className} floating-field peer`,
        id: props.id || uniqueID,
        placeholder: props.placeholder || ' '
    }

    return (
        <div className="relative my-5">
            <textarea

                {
                ...attr }
            />
            <label
                htmlFor={ props.id || uniqueID }
                className={ `floating-label peer-placeholder-shown:top-7 peer-focus:peer-placeholder-shown:top-1.5 ${props.className}` }
                aria-label={uniqueID}
            >
                { children }
            </label>
        </div>
    );
};