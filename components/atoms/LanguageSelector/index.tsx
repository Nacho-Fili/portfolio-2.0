import React, { useState } from "react"
import styles from "./index.module.scss"
import {GrLanguage} from "react-icons/gr"

const LanguageSelector: React.FC = () => {
    
    const [showLanguageOptions, setShowLanguageOptions] = useState<boolean>(false)

    const showOptions = () => setShowLanguageOptions(true)
    const hideOptions = () => setShowLanguageOptions(false)

    return(
        <div
            className={styles.container}
            onMouseEnter={showOptions} 
            onMouseLeave={hideOptions}>
            <GrLanguage 
                className={styles.languageBorder} 
                color="#DDD"/>
        </div>
    )
}

export default LanguageSelector