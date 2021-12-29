import React, { useState } from "react"
import Navbar from "../../molecules/Navbar"
import Brand from "../../atoms/Brand"
import styles from "./index.module.scss"
import CollapseButton from "../../atoms/CollapseButton"
import { motion, Variants } from "framer-motion"
import HamburguerButton from "../../atoms/HamburguerButton"

const Sidebar: React.FC = () => {
    const [collapsed, setCollapsed] = useState(true)

    const sidebarWidth = 80

    return(
        <div style={{display: 'flex'}}>
            <HamburguerButton onClick={() => setCollapsed(prev => !prev)}/>
            <motion.div
                initial={{ width: '8vw' }}
                animate={{ width: collapsed ? '8vw': `${sidebarWidth}vw`}}
                className={collapsed ? styles.collapsed : styles.notCollapsed}>
                <Brand collapsed={collapsed} />
                <Navbar collapsed={collapsed} />
                <CollapseButton collapsed={collapsed} onClick={() => setCollapsed(prev => !prev)} />
            </motion.div>
            {!collapsed && 
                <motion.div 
                    initial={{ background: '#000', opacity: 0 }}  
                    animate={{ background: '#000', opacity: 0.8 }}
                    style={{
                        left: `${sidebarWidth}vw`,
                        width: `${100-sidebarWidth}vw`
                    }}
                    className={styles.cover} />}
        </div>
    )
}

export default Sidebar