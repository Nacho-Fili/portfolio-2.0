import TechnologyIcon from ".";

export default {
    title: "atoms/Icon",
    component: TechnologyIcon,
}

const url = "https://icongr.am/devicon/typescript-plain.svg?size=128&color=currentColor"
const alt = "TypeScript"
const icon = {alt, url}
export const Dark = () => <TechnologyIcon icon={icon}  />