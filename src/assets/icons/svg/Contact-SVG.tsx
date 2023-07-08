import { SVGType } from "@/types/svg-component-type";
import React from 'react';

export default function ContactSVG({
    className = '',
    color = '#000000',
    size = 20
}: SVGType) {

    return (
        <svg className={ className }
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={ size }
            height={ size }
            fill={color}
        >
            <path
             fill={color} stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="M2 3.5h18c.8 0 1.5.7 1.5 1.5v12c0 .8-.7 1.5-1.5 1.5H2c-.8 0-1.5-.7-1.5-1.5V5c0-.8.7-1.5 1.5-1.5z"/><path fill={color} stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="M23.5 7v12c0 .8-.7 1.5-1.5 1.5H4M12.5 14.5h6M12.5 11.5h6M12.5 8.5h6"/><circle cx="7" cy="9" r="1.5" fill={color} stroke="#000" strokeLinecap="round" strokeLinejoin="round"/><path fill={color} stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="M7 12c-1 0-1.9.3-2.8.7-.4.2-.7.6-.7 1.1v.2c0 .3.2.5.5.5h6c.3 0 .5-.2.5-.5v-.2c0-.5-.3-.9-.7-1.1C8.9 12.3 8 12 7 12z"
             />
        </svg>
    );
};