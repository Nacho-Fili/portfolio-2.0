import Navbar from ".";

export default {
    title: 'NavBar',
    component: Navbar,
}

export const Dark = () => <Navbar collapsed={false}/>
export const DarkCollapsed = () => <Navbar collapsed={true}/>