import React from "react"
import Timeframe from "../../atoms/Timeframe"
import ExperienceDescription from "../../atoms/ExperienceDescription"
import TechnologiesList from "../../atoms/TechnologiesList"
import ExperienceTitle from "../../atoms/ExperienceTitle"
import { Experience as ExperienceType } from "../../../types"

interface Props {
    experience: ExperienceType,
}

const ExperienceTemplate: React.FC<Props> = ({ experience : { init, title, end, description, technologies } }) => 
    <>
        <Timeframe init={init} end={end}/>
        <ExperienceTitle title={title}/>
        <ExperienceDescription description={description}/>
        <TechnologiesList technologies={technologies}/>
    </>

export default ExperienceTemplate