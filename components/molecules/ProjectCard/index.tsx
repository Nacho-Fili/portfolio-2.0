import React from "react";
import { Project } from "../../../types";
import ProjectInfo from "../../atoms/ProjectInfo";
import styles from "./index.module.scss"

interface Props {
    project: Project,
}

const ProjectCard: React.FC<Props> = ({ project }) => {
    return (
        <div className={styles.container}>
            <ProjectInfo project={project}/>
        </div>
    );
}

export default ProjectCard