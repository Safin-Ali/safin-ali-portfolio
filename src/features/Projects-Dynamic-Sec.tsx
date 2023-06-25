'use client'
import ProjectsTechBar from '@/components/AppBar/Projects-Tech-Bar';
import ProjectInfoCard from '@/components/Card/Project-Info-Card';
import projectsData from '@/data/projects-data';
import React, { useState } from 'react';

export default function ProjectsDynamicSec() {

  // const [projectsData, setProjectsData] = useState<any>();

  const [projectsCategory, setProjectsCategory] = useState<string>('javascript');

  const handleProjectsTech = (val: string) => setProjectsCategory(val);

  return (
    <div className={`my-5`}>

      <ProjectsTechBar callback={ handleProjectsTech } value={ projectsCategory } />

      <div className={`projects-showcase-container`}>

        {
          projectsData.map(dt => <ProjectInfoCard
            key={dt._id}
            live={dt.projectLiveURL}
            name={dt.projectName}
            source={dt.projectCodeURL}
            thumb={dt.projectThumb}
            others={dt.projectOthersInfo}
            />
            )
        }

      </div>

    </div>
  );
};