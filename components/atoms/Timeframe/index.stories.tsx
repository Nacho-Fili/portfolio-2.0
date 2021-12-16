import Timeframe from ".";

export default {
    title: "atoms/Timeframe",
    component: Timeframe,
}

export const DarkWithTwoValues = () => <Timeframe init={2018} end={2020} />
export const DarkWithOneValues = () => <Timeframe init={2021} />