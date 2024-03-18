'use client';
import { navItems } from '@/data/nav-items';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Navbar() {

	let path = usePathname().split('/')[1];

	path = !path.length ? '/' : `/${path}`;

	return (
		<nav>
			<ul className={ `nav_container` }>
				{ navItems.map(item => (
					<li
					key={ item.value }
					className={`${(path === item.value ? 'pointer-events-none text-blue-600 font-normal' : '')}`}
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
