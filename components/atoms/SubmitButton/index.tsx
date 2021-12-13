import React from "react"
import styles from "./index.module.scss"

const SubmitButton: React.FC = () => {
    return (
        <button className={styles.submitButton}>
            Submit
        </button>
    )
}

export default SubmitButton