import Input from ".";

export default {
    title: 'atoms/inputs/Input',
    component: Input,
}

export const Dark = () => 
    <div style={{ padding: 40 }}>
        <Input placeholder="Name"/>
    </div>