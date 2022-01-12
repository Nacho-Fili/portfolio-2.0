import axios, { AxiosPromise } from "axios"
import { ApiConfig } from "../types"

const requestService: (resource: ApiConfig, queryParams?: any[], data?: any) => AxiosPromise = (resource, queryParams, data) => {
    let { method, url } = resource
    queryParams?.forEach((queryParam) => {
        url += `?${queryParam.key}=${queryParam.value}`
    })
    return axios({
        baseURL: '/api',
        url,
        method,
        data,
    })
}

export default requestService