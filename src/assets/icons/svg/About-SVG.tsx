import { SVGType } from "@/types/svg-component-type";
import React from 'react';

export default function AboutSVG({
    className = '',
    color = '#000000',
    size = 20
}: SVGType) {

    return (
        <svg className={ className }
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width={ size }
            height={ size }
            fill={color}
        >
<path xmlns="http://www.w3.org/2000/svg" d="M403.5 0h-295A37.542 37.542 0 0 0 71 37.5v1H55.5a22.5 22.5 0 0 0 0 45H71v85H55.5a22.5 22.5 0 0 0 0 45H71v85H55.5a22.5 22.5 0 0 0 0 45H71v85H55.5a22.5 22.5 0 0 0 0 45H71v1a37.542 37.542 0 0 0 37.5 37.5h295a37.542 37.542 0 0 0 37.5-37.5v-437A37.542 37.542 0 0 0 403.5 0Zm-348 68.5a7.5 7.5 0 0 1 0-15h39a7.5 7.5 0 0 1 0 15Zm0 130a7.5 7.5 0 0 1 0-15h39a7.5 7.5 0 0 1 0 15Zm0 130a7.5 7.5 0 0 1 0-15h39a7.5 7.5 0 0 1 0 15Zm0 130a7.5 7.5 0 0 1 0-15h39a7.5 7.5 0 0 1 0 15Zm370.5 16a22.526 22.526 0 0 1-22.5 22.5h-295A22.526 22.526 0 0 1 86 474.5v-1h8.5a22.5 22.5 0 0 0 0-45H86v-85h8.5a22.5 22.5 0 0 0 0-45H86v-85h8.5a22.5 22.5 0 0 0 0-45H86v-85h8.5a22.5 22.5 0 0 0 0-45H86v-1A22.526 22.526 0 0 1 108.5 15h295A22.526 22.526 0 0 1 426 37.5ZM319.128 283.981l-27.93-14.886c.09-1.018.152-2.04.152-3.065v-13.98a61.309 61.309 0 0 0 26.005-50.1v-18.676a61.355 61.355 0 0 0-122.71 0v18.676a61.338 61.338 0 0 0 26.965 50.784v13.296c0 .86.042 1.719.106 2.575l-28.843 15.375a63.388 63.388 0 0 0-33.583 55.95 50.207 50.207 0 0 0 50.15 50.15h93.12a50.143 50.143 0 0 0 50.15-50.15 63.266 63.266 0 0 0-33.582-55.949ZM209.645 183.274a46.354 46.354 0 0 1 92.708-.06 69.571 69.571 0 0 1-37.798 1.195 68.794 68.794 0 0 1-27.259-14.168 7.5 7.5 0 0 0-12.111 3.837 16.653 16.653 0 0 1-15.54 12.853Zm0 18.676v-.006a32.555 32.555 0 0 0 20.496-8.124 31.194 31.194 0 0 0 5.304-6.232 82.46 82.46 0 0 0 66.91 11.207v3.155a46.355 46.355 0 0 1-92.71 0Zm66.705 57.871v6.21a19.87 19.87 0 1 1-39.74 0v-5.884a61.144 61.144 0 0 0 39.74-.326Zm51.067 104.965a34.92 34.92 0 0 1-24.857 10.294h-93.12a35.19 35.19 0 0 1-35.15-35.15 48.387 48.387 0 0 1 25.638-42.712l26.218-13.977a34.875 34.875 0 0 0 60.435.39l25.493 13.588a48.298 48.298 0 0 1 25.636 42.71 34.918 34.918 0 0 1-10.293 24.857Z" fill={color}/>
        </svg>
    );
};