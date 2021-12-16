import React from "react"
import styles from "./index.module.scss"

interface Props {
    init: number,
    end?: number,
}

const Timeframe: React.FC<Props> = ({ init, end }) => <p className={styles.typography}>{`${init} - ${end || "Actualidad"}`}</p>
        
    


export default Timeframe