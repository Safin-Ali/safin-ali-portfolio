import React from 'react';
interface PropsType {
    center?: boolean
};

export default function MouseScrollAnim({
    center = true
}: PropsType) {

    return (
            <div className={ `mousey ${center ? 'mx-auto' : ''}` }>
                <div className={'scroller'}></div>
            </div>
    )
};