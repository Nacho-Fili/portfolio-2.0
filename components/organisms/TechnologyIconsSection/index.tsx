import React, { useContext, useEffect, useState } from "react";
import TechnologyIcons from "../../molecules/TechnologyIcons";
import styles from "./index.module.scss"
import SectionTitle from "../../atoms/SectionTitle";
import { Icon } from "../../../types";
import api from "./api";
import Loader from "../../atoms/Loader";
import LanguageContext from "../../../context/language";
import Dictionary from "../../../Dictionary";

const TechnologyIconsSection: React.FC = () => {
    const [icons, setIcons] = useState<Icon[]>([])
    const { selectedLanguage } = useContext(LanguageContext)

    useEffect(() => {
        api
            .get()
            .then(({ data }) => setIcons(data.icons))

    }, [])

    return (
        <div id="technologies" className={styles.mainContainer}>
            <SectionTitle title={Dictionary.technologies[selectedLanguage]}/>
            {icons.length
                ? <div className={styles.container}>
                    <TechnologyIcons icons={icons} />
                  </div>
                : <Loader />
            }
        </div>
    ) 
}

export default TechnologyIconsSection