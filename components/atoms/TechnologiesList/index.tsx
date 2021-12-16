import React from "react"
import styles from "./index.module.scss"

interface Props {
    technologies: string[]
}

const TechnologiesList: React.FC<Props> = ({ technologies }) => <p className={styles.techList}>{technologies.join(' - ')}</p> 

export default TechnologiesList