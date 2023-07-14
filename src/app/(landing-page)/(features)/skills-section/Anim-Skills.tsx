'use client'
import useAOS from '@/hooks/useAOS';
import React from 'react';
interface PropsType {
    children: React.ReactElement
};

export default function AnimSkills({ children }: PropsType) {

        // for aos animate on scroll
        useAOS();

    return (
        <div
        data-aos="flip-left"
        data-aos-duration="800"
        data-aos-offset="400"
        >
            {
                children
            }
        </div>
    );
};