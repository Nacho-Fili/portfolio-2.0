import React, { useEffect, useState } from "react"
import Navbar from "../../molecules/Navbar"
import Brand from "../../atoms/Brand"
import styles from "./index.module.scss"
import CollapseButton from "../../atoms/CollapseButton"
import { motion, Variants } from "framer-motion"
import HamburguerButton from "../../atoms/HamburguerButton"

const Sidebar: React.FC = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const [collapsedWidth, setCollapsedWidth] = useState<number>(0)
    const [notCollapsedWidth, setNotCollapsedWidth] = useState<number>(0)
    const [collapsedPosition, setCollapsedPosition] = useState<number | string>(0)
    const [notCollapsedPosition, setNotCollapsedPosition] = useState<number | string>(0)
    
    useEffect(() => {
        const isMobile = window.matchMedia("(max-width: 600px)").matches
        setCollapsedWidth(isMobile ? 80 : 8)
        setNotCollapsedWidth(isMobile ? 80 : 30)
        setCollapsedPosition(isMobile ? -80 : "")
        setNotCollapsedPosition(isMobile ? 0 : "")
    }, [])

    return(
        <div style={{display: 'flex'}}>
            <HamburguerButton onClick={() => setCollapsed(prev => !prev)}/>
            <motion.div
                initial={{ 
                    width: collapsed ? `${notCollapsedWidth}vw` : `${collapsedWidth}vw`,
                    left: collapsed ? `${notCollapsedPosition}vw` : `${collapsedPosition}vw`,
                }}
                animate={{ 
                    width: collapsed ? `${collapsedWidth}vw` : `${notCollapsedWidth}vw`,
                    left: collapsed ? `${collapsedPosition}vw` : `${notCollapsedPosition}vw`,
                }}
                className={collapsed ? styles.collapsed : styles.notCollapsed}>
                <Brand collapsed={collapsed} />
                <Navbar collapsed={collapsed} />
                <CollapseButton collapsed={collapsed} onClick={() => setCollapsed(prev => !prev)} />
            </motion.div>
            {!collapsed &&
                <motion.div
                    initial={{ background: '#000', opacity: 0 }}
                    animate={{ background: '#000', opacity: 0.8 }}
                    className={styles.cover} />}
        </div>
    )
}

export default Sidebar