import React from "react"
import styles from "./index.module.scss"

interface Props {
    title: string
}

const ExperienceTitle: React.FC<Props> = ({ title }) => <h2 className={styles.title}>{title}</h2>

export default ExperienceTitle