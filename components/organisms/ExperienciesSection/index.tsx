import React, { useEffect, useState } from "react";
import ExperienciesTemplate from "../../molecules/ExperienceTemplate"
import styles from "./index.module.scss"
import SectionTitle from "../../atoms/SectionTitle";
import api from "./api";
import { Experience } from "../../../types";
import Loader from "../../atoms/Loader";



const ExperienciesSection: React.FC = () => {
    const [experience, setExperience] = useState<Experience>()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        setIsLoading(true)
        api
            .get()
            .then(({ data }) => setExperience(data.experience))
            .finally(() => setIsLoading(false))
    }, [])
    
    return(
        <div id="experience" className={styles.mainContainer}>
            <SectionTitle title="Experiencia" />
            {isLoading 
                ? <Loader />
                : <div className={styles.container}>
                    {experience && <ExperienciesTemplate experience={experience} />}
                  </div>
                
            }
        </div>
    )
}

export default ExperienciesSection