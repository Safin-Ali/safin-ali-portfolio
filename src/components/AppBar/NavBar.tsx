'use client'
import navLinks from '@/data/nav-links';
import useScreenWidth from '@/hooks/useScreenWidth';
import Image from 'next/image';
import NavLink from "next/link";
import { Link } from 'react-scroll';
import ResNavBar from './Res-NavBar';
import { TbLayoutGridAdd } from 'react-icons/tb';
import { BsUiChecksGrid } from 'react-icons/bs';
import { useState } from 'react';
import useAOS from '@/hooks/useAOS';
import ThemeToggle from '../Button/Theme-Toggle';

export default function NavBar() {

	const screenWidth = useScreenWidth();

	const [resNav, setResNav] = useState<boolean>(false);

	// for aos animate on scroll
	useAOS();

	return (
		<header
			data-aos="fade-down"
		>
			<nav
				className={ `nav-container flex-v-center customise-container` }
			>

				{/* Web Name */ }
				<div className={ `w-2/5 sm:w-3/5 md:w-full` } title={ 'Web Name (Safin)' }>
					<span className={ `text-3xl font-mono` }>
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
												<Link
													className={ `nav-item` }
													activeClass={ `nav-active` }
													spy
													to={ link.value }
												>
													{ link.label
													}
												</Link>

											</li>
										)
									}
								</ul>
							</div>

							<div className={ `mx-2 mb-1.5` }>
								<ThemeToggle />
							</div>
						</>
						:
						// responsive navbar
						<div className={`flex-full-center`}>
							<div className={ `mx-2 mb-1.5` }>
								<ThemeToggle />
							</div>
							{/* humburger icon */ }
							<div
								title={ 'Nav Grid Icon' }
								className={ `${!resNav ? 'rotate-[180deg]' : 'bg-zinc-700'} cursor-pointer p-1.5 rounded-md` }
								onClick={ () => setResNav(!resNav) }
							>
								{
									!resNav
										?
										<TbLayoutGridAdd
											size={ 30 }
											className={ `anim-fade` }
										/>
										:
										<BsUiChecksGrid
											size={ 24 }
											className={ `anim-fade` }
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
};