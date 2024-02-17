'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Navbar() {

	const navItems = [
		{ label: 'home', value: '/' },
		{ label: 'skills', value: '/skills' },
		{ label: 'projects', value: '/projects' },
		{ label: 'about', value: '/about' },
		{ label: 'contact', value: '/contact' },
		{ label: 'blogs', value: '/blogs' }
	];

	let path = usePathname().split('/')[1];

	path = !path.length ? '/' : `/${path}`;

	return (
		<nav>
			<ul className={ `nav_container` }>
				{ navItems.map(item => (
					<li
					key={ item.value }
					className={`${(path === item.value && 'pointer-events-none opacity-30')}`}
					>
						<Link href={ item.value }>
							{ item.label }
						</Link>
					</li>
				)) }
			</ul>
		</nav>
	);
}
