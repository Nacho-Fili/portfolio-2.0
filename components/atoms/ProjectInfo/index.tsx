import React from "react";
import { Project } from "../../../types"
import styles from "./index.module.scss"
import { AiFillGithub, AiOutlineEye } from "react-icons/ai"

interface Props {
    project: Project,
}

const ProjectInfo: React.FC<Props> = ({ project: { technologies , imageSrc, name, description, githubLink, webLink } }) => 
    <div className={styles.container}>
        <img className={styles.img} src={imageSrc} />
        <div className={styles.secondaryContainer}>
            <h2 className={styles.title}>{name}</h2>
            <div className={styles.description}>{description}</div>
            <div className={styles.technology}>{technologies.join(" - ")}</div>
            <div className={styles.iconsContainer}>
                <AiFillGithub className={styles.icon} onClick={() => window.open(githubLink)} size={32}/>
                <AiOutlineEye className={styles.icon} onClick={() => window.open(webLink)} size={32}/>
            </div>
        </div>
    </div>

export default ProjectInfo