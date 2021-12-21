import React from "react"
import styles from "./index.module.scss"

interface Props {
    placeholder: string,
    span?: number,
}

const Input: React.FC<Props> = ({ placeholder, span = 24 }) => {


    return(
        <div 
            className={styles.container} 
            style={{ width: `${(span/24)*100}%` }}>
            <input 
                placeholder={placeholder}
                className={styles.input} 
                type="text" 
                style={{ width: `100%` }}/>
        </div> 
    )
}

export default Input