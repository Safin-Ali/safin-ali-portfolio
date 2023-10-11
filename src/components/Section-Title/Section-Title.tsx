import Image from 'next/image';
import React from 'react';
interface PropsType {
    title: string,
    sub_title: string,
    iconSRC:string
};

export default function SectionTitle({ sub_title, title,iconSRC }: PropsType) {

    return (
        <div className={`text-center`}>
            <div className={`flex-full-center mb-3 gap-3`}>
            <Image
                    src={iconSRC}
                    alt={`${title}_icon`}
                    width={30}
                    height={30}
                    style={{
                        objectFit:'cover'
                    }}
					className={`dark:invert`}
            />
            <h4 className={ `text-4xl font-bold` }>{ title }</h4>
            <Image
                    src={iconSRC}
                    alt={`${title}_icon`}
                    width={30}
                    height={30}
                    style={{
                        objectFit:'cover'
                    }}
					className={`dark:invert`}
            />
            </div>

            <h6 className={ `text-sm text-bl-sub-title dark:text-wh-menu-hover/80 font-medium` }>{ sub_title }</h6>
        </div>
    );
};