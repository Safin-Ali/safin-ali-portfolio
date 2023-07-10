import SectionTitle from '@/components/Section-Title/Section-Title';
import ContactForm from '../(features)/contact-section/Contact-Form';
import ContactMethod from '../(features)/contact-section/Contact-Method';

export default function ContactSection() {

    return (
        <section id={ 'contact-section' } className={ `customise-container my-7 sm:my-10 md:my-20` }>

            <SectionTitle
                iconSRC={ 'https://svgshare.com/i/uss.svg' }
                title={ 'Contact Me' }
                sub_title={ 'Get in Touch' }
            />

            {/* contact layout */ }

            <div className={ `flex-full-center flex-col sm:flex-row my-5 sm:gap-x-20 md:gap-44` }>

                {/* contact others method card */ }

                <div className={`w-full md:w-auto`}>

                    <h4 className={ `text-center my-5` }>Talk with easily</h4>

                    {/* contact method cards */ }
                    <ContactMethod />

                </div>

                <div className={ `w-full sm:basis-3/4 md:basis-1/4 md:self-start` }>

                    <h4 className={ `text-center my-5` }>Talk via email</h4>

                    {/* contact form */ }

                    <ContactForm />
                </div>

            </div>

        </section>
    );
};