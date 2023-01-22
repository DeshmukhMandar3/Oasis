import axios, { AxiosError } from 'axios'
import { AxiosResponse, RawAxiosRequestConfig } from 'axios'
import { ProductType } from '../../GlobalTypes/ProductType'

const BASE_URL = `http://localhost:8080/Admin`
const getURL = (id:string) => `http://localhost:8080/Admin/${id}`

interface ResponseType {
    email:string,
    password:string
}


export function getAdmin(email:string, password:string):Promise<AxiosResponse> {
    const config:RawAxiosRequestConfig = {
        method: 'get',
        url: BASE_URL,
        params:{
            email,
            password,
        }
    }
    return axios<ResponseType[]>(config)
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

export function getImageURL(form:FormData):Promise<AxiosResponse> {
    const api_key = "1ceb2351b7fa35f99502de57b2d8e7d0";
    const config:RawAxiosRequestConfig = {
        method: 'post',
        url: `https://api.imgbb.com/1/upload?key=${api_key}`,
        data: form
    }
    return axios<ProductType>(config)
}