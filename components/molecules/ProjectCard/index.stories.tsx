import ProjectCard from ".";
import { Project } from "../../../types";

export default {
    title: "molecules/ProjectCard",
    component: ProjectCard,
}

const project: Project = {
    imageSrc: "https://www.dropbox.com/s/v28g4u9bgfjz67d/MotorcyclistManager.png?raw=1",
    name: "Motorcyclist manager",
    description: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
    date: new Date(2019, 10, 2),
    githubLink: "https://github.com/Nacho-Fili/motorcyclist-manager",
    webLink: "https://motorcyclist-manager.vercel.app/",
    technologies: ["react", "node"],
}

export const Dark = () => <ProjectCard project={project} />