import React from "react"
import styles from "./index.module.scss"
import { BsArrowBarRight, BsArrowBarLeft } from "react-icons/bs"

interface Props {
    onClick: () => void,
    collapsed: boolean
}

const CollapseButton: React.FC<Props> = ({ collapsed, onClick }) => {

    const iconSize = 24

    return(
        <button className={styles.collapseButton} onClick={onClick}>
            {
                collapsed 
                    ? <BsArrowBarRight size={iconSize}/>
                    : <BsArrowBarLeft size={iconSize}/>
            }
        </button>
    )
}

export default CollapseButton