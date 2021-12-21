import React, { useState } from "react"
import styles from "./index.module.scss"

interface Props {
    span?: number,
}

const TextArea: React.FC<Props> = ({ span = 24 }) => {
    const [inputValue, setInputValue] = useState<string>('')

    return (
        <div className={styles.container} style={{ width: `${(span/24)*100}%` }}>
            <textarea
                contentEditable
                className={styles.input}
                onChange={({ target }) => setInputValue(target.value)}
                placeholder="Mensaje"
                cols={30} rows={5}/>
        </div>
    )
}

export default TextArea