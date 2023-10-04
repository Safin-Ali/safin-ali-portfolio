interface SkillInfoShape {
	_id: string
    icon:string,
    name: string,
    level: 'Intermediate' | 'Familiar' | 'Expert' | 'Pro' | 'Future',
}

export interface SkillInfoType {
		'front-end': SkillInfoShape[],
		'back-end': SkillInfoShape[],
		'pg-lang': SkillInfoShape[],
		toolkit: SkillInfoShape[]
}