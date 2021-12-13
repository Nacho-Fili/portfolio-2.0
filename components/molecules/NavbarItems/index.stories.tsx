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
    },
    {
        title: 'About me',
        href: '/about-me',
    },
    {
        title: 'Knowledge',
        href: '/knowledge',
    }
]

export const Dark = () => <NavbarItems collapsed={false} items={items}/>
export const DarkCollapsed = () => <NavbarItems collapsed={true} items={items}/>
