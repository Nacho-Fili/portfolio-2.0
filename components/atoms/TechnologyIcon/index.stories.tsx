import TechnologyIcon from ".";

export default {
    title: "atoms/Icon",
    component: TechnologyIcon,
}

const url = "https://icongr.am/devicon/typescript-plain.svg?size=128&color=currentColor"

export const Dark = () => <TechnologyIcon url={url} alt="Typescript" />