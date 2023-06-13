import AboutCard from '@/components/Card/About-Card';
import SectionTitle from '@/components/Section-Title/Section-Title';
import Image from 'next/image';
import React from 'react';
interface PropsType { };

export default function AboutSection() {

    return (
        <>
            <section id={ 'about-section' } className={ `customise-container my-20` }>
                <SectionTitle
                    title={ 'About Me' }
                    sub_title={ "My Introduction" }
                    iconSRC={'https://svgshare.com/i/uCr.svg'}
                />

                <div className={ `flex-full-center w-full` }>

                    {/* my professional image */ }
                    <div className={ `basis-1/2` }>
                        <div className={ `w-full my-10 overflow-hidden` }>
                            <Image
                                src={ 'https://i.ibb.co/8MJBTHk/sa-fin-ali.jpg' }
                                alt={ `safin-ali-photo` }
                                width={ 350 }
                                height={ 250 }
                                className={ `mx-auto -scale-x-100 rounded-md` }
                            />
                        </div>
                    </div>

                    {/* my short bio */ }
                    <div className={`basis-1/2`}>

                        {/* gained cards */ }

                        <div className={ `flex gap-5 justify-center ` }>
                            <AboutCard
                                iconSRC={ `https://svgshare.com/i/u8s.svg` }
                                title={ 'Experince' }
                                subtitle={ `${new Date().getFullYear() - 2022} years working` }

                            />
                            <AboutCard
                                iconSRC={ `https://svgshare.com/i/u7g.svg` }
                                title={ 'Completed' }
                                subtitle={ `3+ projects` }

                            />
                            <AboutCard
                                iconSRC={ `https://svgshare.com/i/u8c.svg` }
                                title={ 'Support' }
                                subtitle={ `8/24 hours` }

                            />
                        </div>

                        <article className={`my-10`}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laboriosam repellendus omnis voluptatem molestiae quas aliquam eos magni totam dolorem alias ducimus explicabo nisi sit earum sunt architecto rem distinctio, non nesciunt quia optio tenetur.</p>
                        </article>
                    </div>

                </div>
            </section>
        </>
    );
};