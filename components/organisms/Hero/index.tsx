import React, { useState, useEffect } from "react"
import Introduce from "../../atoms/Introduce"
import ContactButton from "../../atoms/ContactButton"
import styles from "./index.module.scss"
import { motion } from "framer-motion"

interface Props {
    show?: boolean,
    className?: string,
}

const OpacityAnimation: React.FC<Props> = ({ children, show=true, className="" }) => {
    return(
        <motion.div
            className={className}
            initial={{ opacity: 0, width: "100%" }}
            animate={{ opacity: show ? 1 : 0 }}
            transition={{ duration: 1.5 }}>
            { children }
        </motion.div>
    )
}

const Hero: React.FC = () => {

    const [ secondsAfterIntroduce, setSecondsAfterIntroduce ] = useState(0)
    
    useEffect(() => {
        const interval = window.setInterval(() => { 
            setSecondsAfterIntroduce(prev => prev+500) 
        }, 500)
        return () => window.clearInterval(interval)
    }, [])

    return(
        <div className={styles.container}>
            <OpacityAnimation>
                <Introduce />
            </OpacityAnimation>
            <OpacityAnimation className={styles.contactButtonContainer} show={secondsAfterIntroduce >= 1500}>
                <ContactButton />
            </OpacityAnimation>
        </div>
    )
}

export default Hero