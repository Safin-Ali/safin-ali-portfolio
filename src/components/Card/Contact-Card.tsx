import React from 'react';
import {PiNavigationArrowThin} from 'react-icons/pi';


interface PropsType {
    type: string,
    path: string,
    icon: React.ReactElement
};

export default function ContactCard({
    path,
    type,
    icon
}: PropsType) {

    return (
        <div className={ `contact-card` }>

            <div className={`flex-full-center`}>
                {
                    icon
                }
            </div>

            <h3 className={ `capitalize basis-1/2` }>{ type }</h3>

            <h5><strong className={`font-semibold`}>{ path }</strong></h5>

            <div className={ `flex-full-center gap-2` }>
                <h6>Contact</h6>
                <div>
                    <PiNavigationArrowThin
                    size={20}
                    className={`navigate`}
                    />
                </div>
            </div>

        </div>
    );
};