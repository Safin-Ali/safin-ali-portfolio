import React from 'react';
import styleMouseScrollAnim from './mouse-scroll-anim.module.css';
interface PropsType {
    center?: boolean
};

export default function MouseScrollAnim({
    center = true
}: PropsType) {

    return (
            <div className={ `${styleMouseScrollAnim['mousey']} ${center ? styleMouseScrollAnim['scroller-center'] : ''}` }>
                <div className={ styleMouseScrollAnim['scroller'] }></div>
            </div>
    )
};