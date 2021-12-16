import TechnologiesList from ".";

export default {
    title: 'atoms/TechnologiesList',
    component: TechnologiesList,
}

const technologies = [ 'React', 'Node', 'Aws' ]

export const Dark = () => <TechnologiesList technologies={technologies} />