import React from "react"
import styles from "./index.module.scss"

interface Props {
    collapsed: boolean
}

const Brand: React.FC <Props> = ({ collapsed }) => {
    const brandText: string = 'Ignacio Filipovskis'
    const collapsedText: string = brandText.split(' ').map(fragment => fragment.charAt(0)).join('')
    
    return(
        <div className={collapsed ? styles.collapsed : styles.notCollapsed}>
            <h1 className={styles.brand}> { collapsed ? collapsedText : brandText} </h1>
        </div>
    ) 
}

export default Brand