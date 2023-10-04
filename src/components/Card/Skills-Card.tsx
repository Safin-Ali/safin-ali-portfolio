'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import SimpleTooltip from '../Tooltip/Simple-Tooltip';
import { SkillLevelType } from '@/types/skillls-info-type';
interface PropsType {
    iconSRC: string,
    level: SkillLevelType,
    name: string
};

export default function SkillsCard({
    iconSRC,
    level,
    name
}: PropsType) {

    const [toolBool, setTool] = useState<boolean>(false)

    return (
        <div
            onMouseEnter={ () => setTool(true) }
            onMouseLeave={ () => setTool(false) }
            className={ `skill-card-box ${level.toLocaleLowerCase() === 'future' ? 'opacity-40' : 'hover:scale-105'}` }
        >

            {/* Skill Icon */ }
            <div className={ `h-[35px]` }>
                <Image
                    src={ iconSRC }
                    alt={ `${name}_icon` }
                    width={ 100 }
                    height={ 100 }
                />
            </div>

            {/* Skill Level */ }
            <div className={ `text-center` }>
                <small className={ `text-neutral-500 font-medium` }>{ level }</small>
            </div>

            {
                toolBool
                &&
                <SimpleTooltip style={ { top: '-53%' } }>
                    {
                        name
                    }
                </SimpleTooltip>
            }
        </div>
    );
};