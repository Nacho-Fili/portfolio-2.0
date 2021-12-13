import Navbar from ".";

export default {
    title: 'molecules/NavBar',
    component: Navbar,
}

export const Dark = () => <Navbar collapsed={false}/>
export const DarkCollapsed = () => <Navbar collapsed={true}/>