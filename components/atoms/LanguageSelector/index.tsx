import React from "react"
import styles from "./index.module.scss"
import {GrLanguage} from "react-icons/gr"

const LanguageSelector: React.FC = () => {
    return(
        <div className={styles.container}>
            <GrLanguage className={styles.languageBorder} color="#DDD"/>
        </div>
    )
}

export default LanguageSelector