import CollapseButton from ".";

export default {
    title: 'CollapseButton',
    component: CollapseButton,
}

const mockFunction = () => {}

export const Dark = () => <CollapseButton onClick={mockFunction} collapsed={false}/>
export const DarkCollapsed = () => <CollapseButton onClick={mockFunction} collapsed/>
