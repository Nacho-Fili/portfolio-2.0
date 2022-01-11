import React, { useContext, useMemo } from "react";
import LanguageContext from "../../../context/language";
import Dictionary from "../../../Dictionary";
import styles from "./index.module.scss"

interface Props {
    birthdate: Date,
    name: string,
    lastname: string,
}

const PersonalInformation: React.FC<Props> = ({ birthdate, name, lastname }) => {
    
    const { selectedLanguage } = useContext(LanguageContext)
    const parsedBirthdate = useMemo(() => new Date(birthdate), [birthdate])
    const calculateAge = () => {
        let age = +new Date().getFullYear() - parsedBirthdate.getFullYear();
        if (+new Date().getMonth() - parsedBirthdate.getMonth() < 0) age--
        else if (+new Date().getMonth() - parsedBirthdate.getMonth() === 0)
            if(+new Date().getDate() - parsedBirthdate.getDate()) age--
        
        return age
    }


    return(
        <div className={styles.container}>
            <p className={styles.text}>{Dictionary.birthdate[selectedLanguage]}: {`0${parsedBirthdate.getDate()}-0${parsedBirthdate.getMonth()}-${parsedBirthdate.getFullYear()}`} </p>
            <p className={styles.text}>{Dictionary.name[selectedLanguage]}: {`${lastname.toUpperCase()}, ${name}`} </p>
            <p className={styles.text}>{Dictionary.age[selectedLanguage]}: {calculateAge()} </p>
        </div>
    )
}

export default PersonalInformation