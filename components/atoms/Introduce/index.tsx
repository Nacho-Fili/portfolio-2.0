import React, { useContext } from "react";
import LanguageContext from "../../../context/language";
import Dictionary from "../../../Dictionary";
import styles from "./index.module.scss"

const Introduce: React.FC = () => {

    const { selectedLanguage } = useContext(LanguageContext)

    return(
        <div>
            <h1 className={styles.name}>{Dictionary.introduction[selectedLanguage].toUpperCase()}</h1>
            <h4 className={styles.subtitle}>Fullstack web developer</h4>
        </div>
    )
}

export default Introduce