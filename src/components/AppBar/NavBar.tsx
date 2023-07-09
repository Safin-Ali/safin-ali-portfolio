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

export default function NavBar() {

  const screenWidth = useScreenWidth();

  const [resNav, setResNav] = useState<boolean>(false);

  return (
    <header>
      <nav
        className={ `nav-container flex-v-center customise-container` }
      >

        {/* Web Name */ }
        <div title={ 'Web Name' }>
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
            </>
            :
            // responsive navbar
            <>
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
                  expandBool={resNav}
                />
              }



            </>
        }

      </nav>
    </header>
  );
};