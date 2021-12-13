import React from "react"
import Introduce from "../../atoms/Introduce"
import ContactButton from "../../atoms/ContactButton"
import styles from "./index.module.scss"

const Hero: React.FC = () => {
    return(
        <div className={styles.container}>
            <Introduce/>
            <ContactButton />
        </div>
    )
}

export default Hero