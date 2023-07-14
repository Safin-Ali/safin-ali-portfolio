'use client'
import React from 'react';
import useAOS from '@/hooks/useAOS';
interface PropsType {
    children: React.ReactElement
};

export default function AnimAbout({ children }: PropsType) {

    // for aos animate on scroll
    useAOS();

    return (
        <div
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-offset="300"
        >
            {
                children
            }
        </div>

    );
};