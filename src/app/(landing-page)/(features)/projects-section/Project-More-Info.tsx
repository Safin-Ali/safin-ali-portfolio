import React from 'react';
import {IoClose} from 'react-icons/io5';
interface SubPropsType {
  projectName: string,
  features: string[],
  challenges: string[],
  projectlibrary: string[]
};
interface PropsType {
  modalInfo: SubPropsType,
  closeModal: () => void
};


export default function ProjectMoreInfo({
  modalInfo,
  closeModal
}: PropsType) {

  return (
    <div className={ `project-more-info` }>

      <div className={ `flex-v-center justify-between w-full px-2 pb-2 border-b dark:border-bl-block-2` }>
        <div className={ `w-full` }>
          <h2 className={ `font-semibold` }>{ modalInfo.projectName }</h2>
        </div>

        <div className={ `w-1/2` }>
          <IoClose
            onClick={ closeModal }
            size={40}
            style={
              {
                cursor: 'pointer',
                marginLeft: 'auto'
              }
            }
          />

        </div>
      </div>

      <div className={ `h-[calc(100%-25%)]` }>

        {/* features section */ }
        <div>
          <h3>Features</h3>
          <ol className={ `list-inside` }>
            {
              modalInfo.features.map(
                (feature, idx) => <li
                  key={ idx + 1 }
                  aria-label={ `${modalInfo.projectName}-features-${idx + 1}` }
                  className={ `my-2` }
                >
                  { feature }
                </li>
              )
            }
          </ol>
        </div>

        {/* challenges section */ }
        <div>
          <h3>Challanges</h3>
          <ol className={ `list-inside` }>
            {
              modalInfo.challenges.map(
                (challanges, idx) => <li
                  key={ idx + 1 }
                  aria-label={ `${modalInfo.projectName}-features-${idx + 1}` }
                  className={ `my-2` }
                >
                  { challanges }
                </li>
              )
            }
          </ol>
        </div>
      </div>

      {/* used library section */ }

      <div className={ `h-[calc(100%-87%)] overflow-hidden` }>
        <div className={ `project-more-library-info` }>
          {
            modalInfo.projectlibrary.map((lib, idx) => <div
              key={ idx }
              className={ `project-more-library-name` }
            >
              <div>
                <svg fill="none" width={ 15 } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#fff" fillOpacity=".01" d="M0 0h48v48H0z" /><path d="M24 33a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" strokeWidth="4" /></svg>
              </div>
              <div className={`pr-1 whitespace-nowrap`}>
                { lib }
              </div>
            </div>)
          }
        </div>
      </div>

    </div>
  );
};