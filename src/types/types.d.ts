export interface ProjectDataShortType {
	_id:string
	projectName: string;
	projectThumb: string;
	projectLiveURL: string;
	projectCodeURL: string;
	shortText: string;
};
export interface ProjectDataType extends ProjectDataShortType {
	projectOthersInfo: {
		challenges: string[];
		features: string[];
	};
	projectCategory: string[];
	projectTech: string[];
};