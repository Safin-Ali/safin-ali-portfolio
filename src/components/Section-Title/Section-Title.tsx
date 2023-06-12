import React from 'react';
interface PropsType {
    title: string,
    sub_title: string
};

export default function SectionTitle({ sub_title, title }: PropsType) {

    return (
        <div className={`text-center`}>
            <h4 className={ `text-4xl mb-3 font-bold` }>{ title }</h4>
            <h6 className={ `text-sm text-bl-sub-title font-medium` }>{ sub_title }</h6>
        </div>
    );
};