'use client'
import getGreeting from '@/utilities/get-greeting';
import Image from 'next/image';
import React from 'react';

export default function GreetingMessage () {

 return (<span>
    { getGreeting().greet }

    <Image
        src={ getGreeting().shift
            ?
            'https://svgshare.com/i/u50.svg'
            :
            'https://svgshare.com/i/u4n.svg'
        }
        alt="moon"
        width={ 45 }
        height={ 45 }
        className={ `inline-block ml-1` }
    />
</span>
  );
};