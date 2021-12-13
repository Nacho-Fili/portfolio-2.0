import React, { useLayoutEffect, useState } from "react"
import usePlaceholder from "../../../hooks/usePlaceholder"
import styles from "./index.module.scss"

const TextArea: React.FC = () => {
    const {init, inputRef, spanRef, getSpanPosition, getInputPosition} = usePlaceholder()
    const [inputFocus, setInputFocus] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>('')
    
    useLayoutEffect(init, [inputRef, spanRef])

    return (
        <div>
            <span style={getSpanPosition(inputFocus, inputValue)} ref={spanRef} className={styles.placeholder} >Mensaje</span>
            <textarea 
                style={getInputPosition()} 
                ref={inputRef as React.Ref<HTMLTextAreaElement>} 
                className={styles.textArea}
                onFocus={() => setInputFocus(true)}
                onBlur={() => setInputFocus(false)}
                onChange={({ target }) => setInputValue(target.value)}
                cols={30} rows={5}/>
        </div>
    )
}

export default TextArea