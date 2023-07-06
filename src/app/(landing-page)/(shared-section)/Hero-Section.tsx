import SocialNav from '@/components/AppBar/Social-Nav';
import GreetingMessage from '@/components/Greating-Message/Greeting-Message';
import MouseScrollAnim from '@/components/Mouse-Scroll-Anim/Mouse-Scroll-Anim';
import MultiTextSlide from '@/components/Multi-Text-Slide/Multi-Text-Slide';
import Image from 'next/image';

export default function HeroSection() {

    return (
        <section id={'home-section'} className={ `customise-container` }>
            <div className={ `hero-section` }>

                <div className={ `flex-v-center w-full` }>

                    {/* hero content area */ }
                    <article className={ `hero-content` }>
                        <h1 className={ `hero-title` }>
                            <span className={ `mx-3` }>Hi<Image
                                src={ `https://i.ibb.co/r7yW7fg/waving-hand.gif` }
                                alt={ `hi_emoji` }
                                width={ 40 }
                                height={ 40 }
                                className={ `inline-block mb-3` }
                            />,
                            </span>

                            <GreetingMessage/>
                        </h1>
                        <h2 className={ `hero-subtitle my-5 font-medium` }>
                            I&#39;m Safin Ali a <MultiTextSlide
                                textArr={ ['Web App Developer', 'Instractor'] }
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