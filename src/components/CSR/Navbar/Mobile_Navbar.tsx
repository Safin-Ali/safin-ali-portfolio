'use client';
import React from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { FaRegLightbulb } from "react-icons/fa";
import { PiToolboxBold } from "react-icons/pi";
import { BsInfoSquare } from "react-icons/bs";
import { TbMessage } from "react-icons/tb";
import { GrArticle } from "react-icons/gr";
import Link from 'next/link';
import { navItems } from '@/data/nav-items';
import { usePathname } from 'next/navigation';

export default function Mobile_Navbar() {
	const iconComponents:{[key: string]: typeof IoHomeOutline} = {
		home: IoHomeOutline,
		skills: FaRegLightbulb,
		projects: PiToolboxBold,
		about: BsInfoSquare,
		contact: TbMessage,
		blogs: GrArticle
	};

	let path = usePathname().split('/')[1];

	path = !path.length ? '/' : `/${path}`;

	return (
		<nav className={`h-full`}>
			<section className={ `mobile_nav_container` }>

				{
					navItems.map(({ label, value }, idx) => {
						const IconComponent = iconComponents[label];
						return (
							<div
								key={ idx }
								className={`${(path === value ? 'pointer-events-none opacity-30' : '')}`}
							>
								<Link
									href={ value }
									prefetch={ false }
								>
									<div>
										{
											<IconComponent/>
										}
									</div>
									<span className={`capitalize block`}>{label}</span>
								</Link>
							</div>
						)
					})
				}


			</section>
		</nav>
	);
}