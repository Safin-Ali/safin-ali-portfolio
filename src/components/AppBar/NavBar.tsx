'use client'
import navLinks from '@/data/nav-links';
import useScreenWidth from '@/hooks/useScreenWidth';
import Image from 'next/image';
import NavLink from "next/link";
import { Link as SLink } from 'react-scroll';
import ResNavBar from './Res-NavBar';
import { TbLayoutGridAdd } from 'react-icons/tb';
import { BsUiChecksGrid } from 'react-icons/bs';
import { memo, useState } from 'react';
import useAOS from '@/hooks/useAOS';
import ThemeToggle from '../Button/Theme-Toggle';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default memo(function NavBar() {

	const screenWidth = useScreenWidth();

	const [resNav, setResNav] = useState<boolean>(false);

	// for aos animate on scroll
	useAOS();

	// get paths in current location
	const path = usePathname();

	return (
		<header
			data-aos="fade-down"
		>
			<nav
				className={ `nav-container flex-v-center customise-container` }
			>

				{/* Web Name */ }
				<div className={ `w-2/5 sm:w-3/5 md:w-full` } title={ 'Web Name (Safin)' }>
					<span className={ `text-3xl font-mono dark:invert` }>
						<NavLink href={ '/' }>
							<Image
								src={ 'https://svgshare.com/i/uD_.svg' }
								width={ 200 }
								height={ 200 }
								alt={ 'Safin-Logo' }
							/>
						</NavLink>
					</span>
				</div>

				{
					screenWidth >= 768
						?
						// desktop screen nav
						<>

							{/* Nav Items */ }

							<div className={ `nav-items-container` }>
								<ul className={ `flex-full-center` }>
									{
										navLinks.map(
											(link, idx) => <li
												key={ idx }
												aria-label={ `nav-link` }
											>
												<SLink
													className={ `nav-item` }
													activeClass={ `nav-active` }
													spy
													to={ link.value }
												>
													{ link.label
													}
												</SLink>

											</li>
										)
									}
									<li
										aria-label={ `nav-link` }
									>
										<Link
											href={'/blogs'}
											className={ `nav-item ${path === 'blogs' ? 'nav-active' : ''}` }
										>
											Blogs
										</Link>

									</li>

								</ul>
							</div>

							<div className={ `mx-2 mb-1.5` }>
								<ThemeToggle />
							</div>
						</>
						:
						// responsive navbar
						<div className={ `flex-full-center` }>
							<div className={ `mx-2 mb-1.5` }>
								<ThemeToggle />
							</div>
							{/* humburger icon */ }
							<div
								title={ 'Nav Grid Icon' }
								className={ `${!resNav ? 'rotate-[180deg]' : 'bg-zinc-700 dark:bg-bl-block-2'} cursor-pointer p-1.5 rounded-md` }
								onClick={ () => setResNav(!resNav) }
							>
								{
									!resNav
										?
										<TbLayoutGridAdd
											size={ 30 }
											className={ `animate-fade` }
										/>
										:
										<BsUiChecksGrid
											size={ 24 }
											className={ `animate-fade` }
											color={ '#ffffff' }
										/>
								}

							</div>

							{
								<ResNavBar
									expandBool={ resNav }
								/>
							}

						</div>
				}

			</nav>
		</header>
	);
});