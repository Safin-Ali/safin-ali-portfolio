import { SVGType } from "@/types/svg-component-type";
import React from 'react';

export default function ServicesSVG({
    className = '',
    color = '#000000',
    size = 20
}: SVGType) {

    return (
        <svg className={ className }
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 66 66"
            width={ size }
            height={ size }
            fill={color}
        >
    <path fill={color} stroke={'#000'} strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="2" className={className} d="M55.4 25.6h2.5M36.5 54.5H25.3m-11.8 0H6c-2.2 0-4-1.8-4-4V6.7c0-2.2 1.8-4 4-4h54c2.2 0 4 1.8 4 4v43.8c0 2.2-1.8 4-4 4h-5.7M64 12.4H2"/><circle cx="9.9" cy="7.6" r="1.8" fill={color} stroke={'#000'} strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="2" className={className}/><circle cx="17.1" cy="7.6" r="1.8" fill={color} stroke={'#000'} strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="2" className={className}/><path fill={color} stroke={'#000'} strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="2" d="M51.5 26.6 48.1 30l-3.9-.7-.7-3.9 3.4-3.4c-3.1-1.3-6.7-.6-9.2 1.8a8.39 8.39 0 0 0 0 11.9c3.3 3.3 8.6 3.3 11.9 0 2.6-2.4 3.2-6.1 1.9-9.1zM37.7 41.4l3.6-3.5m-13.9 2.7L12.8 55.2c-1.6 1.5-1.5 4 0 5.5h0c1.5 1.5 4 1.5 5.6 0l14.3-14.3m3-14-3.8 3.7" className={className}/><path fill={color} stroke={'#000'} strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="2" d="m39.9 44.5-16-15.9-1.2-2.2-5.2-2.5-2.5 2.6 2.4 5.2 2.3 1.1 15.6 15.5"/><path fill={color} stroke={'#000'} strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="2" d="M52.5 52.9c2.4 2.4 2.4 6.2 0 8.6h0c-2.4 2.4-6.2 2.4-8.6 0L33.4 51l8.6-8.6 10.5 10.5zm-14.8-6.2 14.8 14.8M8.1 17.7h49.8M8.1 25.6h3.6m16.3 0h3.6m23.1 7.8h3.2m-49.8 0H14m33.2 7.9h10.7m-49.8 0H21m32.6 7.9h4.3m-49.8 0H14"/>

        </svg>
    );
};