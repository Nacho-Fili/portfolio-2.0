import React from "react";
import PersonalInformation from "../../atoms/PersonalInformation";
import ProfilePic from "../../atoms/ProfilePic";
import ProfileText from "../../atoms/ProfileText";
import { Profile } from "../../../types"
import styles from "./index.module.scss"

interface Props {
    profileData: Profile,
}

const PersonalProfile: React.FC<Props> = ({ profileData: { src, name, lastname, birthdate, text }}) => {
    return(
        <div className={styles.mainContainer}>
            <ProfilePic src={src}/>
            <div className={styles.textContainer}>
                <PersonalInformation birthdate={birthdate} lastname={lastname} name={name}/>
                <ProfileText text={text}/>
            </div>
        </div>
    )
}

export default PersonalProfile