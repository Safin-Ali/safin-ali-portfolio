type SkillLevelType = 'Average' | 'Familiar' | 'Expert' | 'Pro' | 'Future'

interface SkillInfoShape {
	_id: string
	icon: string,
	name: string,
	level: SkillLevel
}

export interface SkillInfoType {
	'front-end': SkillInfoShape[],
	'back-end': SkillInfoShape[],
	'pg-lang': SkillInfoShape[],
	toolkit: SkillInfoShape[]
}