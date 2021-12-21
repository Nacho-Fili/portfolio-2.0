import React from "react"
import styles from "./index.module.scss"

interface Props {
    span?: number, 
}

const SubmitButton: React.FC<Props> = ({ span = 24 }) => {
    return (
        <div className={styles.container} style={{ width:`${(span/24)*100}%`}}>
            <button className={styles.submitButton}>
                Submit
            </button>
        </div>
    )
}

export default SubmitButton