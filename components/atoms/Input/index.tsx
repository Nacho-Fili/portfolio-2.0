import React, { useRef, useLayoutEffect, useState, useCallback } from "react"
import usePlaceholder from "../../../hooks/usePlaceholder"
import styles from "./index.module.scss"

interface Props {
    placeholder: string,
}

const Input: React.FC<Props> = ({ placeholder }) => {

    const [inputValue, setInputValue] = useState<string>('')
    const [inputFocus, setInputFocus] = useState(false)
    const { init, spanRef, inputRef, getSpanPosition, getInputPosition } = usePlaceholder()

    useLayoutEffect(init, [spanRef, inputRef])

    return(
        <div className={styles.container}>
            <span 
                ref={spanRef}
                style={getSpanPosition(inputFocus, inputValue)}
                className={styles.placeholder}>{placeholder}</span>
            <input 
                onFocus={() => setInputFocus(true)} 
                onBlur={() => setInputFocus(false)} 
                ref={inputRef as React.Ref<HTMLInputElement>} 
                className={styles.input} 
                type="text" 
                style={getInputPosition()}
                onChange={({ target }) => setInputValue(target.value)}/>
        </div>
    )
}

export default Input