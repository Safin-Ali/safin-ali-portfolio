'use client'
import React from 'react';
import useAOS from '@/hooks/useAOS';
interface PropsType {
    children: React.ReactElement
};

export default function AnimFooter({ children }: PropsType) {

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