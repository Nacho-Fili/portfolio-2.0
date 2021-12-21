import React from "react";
import TechnologyIcons from "../../molecules/TechnologyIcons";
import styles from "./index.module.scss"
import SectionTitle from "../../atoms/SectionTitle";

const TechnologyIconsSection: React.FC = () => {
    const icons = [
        {
            url: 'https://icongr.am/devicon/typescript-plain.svg?size=128&color=currentColor',
            alt: 'TypeScript'
        },
        {
            url: 'https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor',
            alt: 'JavaScript',
        },
        {
            url: 'https://icongr.am/devicon/nodejs-original.svg?size=128&color=currentColor',
            alt: 'Node',
        }
    ]
    
    return (
        <div id="technologies" className={styles.mainContainer}>
            <SectionTitle title="Tecnologías"/>
            <div className={styles.container}>
                <TechnologyIcons icons={icons} />
            </div>
        </div>
    ) 
}

export default TechnologyIconsSection