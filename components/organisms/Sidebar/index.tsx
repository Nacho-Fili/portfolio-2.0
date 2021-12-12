import React, { useState } from "react"
import Navbar from "../../molecules/Navbar"
import Brand from "../../atoms/Brand"
import styles from "./index.module.scss"
import CollapseButton from "../../atoms/CollapseButton"
import '../../../styles/globals.css'

const Sidebar: React.FC = () => {
    const [collapsed, setCollapsed] = useState(true)
    return(
        <div style={{display: 'flex'}}>
            <div className={collapsed ? styles.collapsed : styles.notCollapsed}>
                <Brand collapsed={collapsed} />
                <Navbar collapsed={collapsed} />
                <CollapseButton collapsed={collapsed} onClick={() => setCollapsed(prev => !prev)} />
            </div>
            {!collapsed && <div className={styles.cover} />}
        </div>
    )
}

export default Sidebar