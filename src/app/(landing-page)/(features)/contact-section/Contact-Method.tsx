import ContactCard from '@/components/Card/Contact-Card';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import { LiaFacebookMessenger } from 'react-icons/lia';
import { FaWhatsapp } from 'react-icons/fa';
import React from 'react';
interface PropsType { };

export default function ContactMethod() {

    return (
        <>
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
                icon={ <FaWhatsapp size={ 25 } /> }
            />
        </>
    );
};