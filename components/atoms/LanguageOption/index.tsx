import React from "react";
import styles from "./index.module.scss"

interface Props {
    onClick: () => void,
    label: string,
}

const LanguageOption: React.FC<Props> = ({ onClick, label }) => {
    return (
        <button type="button" className={styles.languageOption} onClick={onClick}>
            {label}
        </button>
    )
}

export default LanguageOption