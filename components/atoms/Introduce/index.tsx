import React from "react";
import styles from "./index.module.scss"

const Introduce: React.FC = () => {
    return(
        <div>
            <h1 className={styles.name}>HI, I AM IGNACIO FILIPOVSKIS</h1>
            <h4 className={styles.subtitle}>Fullstack web developer</h4>
        </div>
    )
}

export default Introduce