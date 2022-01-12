import React, { useState, useEffect, useContext } from "react";
import LanguageContext from "../../../context/language";
import Dictionary from "../../../Dictionary";
import { Project } from "../../../types";
import Loader from "../../atoms/Loader";
import SectionTitle from "../../atoms/SectionTitle";
import ProjectCards from "../../molecules/ProjectCards";
import api from "./api";
import styles from "./index.module.scss"

const ProjectsSection: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([])
    const { selectedLanguage } = useContext(LanguageContext)

    useEffect(() => {
        api
            .get(selectedLanguage)
            .then(({ data }) => {
                setProjects([ ...data.projects ])
            })
    }, [selectedLanguage])

    return(
        <div className={styles.container} id="projects">
            <SectionTitle title={Dictionary.projects[selectedLanguage]}/>
            {projects.length
                ? <ProjectCards projects={projects}/>
                : <Loader />
            }
        </div>
    )
}

export default ProjectsSection