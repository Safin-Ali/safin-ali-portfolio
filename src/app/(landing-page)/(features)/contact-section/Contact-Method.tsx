import ContactCard from '@/components/Card/Contact-Card';
import { LuLinkedin } from 'react-icons/lu';
import { LiaFacebookMessenger } from 'react-icons/lia';
import { FaWhatsapp } from 'react-icons/fa';
import React from 'react';

export default function ContactMethod() {

	const myNumber = '+8801316987205';


	return (
		<>
			<ContactCard
				path={ 'safin-ali' }
				url={ 'https://www.linkedin.com/in/safin-ali/' }
				type={ 'Linkedin' }
				icon={ <LuLinkedin size={ 27 } /> }
			/>
			<ContactCard
				path={ 'safin.ali.7205' }
				url={ 'http://m.me/safin.ali.7205' }
				type={ 'Messenger' }
				icon={ <LiaFacebookMessenger size={ 30 } /> }
			/>
			<ContactCard
				path={ myNumber }
				url={ `https://web.whatsapp.com/send?phone=${myNumber}` }
				type={ 'WhatsApp' }
				icon={ <FaWhatsapp size={ 25 } /> }
			/>
		</>
	);
};