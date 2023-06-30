'use client'
import navLinks from '@/data/nav-links';
import Image from 'next/image';
import NavLink from "next/link";
import { Link } from 'react-scroll';
interface PropsType { };

export default function NavBar() {

  return (
    <header>
      <nav className={ `nav-container flex-v-center customise-container` }>

        {/* Web Name */ }
        <div>
          <span className={`text-3xl font-mono`}>
            <NavLink href={'/'}>
              <Image
                src={'https://svgshare.com/i/uD_.svg'}
                width={200}
                height={200}
                alt={'Safin-Logo'}
              />
            </NavLink>
          </span>
        </div>

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
                    activeClass={`nav-active`}
                    spy
                    to={ link.value }
                  >
                    {link.label
                    }
                  </Link>

                </li>
              )
            }
          </ul>
        </div>
      </nav>
    </header>
  );
};