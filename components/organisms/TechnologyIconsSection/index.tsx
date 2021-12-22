import React, { useEffect, useState } from "react";
import TechnologyIcons from "../../molecules/TechnologyIcons";
import styles from "./index.module.scss"
import SectionTitle from "../../atoms/SectionTitle";
import { Icon } from "../../../types";
import api from "./api";

const TechnologyIconsSection: React.FC = () => {
    const [icons, setIcons] = useState<Icon[]>([])
    
    useEffect(() => {
        api
            .get()
            .then(({ data }) => setIcons(data.icons))

    }, [])

    return (
        <div id="technologies" className={styles.mainContainer}>
            <SectionTitle title="Tecnologías"/>
            <div className={styles.container}>
                <TechnologyIcons icons={icons} />
            </div>
        </div>
    ) 
}

export default TechnologyIconsSection