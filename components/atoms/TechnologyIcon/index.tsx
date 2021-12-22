import React from "react";
import { Icon } from "../../../types";
import styles from "./index.module.scss"

interface Props {
    icon: Icon
}

const TechnologyIcon: React.FC<Props> = ({ icon: { url, alt } }) => <img className={styles.icon} src={url} alt={alt} />

export default TechnologyIcon