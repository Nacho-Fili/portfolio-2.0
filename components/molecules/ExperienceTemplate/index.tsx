import React from "react"
import Timeframe from "../../atoms/Timeframe"
import ExperienceDescription from "../../atoms/ExperienceDescription"
import TechnologiesList from "../../atoms/TechnologiesList"
import ExperienceTitle from "../../atoms/ExperienceTitle"

interface Props {
    init: number,
    end?: number,
    description: string,
    technologies: string[], 
    title: string,
}

const ExperienceTemplate: React.FC<Props> = ({ init, title, end, description, technologies }) => 
    <>
        <Timeframe init={init} end={end}/>
        <ExperienceTitle title={title}/>
        <ExperienceDescription description={description}/>
        <TechnologiesList technologies={technologies}/>
    </>

export default ExperienceTemplate