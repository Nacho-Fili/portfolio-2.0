import React from "react";
import { Project } from "../../../types";
import ProjectCard from "../ProjectCard";
import styles from "./index.module.scss"

interface Props {
    projects: Project[],
}

const ProjectCards: React.FC<Props> = ({ projects }) => {
    return(
        <div className={styles.container}>
            {projects.map(project => <ProjectCard key={project.description} project={project}/>)}
        </div>
    )
}

export default ProjectCards