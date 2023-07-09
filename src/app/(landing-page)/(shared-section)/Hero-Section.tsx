import SocialNav from '@/components/AppBar/Social-Nav';
import MouseScrollAnim from '@/components/Mouse-Scroll-Anim/Mouse-Scroll-Anim';
import MultiTextSlide from '@/components/Multi-Text-Slide/Multi-Text-Slide';
import Image from 'next/image';

export default function HeroSection() {

    return (
        <section id={'home-section'} className={ `customise-container` }>
            <div className={ `hero-section` }>

                <div className={ `flex-col flex-v-center md:flex-row w-full` }>

                    {/* hero content area */ }
                    <article className={ `hero-content` }>
                        <h1 className={ `hero-subtitle` }>
                        I&#39;m Safin Ali a <MultiTextSlide
                                textArr={ ['Web App Developer', 'Instractor'] }
                            />
                        </h1>

                        <p className={ `text-sm md:text-base my-5` }>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis laudantium beatae dolore. Soluta, a autem, magni voluptates exercitationem similique harum non corrupti deleniti neque reprehenderit impedit ex. Laborum, provident veritatis!
                        </p>
                    </article>

                    {/* hero my image mockup */ }
                    <div className={ `basis-1/2` }>
                        <div className={ `w-2/3 md:w-full md:my-10 mx-auto overflow-hidden` }>
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

                {/* scroll down anim */ }
                <div className={ `mouse-scroll-anim-area` }>
                        <MouseScrollAnim />
                    <div className={`font-medium text-sm`}>
                        <span className={`mx-2`}>Scroll down</span>
                        <span>
                            <svg style={{display:'inline-block'}} xmlns="http://www.w3.org/2000/svg" width={15} height={15} id="caret-down" viewBox="42 90 172 92"><rect width="256" height="256" fill="none"></rect><polyline fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" points="208 96 128 176 48 96"></polyline></svg>
                        </span>
                    </div>
                </div>

                {/* social network communicate icon */ }
                <div className={ `social-network-icons position-v-center` }>
                    <SocialNav size={25} className={`social-nav-icons`}/>
                </div>
            </div>
        </section>
    );
};