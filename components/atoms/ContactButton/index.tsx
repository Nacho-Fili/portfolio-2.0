import { useRouter } from "next/dist/client/router"
import React, { useContext } from "react"
import LanguageContext from "../../../context/language"
import Dictionary from "../../../Dictionary"

import styles from "./index.module.scss"

const ContactButton = () => {

    const router = useRouter()

    const { selectedLanguage } = useContext(LanguageContext)

    return(
        <button onClick={() => router.push("/#contact")} className={styles.contactButton}>
            {Dictionary.contact[selectedLanguage]}
        </button>
    )
}

export default ContactButton