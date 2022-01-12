import Inputs from '.'

export default {
    title: "molecules/Inputs",
    component: Inputs,
}

export const Dark = () => <Inputs setters={{ name: () => {}, phone: () => {}, email: () => {}, message: () => {},}}/>