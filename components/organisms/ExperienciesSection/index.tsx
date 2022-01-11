import React, { useContext, useEffect, useState } from "react";
import ExperienciesTemplate from "../../molecules/ExperienceTemplate"
import styles from "./index.module.scss"
import SectionTitle from "../../atoms/SectionTitle";
import api from "./api";
import { Experience } from "../../../types";
import Loader from "../../atoms/Loader";
import LanguageContext from "../../../context/language";
import Dictionary from "../../../Dictionary";



const ExperienciesSection: React.FC = () => {
    const [experience, setExperience] = useState<Experience>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { selectedLanguage } = useContext(LanguageContext)

    useEffect(() => {
        setIsLoading(true)
        api
            .get(selectedLanguage)
            .then(({ data }) => setExperience(data.experience))
            .finally(() => setIsLoading(false))
    }, [selectedLanguage])
    
    return(
        <div id="experience" className={styles.mainContainer}>
            <SectionTitle title={Dictionary.experience[selectedLanguage]} />
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