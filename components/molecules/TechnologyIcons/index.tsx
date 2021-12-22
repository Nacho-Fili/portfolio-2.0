import React from "react";
import TechnologyIcon from "../../atoms/TechnologyIcon"
import styles from "./index.module.scss"
import { Icon as IconType } from "../../../types"

interface Props {
    icons: IconType[],
}

const TechnologyIcons: React.FC<Props> = ({ icons }) => 
    <div className={styles.iconsContainer} >
        { icons.map(icon => <TechnologyIcon icon={icon} />) }
    </div>    

export default TechnologyIcons