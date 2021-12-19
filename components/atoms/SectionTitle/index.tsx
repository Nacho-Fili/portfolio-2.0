import React from "react";
import styles from "./index.module.scss"

interface Props {
    title: string,
}

const SectionTitle: React.FC<Props> = ({ title }) => 
    <h1 className={styles.sectionTitle}> { title } </h1>

export default SectionTitle