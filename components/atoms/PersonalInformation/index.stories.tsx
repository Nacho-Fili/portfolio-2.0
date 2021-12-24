import PersonalInformation from ".";

export default {
    title: "atoms/PersonalInformation",
    component: PersonalInformation,
}

const birthdate = new Date(2000, 8, 2, 0, 0, 0, 0)

export const Dark = () => <PersonalInformation birthdate={birthdate} name="Ignacio" lastname="Filipovskis"/>