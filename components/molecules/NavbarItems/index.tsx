import React from "react"
import NavbarOption from "../../atoms/NavbarItem/types"
import NavbarItem from "../../atoms/NavbarItem"
import styles from "./index.module.scss"

interface Props{
    items: NavbarOption[]
    collapsed: boolean
}

const NavbarItems: React.FC<Props> = ({ items, collapsed }) => {
    return(
        <ul className={styles.navBarListContainer}>
            {items.map(item => <NavbarItem  collapsed={collapsed} item={item} />)}
        </ul>
    )
}

export default NavbarItems