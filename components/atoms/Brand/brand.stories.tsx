import Brand from ".";

export default {
    title: 'Brand',
    component: Brand
} 

export const DarkCollapsed = () => <Brand collapsed={true} />
export const Dark = () => <Brand collapsed={false} />
