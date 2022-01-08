import React from "react";
import { Project } from "../../../types";
import ProjectInfo from "../../atoms/ProjectInfo";
import styles from "./index.module.scss"
import { motion } from "framer-motion"

interface Props {
    project: Project,
}

const ProjectCard: React.FC<Props> = ({ project }) => {
    return (
        <motion.div
            whileHover={{ boxShadow: "0 0 8px #63E2EB" }}
            transition={{
                duration: 1,
            }}
            className={styles.container}>
            <ProjectInfo project={project}/>
        </motion.div>
    );
}

export default ProjectCard