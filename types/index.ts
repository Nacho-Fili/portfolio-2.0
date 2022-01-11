import { ObjectId } from "mongodb";

export interface Icon {
    url: string,
    alt: string,
}

export interface Experience {
    id?: ObjectId
    init: number,
    end?: number,
    title: string,
    description: string,
    technologies: string[],
    descriptionTranslations?: translate,
}

export enum Method {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    PATCH = 'PATCH'
}

export enum languages {
    ES = "es-AR",
    EN = "en-US",
}

export interface Profile {
    src: string,
    name: string,
    lastname: string,
    birthdate: Date,
    text: string,
    textTranslations?: translate
}

export interface ApiConfig {
    method: Method,
    url: string,
}

export interface Project {
    name: string,
    imageSrc: string, 
    description: string,
    date: Date,
    githubLink: string,
    webLink: string,
    technologies: string[],
}

export type translate = {
    [languages.EN]: string,
    [languages.ES]: string,
}