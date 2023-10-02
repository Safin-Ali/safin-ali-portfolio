import React from 'react';
import styleLoader from './loading.style.module.css';
import { Bruno_Ace_SC } from 'next/font/google';

const font = Bruno_Ace_SC({
    fallback:['cursive'],
    weight:['400'],
    subsets:['latin','latin-ext']
  });

export default function NameLoader() {

    return (
        <>
            <svg
            className={`${styleLoader['my-name-anim-parent']} ${font.className}`}
            viewBox="0 0 1320 300">
                <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                    Safin Ali
                </text>
            </svg>
        </>
    );
};