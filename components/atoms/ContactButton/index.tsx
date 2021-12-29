import { useRouter } from "next/dist/client/router"
import React from "react"

import styles from "./index.module.scss"

const ContactButton = () => {

    const router = useRouter()

    return(
        <button onClick={() => router.push("/#contact")} className={styles.contactButton}>
            Contact
        </button>
    )
}

export default ContactButton