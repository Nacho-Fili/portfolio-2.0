import React from "react";
import ExperienciesTemplate from "../../molecules/ExperienceTemplate"
import styles from "./index.module.scss"
import SectionTitle from "../../atoms/SectionTitle";

const ExperienciesSection: React.FC = () =>
    <div className={styles.mainContainer}>
        <SectionTitle title="Experiencia"/>
        <div className={styles.container}>
            <ExperienciesTemplate 
                title="Brain IT, LLC" 
                init={2021} 
                description="En 2021 fui contratado por Brainit como Junior Fullstack
                Developer, teniendo la responsabilidad de registrar las
                tareas que el equipo debe llevar adelante. Actualmente
                me dedico principalmente a desarrollar tareas del
                frontend en React con ant design y tareas de backend con
                nodejs, utilizando AWS, especialmente Cognito y
                DynamoDB. También adquirí experiencia en el desarrollo
                con mono-repos. Como software de administración en mis
                tareas diarias aprendí a utilizar Jira junto con Bitbucket."
                technologies={[
                    'AWS',
                    'React',
                    'Node',
                    'Ant Design',
                    'Bitbucket'
                ]} />
        </div>
    </div>

export default ExperienciesSection