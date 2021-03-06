import React from "react";
import NavbarOption from "./types"
import styles from "./styles.module.scss"

interface Props {
    item: NavbarOption,
    collapsed: boolean,
}

const NavbarItem: React.FC<Props> = ({ item, collapsed }) => {
    return(
        <li className={styles.listItem}>
            <a className={styles.link} href={item.href}>
                <img src={item.icon} alt={item.title} />
                {!collapsed && item.title} 
            </a>
        </li>
    )
}

export default NavbarItem