import React from 'react'
import { AxiosResponse, RawAxiosRequestConfig } from "axios";

type CallbackType = (c:any)=>Promise<AxiosResponse>

export default function useAPI(Fn:CallbackType){
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(false)
    const [data, setData] = React.useState(null)

    const getData = (arg:any) => {
        setLoading(true)
        Fn(arg)
        .then(res=>setData(res.data))
        .catch(err=>{
            console.log(err)
            setError(true)
        })
        .finally(()=>setLoading(false))
    }

    return {loading, error, data, getData}
}