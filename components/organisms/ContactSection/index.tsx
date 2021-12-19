import React from "react"
import SectionTitle from "../../atoms/SectionTitle"
import ContactForm from "../../molecules/ContactForm"
import styles from "./index.module.scss"

const ContactSection: React.FC = () => {
    return(
        <div className={styles.mainContainer}>
            <SectionTitle title="Contacto"/>
            <div className={styles.container}>
                <ContactForm />
            </div>
        </div>
    )
}

export default ContactSection