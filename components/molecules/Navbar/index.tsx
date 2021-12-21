import React from "react";
import NavbarOption from "../../atoms/NavbarItem/types";
import NavbarItems from "../NavbarItems"
import styles from "./index.module.scss"

const items: NavbarOption[] = [
    {
        title: 'Proyectos',
        href: '#projects',
    },
    {
        title: 'Conocimientos',
        href: '#technologies',
    },
    {
        title: 'Sobre mi',
        href: '#about-me',
    },
    {
        title: 'Experiencia',
        href: '#experience',
    },
    {
        title: 'Contacto',
        href: '#contact'
    }
]

interface Props {
    collapsed: boolean
}

const Navbar: React.FC<Props> = ({ collapsed }) => {
    return(
        <nav className={ collapsed ? styles.collapsed : styles.notCollapsed}>
            <NavbarItems collapsed = {collapsed} items={items}/>
        </nav>
    )
}

export default Navbar;