import React from 'react';
import { TbWorldShare } from 'react-icons/tb';
import { SiGithub } from "react-icons/si";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	source:string,
	live:string
}

export default function Projects_Url_Btn_Group (props:Props) {

	const {live,source,className} = props;

	return (
		<div className={ `flex gap-2 mt-5 sm:mt-2 my-2 ${className || ''}` }>
		<div>
			<a className={ `primary_btn text-sm sm:text-base` } href={ source } target={ '_blank' }>
				<span>Source Code </span>
				<span className={`inline-block align-middle animate-bounce_low`}><SiGithub size={20}/></span>
			</a>
		</div>
		<div>
			<a className={ `primary_btn text-sm sm:text-base` } href={ live } target={ '_blank' }>
				<span>Live Demo </span>
				<span className={`inline-block align-middle animate-bounce_low`}><TbWorldShare size={21}/></span>
			</a>
		</div>
	</div>
	);
}