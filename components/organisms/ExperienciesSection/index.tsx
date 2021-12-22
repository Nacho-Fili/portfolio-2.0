import React, { useEffect, useState } from "react";
import ExperienciesTemplate from "../../molecules/ExperienceTemplate"
import styles from "./index.module.scss"
import SectionTitle from "../../atoms/SectionTitle";
import api from "./api";
import { Experience } from "../../../types";



const ExperienciesSection: React.FC = () => {
    const [experience, setExperience] = useState<Experience>()

    useEffect(() => {
        api
            .get()
            .then(({ data }) => setExperience(data.experience))
    }, [])

    return(
        <div id="experience" className={styles.mainContainer}>
            <SectionTitle title="Experiencia" />
            <div className={styles.container}>
                {experience && <ExperienciesTemplate experience={experience} />}
            </div>
        </div>
    )
}

export default ExperienciesSection