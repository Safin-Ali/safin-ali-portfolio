import SectionTitle from '@/components/Section-Title/Section-Title';
import React from 'react';
import ContactForm from '../(features)/contact-section/Contact-Form';
import ContactMethod from '../(features)/contact-section/Contact-Method';

export default function ContactSection() {

    return (
        <section id={ 'contact-section' } className={ `customise-container my-10` }>

            <SectionTitle
                iconSRC={ 'https://svgshare.com/i/uss.svg' }
                title={ 'Contact Me' }
                sub_title={ 'Get in Touch' }
            />

            {/* contact layout */ }

            <div className={ `flex-full-center my-5 gap-44` }>

                {/* contact others method card */ }

                <div>

                    <h4 className={ `text-center my-5` }>Talk with easily</h4>

                    {/* contact method cards */ }
                    <ContactMethod />

                </div>

                <div className={ `basis-1/4 self-start` }>

                    <h4 className={ `text-center my-5` }>Talk via email</h4>

                    {/* contact form */ }

                    <ContactForm />
                </div>

            </div>

        </section>
    );
};