import React, { useContext, useState } from "react"
import styles from "./index.module.scss"
import {GrLanguage} from "react-icons/gr"
import LanguageContext from "../../../context/language"

const LanguageSelector: React.FC = () => {
    
    const { showOptions } = useContext(LanguageContext)

    return(
        <div
            className={styles.container}
            onClick={showOptions}>
            <GrLanguage 
                className={styles.languageBorder} 
                color="#DDD"/>
        </div>
    )
}

export default LanguageSelector