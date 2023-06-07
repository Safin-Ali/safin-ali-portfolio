import navLinks from '@/data/nav-links';
import React from 'react';
interface PropsType { };

export default function NavBar() {

  return (
    <header>
      <nav className={`nav-container d-v-flex customise-container`}>

        {/* Web Name */ }
        <div>
          Safin Ali
        </div>

        {/* Nav Items */ }

        <div className={`nav-items-container`}>
          <ul className={`d-full-flex`}>
            {
              navLinks.map(
                (link, idx) => <li
                  key={ idx }
                  className={`nav-item`}
                  aria-label={ `nav-link` }
                >
                  <a
                    href={link.value}>
                    { link.label }
                  </a>

                </li>
              )
            }
          </ul>
        </div>
      </nav>
    </header>
  );
};