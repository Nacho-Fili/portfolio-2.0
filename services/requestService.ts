import axios, { AxiosPromise } from "axios"
import { ApiConfig } from "../types"

const requestService: (resource: ApiConfig) => AxiosPromise = (resource) => {
    const { method, url } = resource
    return axios({
        baseURL: '/api',
        url,
        method,
    })
}

export default requestService