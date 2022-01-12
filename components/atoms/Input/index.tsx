import React, { ChangeEventHandler, HTMLInputTypeAttribute } from "react"
import styles from "./index.module.scss"

interface Props {
    placeholder: string,
    span?: number,
    onChange: ChangeEventHandler<HTMLInputElement>,
    type?: HTMLInputTypeAttribute,
}

const Input: React.FC<Props> = ({ placeholder, span = 24, onChange, type }) => {

    return(
        <div 
            className={styles.container} 
            style={{ width: `${(span/24)*100}%` }}>
            <input 
                placeholder={placeholder}
                className={styles.input} 
                type={ type || "text"} 
                style={{ width: `100%` }}
                onChange={onChange}/>
        </div> 
    )
}

export default Input