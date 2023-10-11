import Image from 'next/image';
import React from 'react';
interface PropsType {
    iconSRC: string,
    title: string,
    subtitle: string,
    width?: number,
    height?: number
};

export default function AboutCard({
    title,
    height= 35,
    iconSRC,
    subtitle,
    width= 35
}:PropsType) {

    return (
        <div className={`about-card-box`}>

            <div>
                <Image
                    src={iconSRC}
                    alt={`${title}-icon`}
                    width={width}
                    height={height}
                    className={`mx-auto dark:invert`}
                />
            </div>

            <h5 className={`about-card-title`}>{title}</h5>
            <h6 className={`about-card-subtitle`}>{subtitle}</h6>
        </div>
    );
};