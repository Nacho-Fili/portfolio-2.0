import React, { useEffect, useState } from "react";
import { Profile } from "../../../types";
import Loader from "../../atoms/Loader";
import SectionTitle from "../../atoms/SectionTitle";
import PersonalProfile from "../../molecules/PersonalProfile";
import api from "./api";
import styles from "./index.module.scss"

const ProfileSection: React.FC = () => {
    
    const [profile, setProfile] = useState<Profile | undefined>(undefined)

    useEffect(() => {
        api
            .get()
            .then(({ data }) => setProfile(data.profile))
    }, [])
    
    return(
        <div id="about-me" className={styles.profileSection}>
            <SectionTitle title="Perfil"/>
            {profile
                    ? <PersonalProfile profileData={profile}/>
                    : <Loader />
            }
        </div>
    )
}

export default ProfileSection