import { SVGType } from "@/types/svg-component-type";
import React from 'react';

export default function SkillSVG({
    className = '',
    color = '#000000',
    size = 20
}: SVGType) {

    return (
        <svg className={ className }
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            width={ size }
            height={ size }
            fill={color}
        >
            <path d="M31.992 2a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1 1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zM15.024 15.448a1 1 0 1 0 1.415-1.414L12.902 10.5a1 1 0 1 0-1.414 1.414zM9 30.007l-5 .002a1 1 0 0 0 0 2l5-.002a1 1 0 0 0 0-2zm39.976 16.545a1 1 0 1 0-1.414 1.414l3.536 3.534a1 1 0 1 0 1.414-1.414zm-33.952 0-3.536 3.534a1 1 0 1 0 1.414 1.414l3.537-3.534a1 1 0 1 0-1.415-1.414zM60 29.992l-5 .001a1 1 0 0 0 0 2h.001l5-.002a1 1 0 0 0 0-2zm-11.742-14.26a.998.998 0 0 0 .708-.293L52.5 11.9a1 1 0 0 0-1.416-1.414l-3.534 3.537a1 1 0 0 0 .707 1.707zm-.873 22.383a17.976 17.976 0 0 0-.282-17.283 17.187 17.187 0 0 0-13.988-8.8h-.002a20.203 20.203 0 0 0-2.228 0 17.187 17.187 0 0 0-13.987 8.8 17.976 17.976 0 0 0-.283 17.283L23 50.247V55a7.008 7.008 0 0 0 7 7h4a7.008 7.008 0 0 0 7-7v-4.753zM25 54v-3h14v3zm-6.361-32.185a15 15 0 0 1 12.359-7.787 18.02 18.02 0 0 1 2.002 0 15.001 15.001 0 0 1 12.361 7.787 15.986 15.986 0 0 1 .255 15.369L39.396 49H33v-8.35a11.88 11.88 0 0 0 1.598.125 6.477 6.477 0 0 0 4.725-1.73c3.13-3.064 1.988-8.99 1.937-9.24a.996.996 0 0 0-1.176-.785c-4.3.86-6.837 4.937-8.084 7.664-1.247-2.727-3.784-6.804-8.084-7.664a.997.997 0 0 0-1.176.784c-.05.251-1.193 6.177 1.937 9.241a6.476 6.476 0 0 0 4.725 1.73A11.885 11.885 0 0 0 31 40.65V49h-6.396l-6.22-11.816a15.986 15.986 0 0 1 .255-15.369zm14.69 16.871c.756-1.958 2.708-6.08 6.12-7.405.165 1.827.057 4.785-1.525 6.335-1.008.984-2.55 1.345-4.595 1.07zm-2.659 0c-2.039.276-3.584-.084-4.59-1.067-1.685-1.645-1.672-4.705-1.523-6.336 3.408 1.327 5.358 5.447 6.114 7.404zM34 60h-4a5.008 5.008 0 0 1-4.899-4H38.9a5.008 5.008 0 0 1-4.9 4z" />
        </svg>
    );
};