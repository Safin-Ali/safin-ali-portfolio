import ContactCard from '@/components/Card/Contact-Card';
import SectionTitle from '@/components/Section-Title/Section-Title';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import { LiaFacebookMessenger } from 'react-icons/lia';
import { FaWhatsapp } from 'react-icons/fa';
import React from 'react';

export default function ContactSection() {

    return (
        <section id={ 'contact-section' } className={ `customise-container my-10` }>

            <SectionTitle
                iconSRC={ 'https://svgshare.com/i/uss.svg' }
                title={ 'Contact Me' }
                sub_title={ 'Get in Touch' }
            />

            {/* contact layout */ }

            <div className={ `flex-full-center my-5` }>

                {/* contact others method card */ }

                <div>
                    <ContactCard
                        path={ 'safin.ali.7205@gmail.com' }
                        type={ 'email' }
                        icon={ <HiOutlineEnvelope size={ 25 } /> }
                    />
                    <ContactCard
                        path={ 'safin.ali.7205' }
                        type={ 'Messenger' }
                        icon={ <LiaFacebookMessenger size={ 30 } /> }
                    />
                    <ContactCard
                        path={ '+880 1316987205' }
                        type={ 'WhatsApp' }
                        icon={ <FaWhatsapp size={25}/> }
                    />
                </div>

            </div>

        </section>
    );
};