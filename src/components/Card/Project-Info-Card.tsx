import Image from 'next/image';
import React from 'react';
export type ProjetOtherInfoType = {
    shortText:string,
    challenges: string[],
    features: [string,string,string,string,string],
}
interface PropsType {
    thumb: string,
    name: string,
    live: string,
    source: string,
    others: ProjetOtherInfoType
};

export default function ProjectInfoCard({
    live,
    name,
    source,
    thumb,
    others
}: PropsType) {

    return (
        <figure
            aria-label={ 'project-information' }
            className={ `project-info-container` }
        >

            {/* Project Thumb */ }
            <div className={ `project-thumb` }>
                <Image
                    src={ thumb }
                    alt={ `${name}_thumbnail` }
                    width={ 500 }
                    height={ 350 }
                />
            </div>

            {/* project summmary */}

            <div title={'Project Summary'} className={`projecct-summary`}>
                {
                    others.shortText
                }
            </div>

            {/* Project Content */ }
            <div className={ `project-content` }>

                {/* project name */ }

                <div title={'project Title'}>
                    <h4 className={ `project-title` }>{name}</h4>
                </div>

                <div className={ `project-func-area` }>

                    <div title={'Live Site'}>
                        <a rel="noopener noreferrer" href={live} target={ '_blank' }>
                            <Image
                                src={ 'https://svgshare.com/i/ua4.svg' }
                                alt={ 'project_live_icon' }
                                width={ 25 }
                                height={ 25 }
                            />
                        </a>

                    </div>

                    <div title={'Source Code'}>
                        <a rel="noopener noreferrer" href={source} target={ '_blank' }>
                            <Image
                                src={ 'https://svgshare.com/i/ubw.svg' }
                                alt={ 'project_source_code_icon' }
                                width={ 25 }
                                height={ 25 }
                            />
                        </a>
                    </div>

                    <div title={'More Info'}>
                        <Image
                            src={ 'https://svgshare.com/i/uax.svg' }
                            alt={ 'three_dots_icon' }
                            width={ 6 }
                            height={ 5 }
                        />
                    </div>
                </div>

            </div>

        </figure>
    );
};