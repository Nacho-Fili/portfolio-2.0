import React, { useContext } from "react"
import LanguageContext from "../../../context/language"
import Dictionary from "../../../Dictionary"
import SectionTitle from "../../atoms/SectionTitle"
import ContactForm from "../../molecules/ContactForm"
import styles from "./index.module.scss"

const ContactSection: React.FC = () => {

    const { selectedLanguage } = useContext(LanguageContext)

    return(
        <div id="contact" className={styles.mainContainer}>
            <SectionTitle title={Dictionary.contact[selectedLanguage]}/>
            <div className={styles.container}>
                <ContactForm />
            </div>
        </div>
    )
}

export default ContactSection