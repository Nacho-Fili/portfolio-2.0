import TechnologyIcons from ".";

export default {
    title: 'molecules/TechnologyIcons',
    component: TechnologyIcons,
}

const icons = [
    {
        url: 'https://icongr.am/devicon/typescript-plain.svg?size=128&color=currentColor',
        alt: 'TypeScript'
    },
    {
        url: 'https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor',
        alt: 'JavaScript',
    },
    {
        url: 'https://icongr.am/devicon/nodejs-original.svg?size=128&color=currentColor',
        alt: 'Node',
    }
]

export const Dark = () => <TechnologyIcons icons={icons}/>