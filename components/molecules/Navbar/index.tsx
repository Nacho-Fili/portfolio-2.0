import React, { useContext } from "react";
import LanguageContext from "../../../context/language";
import Dictionary from "../../../Dictionary";
import NavbarOption from "../../atoms/NavbarItem/types";
import NavbarItems from "../NavbarItems"
import styles from "./index.module.scss"

interface Props {
    collapsed: boolean
}

const Navbar: React.FC<Props> = ({ collapsed }) => {

    const { selectedLanguage } = useContext(LanguageContext)

    const items: NavbarOption[] = [
        {
            title: Dictionary.projects[selectedLanguage],
            href: '#projects',
            icon: 'https://icongr.am/material/code-tags.svg?size=32&color=c3edf0',
        },
        {
            title: Dictionary.technologies[selectedLanguage],
            href: '#technologies',
            icon: 'https://icongr.am/material/brain.svg?size=32&color=c3edf0',
        },
        {
            title: Dictionary.about[selectedLanguage],
            href: '#about-me',
            icon: 'https://icongr.am/material/account.svg?size=32&color=c3edf0',
        },
        {
            title: Dictionary.experience[selectedLanguage],
            href: '#experience',
            icon: 'https://icongr.am/material/bookshelf.svg?size=32&color=c3edf0',
        },
        {
            title: Dictionary.contact[selectedLanguage],
            href: '#contact',
            icon: 'https://icongr.am/material/comment-text.svg?size=32&color=c3edf0',
        }
    ]

    return(
        <nav className={ collapsed ? styles.collapsed : styles.notCollapsed}>
            <NavbarItems collapsed = {collapsed} items={items}/>
        </nav>
    )
}

export default Navbar;