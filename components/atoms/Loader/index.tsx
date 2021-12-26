import React from "react"
import styles from "./index.module.scss"

const Loader:  React.FC = () =>
    <div className={styles.container}> 
        <div className={styles.spinner} />
    </div>

export default Loader