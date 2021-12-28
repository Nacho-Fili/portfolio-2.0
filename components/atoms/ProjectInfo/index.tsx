import React from "react";
import { Project } from "../../../types"
import styles from "./index.module.scss"
import { AiFillGithub } from "react-icons/ai"

interface Props {
    project: Project,
}

const ProjectInfo: React.FC<Props> = ({ project: { technologies , imageSrc, name, description, githubLink } }) => 
    <div className={styles.container}>
        <img className={styles.img} src={imageSrc} />
        <div className={styles.secondaryContainer}>
            <h2 className={styles.title}>{name}</h2>
            <div className={styles.description}>{description}</div>
            <div className={styles.technology}>{technologies.join(" - ")}</div>
            <AiFillGithub className={styles.githubIcon} onClick={() => window.open(githubLink)} size={32}/>
        </div>
    </div>

export default ProjectInfo