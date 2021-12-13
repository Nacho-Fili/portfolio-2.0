import React from "react"
import ContactForm from "../../molecules/ContactForm"
import styles from "./index.module.scss"

const ContactSection: React.FC = () => {
    return(
        <div className={styles.container}>
            <ContactForm />
        </div>
    )
}

export default ContactSection