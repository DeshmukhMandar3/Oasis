import axios, { AxiosError } from 'axios'
import { AxiosResponse, RawAxiosRequestConfig } from 'axios'
import { ProductType } from '../../GlobalTypes/ProductType'

const getURL = (id:string) => `http://localhost:8080/Products/${id}`


export function getSingleDataAPI(id:string):Promise<AxiosResponse> {
    const config:RawAxiosRequestConfig = {
        method: 'get',
        url: getURL(id),
    }
    return axios<ProductType>(config)
}

export function patchDataAPI(changes:ProductType, id:string):Promise<AxiosResponse>{ //need to change key to id
        const config:RawAxiosRequestConfig = {
        method: 'patch',
        url: getURL(id),
        data: changes,
    }
    return axios(config)
    .then(res=>res.data)
    .catch(err=>err)
}

export function removeDataAPI(id:string):Promise<AxiosResponse>{
    const config:RawAxiosRequestConfig = {
        method: 'delete',
        url: getURL(id),
    }
    return axios(config)
    .then(res=>res)
    .catch(err=>err)
}