import React from "react";
import TechnologyIcon from "../../atoms/TechnologyIcon"
import styles from "./index.module.scss"

interface IconType {
    url: string,
    alt: string,
}

interface Props {
    icons: IconType[],
}

const TechnologyIcons: React.FC<Props> = ({ icons }) => 
    <div className={styles.iconsContainer} >
        { icons.map(({ url, alt }) => <TechnologyIcon url={url} alt={alt} />) }
    </div>    

export default TechnologyIcons