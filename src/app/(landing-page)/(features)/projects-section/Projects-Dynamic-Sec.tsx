'use client'
import ProjectsTechBar from '@/components/AppBar/Projects-Tech-Bar';
import ProjectInfoCard, { ProjetOtherInfoType } from '@/components/Card/Project-Info-Card';
import ModalBase from '@/components/Modal/Modal-Base';
import useModalToggler from '@/hooks/useModal';
import React, { useEffect, useState } from 'react';
import ProjectMoreInfo from './Project-More-Info';
import API from '@/utilities/fetch-data';
import { ProjectDataType } from '@/types/projects-data-type';
import DefaultLoader from '@/components/Loading-Anim/Default-Loader';
import NotFound from '@/components/Error/Not-Found';

export interface ModalStateType extends ProjetOtherInfoType {
	projectName: string,
	projectlibrary: string[]
}

export default function ProjectsDynamicSec() {

	const { modalVal, closeModal, modalCurrentEvent, toggleModal } = useModalToggler<HTMLElement | null>();

	const [modalMoreInfoData, setModalMoreInfoData] = useState<ModalStateType>({
		challenges: [''],
		features: [''],
		projectName: '',
		projectlibrary: ['']
	});

	const [projectsData, setProjectsData] = useState<{
		loading: boolean,
		data: ProjectDataType[] | []
	}>({
		loading: true,
		data: []
	});

	const [projectsCategory, setProjectsCategory] = useState<string>('javascript');

	const handleProjectsTech = (val: string) => {
		setProjectsData({
			loading: true,
			data: []
		});
		setProjectsCategory(val)
	};

	useEffect(() => {
		(async () => {
			const data: ProjectDataType[] | [] = await API.get(`projects/categ?category=${projectsCategory}`);
			setProjectsData({
				loading: false,
				data
			});
		})()
	}, [projectsCategory]);

	const handleModalData = (moreInfo: ModalStateType): void => setModalMoreInfoData({
		challenges: moreInfo.challenges,
		features: moreInfo.features,
		projectName: moreInfo.projectName,
		projectlibrary: moreInfo.projectlibrary
	});

	if (projectsData.loading) return <div className={ `pt-5` }> <DefaultLoader /></div>;

	return (
		<div className={ `my-5` }>
			<div className={ `my-5` }>
				<ProjectsTechBar callback={ handleProjectsTech } value={ projectsCategory } />
			</div>
			{
				!projectsData.data.length
					?
					<div>
						<NotFound size={400}/>
					</div>
					:
					<>
						<div className={ `projects-showcase-container` }>

							{
								projectsData.data.map((dt: any) => <ProjectInfoCard
									key={ dt._id }
									live={ dt.projectLiveURL }
									name={ dt.projectName }
									source={ dt.projectCodeURL }
									thumb={ dt.projectThumb }
									others={ dt.projectOthersInfo }
									moreInfoModalToggle={ toggleModal }
									handleModalInfo={ handleModalData }
									shortText={ dt.shortText }
									projectCategory={ dt.projectCategory }
									projectlibrary={ dt.projectUsedLib }
								/>
								)
							}

						</div>

						<ModalBase
							modalToggle={ {
								closeModal,
								setCurrentEvent: modalCurrentEvent
							} }
							modalStatusVal={ modalVal }
						>
							<ProjectMoreInfo
								modalInfo={ modalMoreInfoData }
								closeModal={ closeModal }
							/>
						</ModalBase>
					</>
			}
		</div>
	);
};