import React from "react"
import styles from "./index.module.scss"

interface Props {
    description: string
}

const ExperienceDescription: React.FC<Props> = ({ description }) => <p className={styles.paragraph}>{description}</p>

export default ExperienceDescription