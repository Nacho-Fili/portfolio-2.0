import React from "react"
import styles from "./index.module.scss"
import { motion } from "framer-motion"

interface Props {
    message: string,
    success: boolean,
    duration: number,
}

const Toast: React.FC<Props> = ({ message, success, duration }) => {
    return(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration }}
            className={styles.container}>
            <div 
                className={styles.toast} 
                style={{ 
                    border: `2px solid ${success ? "#B7EB8F" : "#FFCCC7"}`, 
                    background: success ? "#F6FFED" : "#FFF2F0", 
                    color: success ? "#52C41A" : "#FF4D4F", 
                }}>
                { message }
            </div>
        </motion.div>
    )
}

export default Toast