import axios, { AxiosPromise } from "axios"
import { ApiConfig } from "../types"

const requestService: (resource: ApiConfig, queryParams?: any[]) => AxiosPromise = (resource, queryParams) => {
    let { method, url } = resource
    queryParams?.forEach((queryParam) => {
        url += `?${queryParam.key}=${queryParam.value}`
    })
    return axios({
        baseURL: '/api',
        url,
        method,
    })
}

export default requestService