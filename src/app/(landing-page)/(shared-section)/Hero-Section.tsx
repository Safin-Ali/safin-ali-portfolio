import getGreeting from '@/utilities/get-greeting';
import Image from 'next/image';
import React from 'react';
import MouseScrollAnim from '@/components/Mouse-Scroll-Anim/Mouse-Scroll-Anim';
import MultiTextSlide from '@/components/Multi-Text-Slide/Multi-Text-Slide';
import SocialNav from '@/components/AppBar/Social-Nav';

export default function HeroSection() {

    return (
        <section className={ `customise-container` }>
            <div className={ `hero-section` }>

                <div className={ `d-v-flex w-full` }>

                    {/* hero content area */ }
                    <article className={ `hero-content` }>
                        <h1 className={ `hero-title` }>Hi, { getGreeting() }</h1>
                        <h2 className={ `hero-subtitle my-5 font-medium` }>
                            I&#39;m Safin Ali an <MultiTextSlide
                                textArr={ ['Front-End-Developer', 'Instractor'] }
                            />
                        </h2>

                        <p className={ `my-5` }>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis laudantium beatae dolore. Soluta, a autem, magni voluptates exercitationem similique harum non corrupti deleniti neque reprehenderit impedit ex. Laborum, provident veritatis!
                        </p>
                    </article>

                    {/* hero my image mockup */ }
                    <div className={ `basis-1/2` }>
                        <div className={ `w-full my-10 overflow-hidden` }>
                            <Image
                                src={ 'https://i.ibb.co/8MJBTHk/sa-fin-ali.jpg' }
                                alt={ `safin-ali-photo` }
                                width={ 350 }
                                height={ 250 }
                                className={ `hero-image` }
                            />
                        </div>
                    </div>
                </div>

                {/* scroll down anim */}
                <div className={ `mouse-scroll-anim-area` }>
                    <MouseScrollAnim />
                </div>

                {/* social network communicate icon */ }
                <div className={`social-network-icons position-v-center`}>
                    <SocialNav/>
                </div>
            </div>
        </section>
    );
};