import React from 'react';
interface PropsType {
    children: string,
    style?:React.CSSProperties
};

export default function SimpleTooltip({
    children,
    style
}: PropsType) {

    return (
        <div style={style} className={ `tooltip-txt` }>
            { children }
        </div>
    );
};