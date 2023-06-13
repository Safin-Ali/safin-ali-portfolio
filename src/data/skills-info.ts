import { SkillInfoType } from "@/types/skillls-info-type"

const frontEnd:SkillInfoType[] = [
    {
        _id: '1',
        icon: 'https://svgshare.com/i/u9n.svg',
        name: 'React.js',
        level: 'Expert'
    },
    {
        _id: '2',
        icon: 'https://svgshare.com/i/u8z.svg',
        name: 'Next.js',
        level: 'Intermediate'
    },
    {
        _id: '3',
        icon: 'https://svgshare.com/i/u8n.svg',
        name: 'Angular',
        level: 'Familiar'
    },
    {
        _id: '4',
        icon: 'https://svgshare.com/i/uAv.svg',
        name: 'Redux-Toolkit',
        level: 'Expert'
    },
    {
        _id: '5',
        icon: 'https://svgshare.com/i/u98.svg',
        name: 'Tailwind-CSS',
        level: 'Expert'
    },
    {
        _id: '6',
        icon: 'https://svgshare.com/i/u9w.svg',
        name: 'Material-UI',
        level: 'Intermediate'
    },
    {
        _id: '7',
        icon: 'https://svgshare.com/i/uAU.svg',
        name: 'jQuery',
        level: 'Intermediate'
    },
    {
        _id: '8',
        icon: 'https://svgshare.com/i/uAb.svg',
        name: 'Three.js',
        level: 'Future'
    },

];

const backEnd:SkillInfoType[] = [
    {
        _id: '1',
        icon: 'https://svgshare.com/i/u9h.svg',
        name: 'Express.js',
        level: 'Expert'
    },
    {
        _id: '2',
        icon: 'https://svgshare.com/i/uAV.svg',
        name: 'Nest.js',
        level: 'Familiar'
    },
    {
        _id: '3',
        icon: 'https://svgshare.com/i/uAc.svg',
        name: 'Prisma-ORM',
        level: 'Future'
    },
    {
        _id: '4',
        icon: 'https://svgshare.com/i/uAJ.svg',
        name: 'Mongoose-ODM',
        level: 'Intermediate'
    },
    {
        _id: '5',
        icon: 'https://svgshare.com/i/uBc.svg',
        name: 'Socket.io',
        level: 'Future'
    },
    {
        _id: '6',
        icon: 'https://svgshare.com/i/uBd.svg',
        name: 'Graph-QL',
        level: 'Future'
    },
    {
        _id: '7',
        icon: 'https://svgshare.com/i/uCu.svg',
        name: 'MongoDB',
        level: 'Intermediate'
    },
    {
        _id: '8',
        icon: 'https://svgshare.com/i/uCi.svg',
        name: 'EJS',
        level: 'Future'
    },

];

const programmingLanguages:SkillInfoType[] = [
    {
        _id: '1',
        icon: 'https://svgshare.com/i/uC6.svg',
        name: 'JavaScript',
        level: 'Expert'
    },
    {
        _id: '2',
        icon: 'https://svgshare.com/i/u9m.svg',
        name: 'TypeScript',
        level: 'Intermediate'
    },
    {
        _id: '3',
        icon: 'https://svgshare.com/i/uBy.svg',
        name: 'Python',
        level: 'Familiar'
    },
    {
        _id: '4',
        icon: 'https://svgshare.com/i/uCk.svg',
        name: 'PHP',
        level: 'Familiar'
    },
    {
        _id: '5',
        icon: 'https://svgshare.com/i/uCv.svg',
        name: 'Java',
        level: 'Future'
    },
    {
        _id: '6',
        icon: 'https://svgshare.com/i/uBZ.svg',
        name: 'Rust',
        level: 'Future'
    },
    {
        _id: '7',
        icon: 'https://svgshare.com/i/uDW.svg',
        name: 'Swift',
        level: 'Future'
    },
    {
        _id: '8',
        icon: 'https://svgshare.com/i/uB_.svg',
        name: 'GoLang',
        level: 'Future'
    },


];

const tool:SkillInfoType[] = [
    {
        _id: '1',
        icon: 'https://svgshare.com/i/uAs.svg',
        name: 'VS-Code',
        level: 'Intermediate'
    },
    {
        _id: '2',
        icon: 'https://svgshare.com/i/uD5.svg',
        name: 'Git',
        level: 'Intermediate'
    },
    {
        _id: '3',
        icon: 'https://svgshare.com/i/uC9.svg',
        name: 'Figma',
        level: 'Intermediate'
    },
    {
        _id: '3',
        icon: 'https://svgshare.com/i/uDG.svg',
        name: 'AD-Photoshop',
        level: 'Familiar'
    },
    {
        _id: '4',
        icon: 'https://svgshare.com/i/uD6.svg',
        name: 'Postman',
        level: 'Familiar'
    },
    {
        _id: '5',
        icon: 'https://svgshare.com/i/uDT.svg',
        name: 'ESLint',
        level: 'Familiar'
    },
    {
        _id: '5',
        icon: 'https://svgshare.com/i/uDU.svg',
        name: 'Babel',
        level: 'Familiar'
    },
    {
        _id: '6',
        icon: 'https://svgshare.com/i/uCw.svg',
        name: 'Webpack',
        level: 'Familiar'
    },
];

const skills = {
    'front-end': frontEnd,
    'back-end': backEnd,
    'pg-lang': programmingLanguages,
    toolkit: tool
};

export default skills;