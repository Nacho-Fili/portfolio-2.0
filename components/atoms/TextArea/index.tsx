import React, { ChangeEventHandler, useContext, useState } from "react"
import LanguageContext from "../../../context/language"
import Dictionary from "../../../Dictionary"
import styles from "./index.module.scss"

interface Props {
    span?: number,
    onChange: ChangeEventHandler<HTMLTextAreaElement>
}

const TextArea: React.FC<Props> = ({ span = 24, onChange }) => {
    const { selectedLanguage } = useContext(LanguageContext)

    return (
        <div className={styles.container} style={{ width: `${(span/24)*100}%` }}>
            <textarea
                className={styles.input}
                onChange={onChange}
                placeholder={Dictionary.message[selectedLanguage]}
                cols={30} rows={5}/>
        </div>
    )
}

export default TextArea