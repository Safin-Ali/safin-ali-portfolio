import React from 'react';
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareFacebook } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";

export default function Social_Block () {

	return (
		<>
		<div className={ `text-xl font-light text-primary-header-txt` }>
			Find out more —
		</div>

		<a className={ `duration-150 hover:text-sky-600` } href={ 'https://www.linkedin.com/in/safin-ali/' } target={ '_blank' }>
			<IoLogoLinkedin size={ 25 } />
		</a>
		<a className={ `duration-150 hover:text-blue-600` } href={ 'https://www.facebook.com/safin.ali.7205' } target={ '_blank' }>
			<FaSquareFacebook size={ 25 } />
		</a>
		<a className={ `duration-150 hover:text-gray-950` } href={ 'https://github.com/Safin-Ali/' } target={ '_blank' }>
			<SiGithub className={ `rounded-full duration-200 ease-in-out hover:bg-primary-header-txt` } size={ 25 } />
		</a>
		</>
	);
}