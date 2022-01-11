import React, { useContext, useState } from "react"
import LanguageContext from "../../../context/language"
import Dictionary from "../../../Dictionary"
import styles from "./index.module.scss"

interface Props {
    span?: number,
}

const TextArea: React.FC<Props> = ({ span = 24 }) => {
    const { selectedLanguage } = useContext(LanguageContext)
    const [inputValue, setInputValue] = useState<string>('')

    return (
        <div className={styles.container} style={{ width: `${(span/24)*100}%` }}>
            <textarea
                className={styles.input}
                onChange={({ target }) => setInputValue(target.value)}
                placeholder={Dictionary.message[selectedLanguage]}
                cols={30} rows={5}/>
        </div>
    )
}

export default TextArea