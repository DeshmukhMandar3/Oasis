import axios from 'axios'
import { AxiosResponse, RawAxiosRequestConfig } from 'axios'
import { ProductType } from '../../GlobalTypes/ProductType'
import { UsersType } from './users.reducer'
import { ParamsType } from './users.reducer'

const BASE_URL = `https://backend-cw-4.onrender.com/register`
// const BASE_URL = `http://localhost:8080/register/`

const getURL = (id:string) => `https://backend-cw-4.onrender.com/register/${id}`
// const getURL = (id:string) => `http://localhost:8080/register/${id}`


export interface GetResponse {
    data: ProductType[]
}

export interface GETProductsResponse {
    data: ProductType[],
    count: number,
}


export async function getDataAPI({page, limit, sort, order, email, id}:ParamsType):Promise<GETProductsResponse> {
    const config:RawAxiosRequestConfig = {
        method: 'get',
        url: BASE_URL,
        params: {
            _page: page,
            _limit: limit,
            // _sort: sort,
            // _order: order,
            email,
            id,
        }
    }
    const {data, headers} = await axios<ProductType[]>(config)
    return {data, count:headers['x-total-count']?+headers['x-total-count']:0}
}

export async function getSingleDataAPI(id:string):Promise<ProductType> {
    const config:RawAxiosRequestConfig = {
        method: 'get',
        url: getURL(id),
    }
    const {data} = await axios<ProductType>(config)
    return data
}


export function postDataAPI(data:ProductType):Promise<AxiosResponse>{
        const config:RawAxiosRequestConfig = {
        method: 'post',
        url: BASE_URL,
        data,
    }
    return axios(config)
    .then(res=>res)
    .catch(err=>err)
}

export function patchDataAPI(changes:ProductType, id:string):Promise<AxiosResponse>{ //need to change key to id
        const config:RawAxiosRequestConfig = {
        method: 'patch',
        url: BASE_URL,
        data: changes,
        params: {
            ID: id,
        }
    }
    return axios(config)
    .then(res=>res)
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