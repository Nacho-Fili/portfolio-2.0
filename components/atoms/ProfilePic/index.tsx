import React from "react"
import styles from "./index.module.scss"

interface Props {
    src: string,
}

const ProfilePic: React.FC<Props> = ({ src }) => {
    return(
        <img className={styles.img} src={src} alt="Profile picture" />
    )
}

export default ProfilePic