import projectsTechStack from '@/data/projects-tech-list';
import React from 'react';
interface PropsType {
  callback: (val:string) => void,
  value: string
};

export default function ProjectsTechBar ({
  callback,
  value
}:PropsType) {

 return (
    <div>

        <ul className={`projects-tech-bar-container`}>
          {
            projectsTechStack.map((elm,idx) => <li key={idx+1} onClick={() => callback(elm.value)} aria-label={'project-category'} className={elm.value === value ? 'bg-bl-base text-white' : '' }>{elm.name}</li>)
          }
        </ul>

    </div>
  );
};