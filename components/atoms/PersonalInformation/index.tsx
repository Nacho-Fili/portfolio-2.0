import React, { useMemo } from "react";
import styles from "./index.module.scss"

interface Props {
    birthdate: Date,
    name: string,
    lastname: string,
}

const PersonalInformation: React.FC<Props> = ({ birthdate, name, lastname }) => {
    
    const parsedBirthdate = useMemo(() => new Date(birthdate), [birthdate])

    return(
        <div className={styles.container}>
            <p style={{ fontSize: 28 }} className={styles.text}>Fecha de nacimiento: {`0${parsedBirthdate.getDate()}-0${parsedBirthdate.getMonth()}-${parsedBirthdate.getFullYear()}`} </p>
            <p style={{ fontSize: 28 }} className={styles.text}>Nombre: {`${lastname.toUpperCase()}, ${name}`} </p>
            <p style={{ fontSize: 28 }} className={styles.text}>Edad: {+new Date().getFullYear() - parsedBirthdate.getFullYear()} </p>
        </div>
    )
}

export default PersonalInformation