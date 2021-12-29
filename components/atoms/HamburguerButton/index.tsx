import React from "react";
import { GiHamburgerMenu } from "react-icons/gi"
import styles from "./index.module.scss"

interface Props {
    onClick: () => void,
}

const HamburguerButton: React.FC<Props> = ({ onClick }) => 
    <div className={styles.container}>
        <GiHamburgerMenu className={styles.button} color="#DDD" width={1} onClick={onClick} />
    </div>

export default HamburguerButton