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
    technologies: string[]
}

export enum Method {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    PATCH = 'PATCH'
}

export interface ApiConfig {
    method: Method,
    url: string,
}