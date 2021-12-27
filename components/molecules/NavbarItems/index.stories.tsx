import NavbarItems from ".";
import NavbarOption from "../../atoms/NavbarItem/types";


export default {
    title: 'molecules/NavBarItemList',
    component: NavbarItems,
}

const items: NavbarOption[] = [
    {
        title: 'Home',
        href: '/home',
        icon: "https://icongr.am/material/brain.svg?size=32&color=c3edf0",
    },
    {
        title: 'About me',
        href: '/about-me',
        icon: "https://icongr.am/material/brain.svg?size=32&color=c3edf0",
    },
    {
        title: 'Knowledge',
        href: '/knowledge',
        icon: "https://icongr.am/material/brain.svg?size=32&color=c3edf0",
    }
]

export const Dark = () => <NavbarItems collapsed={false} items={items}/>
export const DarkCollapsed = () => <NavbarItems collapsed={true} items={items}/>
