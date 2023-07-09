import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { IoHomeOutline } from 'react-icons/io5';
import SkillSVG from '@/assets/icons/svg/Skill-SVG';
import AboutSVG from '@/assets/icons/svg/About-SVG';
import ServicesSVG from '@/assets/icons/svg/Services-SVG';
import FinishedProjectSVG from '@/assets/icons/svg/Finished-Project-SVG';
import ContactSVG from '@/assets/icons/svg/Contact-SVG';
interface PropsTypes {
    expandBool: boolean,
};

export default function ResNavBar({
    expandBool,
}: PropsTypes) {

    const [expand, setExpand] = useState<boolean>(false);

    useEffect(() => {
        if (expandBool) setExpand(true);
    }, [expandBool]);

    if (expand) {
        return (
            <div onAnimationEnd={ () => {
                if (!expandBool) setExpand(false);
            } }
                className={ `nav-expand ${expandBool ? 'mount-res-nav' : 'unmount-res-nav'}` }>
                <div className={ `res-nav-container` }>
                    <div>
                        <Link
                            to={ 'home-section' }
                            activeClass={ `res-nav-active` }
                            spy
                        >
                            <IoHomeOutline
                                size={ 35 }
                            />
                        </Link>
                    </div>

                    <div>
                        <Link
                            to={ 'about-section' }
                            activeClass={ `res-nav-active` }
                            spy
                        >
                            <AboutSVG
                                size={ 35 }
                            />
                        </Link>

                    </div>

                    <div>
                        <Link
                            to={ 'skills-section' }
                            activeClass={ `res-nav-active` }
                            spy
                        >
                            <SkillSVG
                                size={ 35 }
                            />
                        </Link>

                    </div>

                    <div>
                        <Link
                            to={ 'services-section' }
                            activeClass={ `res-nav-active` }
                            spy
                        >
                            <ServicesSVG
                                size={ 35 }
                                color={ 'none' }
                            />
                        </Link>

                    </div>

                    <div>
                        <Link
                            to={ 'projects-section' }
                            activeClass={ `res-nav-active` }
                            spy
                        >
                            <FinishedProjectSVG
                                size={ 35 }
                            />
                        </Link>
                    </div>

                    <div>

                        <Link
                            to={ 'contact-section' }
                            activeClass={ `res-nav-active` }
                            spy
                        >
                            <ContactSVG
                                size={ 35 }
                                color={ 'none' }
                            />
                        </Link>

                    </div>
                </div>
            </div>
        );
    };
};