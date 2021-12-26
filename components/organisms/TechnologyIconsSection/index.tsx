import React, { useEffect, useState } from "react";
import TechnologyIcons from "../../molecules/TechnologyIcons";
import styles from "./index.module.scss"
import SectionTitle from "../../atoms/SectionTitle";
import { Icon } from "../../../types";
import api from "./api";
import Loader from "../../atoms/Loader";

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