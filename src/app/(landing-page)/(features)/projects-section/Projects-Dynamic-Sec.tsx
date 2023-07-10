'use client'
import ProjectsTechBar from '@/components/AppBar/Projects-Tech-Bar';
import ProjectInfoCard, { ProjetOtherInfoType } from '@/components/Card/Project-Info-Card';
import ModalBase from '@/components/Modal/Modal-Base';
import projectsData from '@/data/projects-data';
import useModalToggler from '@/hooks/useModal';
import React, { useState } from 'react';
import ProjectMoreInfo from './Project-More-Info';

export interface ModalStateType extends ProjetOtherInfoType {
  projectName:string,
  projectlibrary:string[]
}

export default function ProjectsDynamicSec() {

  const {modalVal,closeModal,modalCurrentEvent,toggleModal} = useModalToggler<HTMLElement | null>();

  const [modalMoreInfoData,setModalMoreInfoData] = useState<ModalStateType>({
    challenges: [''],
    features: [''],
    projectName: '',
    projectlibrary: ['']
  });

  const [projectsCategory, setProjectsCategory] = useState<string>('javascript');

  const handleProjectsTech = (val: string) => setProjectsCategory(val);

  const handleModalData = (moreInfo:ModalStateType):void => setModalMoreInfoData({
    challenges: moreInfo.challenges,
    features: moreInfo.features,
    projectName: moreInfo.projectName,
    projectlibrary: moreInfo.projectlibrary
  })

  return (
    <div className={`my-5`}>

      <div className={`my-5`}>
        <ProjectsTechBar callback={ handleProjectsTech } value={ projectsCategory } />
      </div>

      <div className={`projects-showcase-container`}>

        {
          projectsData.map(dt => <ProjectInfoCard
            key={dt._id}
            live={dt.projectLiveURL}
            name={dt.projectName}
            source={dt.projectCodeURL}
            thumb={dt.projectThumb}
            others={dt.projectOthersInfo}
            moreInfoModalToggle={toggleModal}
            handleModalInfo={handleModalData}
            shortText={dt.shortText}
            projectCategory={dt.projectCategory}
            projectlibrary={dt.projectUsedLib}
            />
            )
        }

      </div>

          <ModalBase
            modalToggle={{
              closeModal,
              setCurrentEvent:modalCurrentEvent
            }}
            modalStatusVal={modalVal}
          >
            <ProjectMoreInfo
              modalInfo={modalMoreInfoData}
              closeModal={closeModal}
            />
          </ModalBase>

    </div>
  );
};