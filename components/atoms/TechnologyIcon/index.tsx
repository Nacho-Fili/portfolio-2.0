import React from "react";
import styles from "./index.module.scss"

interface Props {
    url: string,
    alt: string,
}

const TechnologyIcon: React.FC<Props> = ({ url, alt }) => <img className={styles.icon} src={url} alt={alt} />

export default TechnologyIcon