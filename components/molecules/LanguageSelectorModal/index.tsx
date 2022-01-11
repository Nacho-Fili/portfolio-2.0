import React, { useContext } from "react";
import styles from "./index.module.scss"
import { motion } from "framer-motion"
import LanguageOption from "../../atoms/LanguageOption";
import LanguageContext from "../../../context/language";
import { languages } from "../../../types";

const LanguageSelectorModal: React.FC = () => {

    const { selectLanguage, hideOptions } = useContext(LanguageContext)

    return (
        <motion.div
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            animate={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
            transition={{ duration: 1.5 }}
            className={styles.cover}>
            <div className={styles.modal}>
                <div onClick={hideOptions} className={styles.closeButton}>X</div>
                <LanguageOption label="Español" onClick={() => { selectLanguage(languages.ES) }}/>
                <LanguageOption label="English" onClick={() => { selectLanguage(languages.EN) }}/>
            </div>
        </motion.div>  
    ) 
}

export default LanguageSelectorModal