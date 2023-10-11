import React from 'react';
import { SiGithub } from 'react-icons/si';
import { BiLogoLinkedin,BiLogoFacebook } from 'react-icons/bi';
interface PropsType {
  size?:string | number
  className?:string
};
export default function SocialNav({
  className,
  size = 20
}:PropsType) {

  return (
    <>
      <div className={ className }>
        <a rel="noopener noreferrer" href="https://www.facebook.com/safin.ali.7205" target={ '_blank' }>

          <BiLogoFacebook
          size={size}
          />
        </a>
      </div>

      <div className={ className }>
        <a rel="noopener noreferrer" href="https://github.com/Safin-Ali/" target={ '_blank' }>
        <SiGithub
          size={size}
          />
        </a>
      </div>

      <div className={ className }>
        <a rel="noopener noreferrer" href="https://www.linkedin.com/in/safin-ali/" target={ '_blank' }>
        <BiLogoLinkedin
          size={size}
          />
        </a>
      </div>
    </>
  );
};