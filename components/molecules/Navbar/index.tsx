import React from "react";
import NavbarOption from "../../atoms/NavbarItem/types";
import NavbarItems from "../NavbarItems"
import styles from "./index.module.scss"

const items: NavbarOption[] = [
    {
        title: 'Proyectos',
        href: '#projects',
        icon: 'https://icongr.am/material/code-tags.svg?size=32&color=c3edf0',
    },
    {
        title: 'Conocimientos',
        href: '#technologies',
        icon: 'https://icongr.am/material/brain.svg?size=32&color=c3edf0',
    },
    {
        title: 'Sobre mi',
        href: '#about-me',
        icon: 'https://icongr.am/material/account.svg?size=32&color=c3edf0',
    },
    {
        title: 'Experiencia',
        href: '#experience',
        icon: 'https://icongr.am/material/bookshelf.svg?size=32&color=c3edf0',
    },
    {
        title: 'Contacto',
        href: '#contact',
        icon: 'https://icongr.am/material/comment-text.svg?size=32&color=c3edf0',
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