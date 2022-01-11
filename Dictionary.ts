import { languages } from "./types"

type translate = {
    [languages.EN]: string,
    [languages.ES]: string,
}

type translates = {
    introduction: translate,
    projects: translate,
    profile: translate,
    technologies: translate,
    name: translate,
    phone: translate,
    message: translate,
    knowledge: translate,
    about: translate,
    experience: translate,
    contact: translate,
}

const Dictionary: translates = {
    introduction: {
        [languages.EN]: "Hi, I am Ignacio Filipovskis",
        [languages.ES]: "Hola, soy Ignacio Filipovskis"
    },
    projects: {
        [languages.EN]: "Projects",
        [languages.ES]: "Proyectos",
    },
    profile: {
        [languages.EN]: "Profile",
        [languages.ES]: "Perfil",
    },
    technologies: {
        [languages.EN]: "Technologies",
        [languages.ES]: "Tecnologías",
    },
    name: {
        [languages.EN]: "Name",
        [languages.ES]: "Nombre",
    },
    phone: {
        [languages.EN]: "Phone",
        [languages.ES]: "Teléfono",
    },
    message: {
        [languages.EN]: "Message",
        [languages.ES]: "Mensaje",
    },
    knowledge: {
        [languages.EN]: "Knowledge",
        [languages.ES]: "Conocimientos",
    },
    about: {
        [languages.EN]: "About me",
        [languages.ES]: "Sobre mi",
    },
    experience: {
        [languages.EN]: "Experience",
        [languages.ES]: "Experiencia",
    },
    contact: {
        [languages.EN]: "Contact",
        [languages.ES]: "Contacto",
    }
}

export default Dictionary