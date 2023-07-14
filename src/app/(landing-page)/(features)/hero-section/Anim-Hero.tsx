'use client'
import useAOS from '@/hooks/useAOS';
import React from 'react';
interface PropsType {
    children: React.ReactElement
};

export default function AnimHero({
    children
}: PropsType) {

        // for aos animate on scroll
        useAOS();

    return (

        <div
        data-aos="fade-zoom-in"
        data-aos-duration="800"
        >
            {
                children
            }
        </div>
    );
};