import React from "react";
import styles from "./index.module.scss"

interface Props {
    text: string
}

const ProfileText: React.FC<Props> = ({ text }) => 
    <p style={{ fontSize: 20 }} className={styles.text}>{text}</p>

export default ProfileText