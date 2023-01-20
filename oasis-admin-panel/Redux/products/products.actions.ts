import {PRODUCTS_DATA, PRODUCTS_API} from './products.actionTypes'
import { getDataAPI, removeDataAPI } from './products.api'
import { ParamsPropsType } from './products.api'
import { AppDispatch } from '../store'

export const PRODUCTS_ACTIONS = {
    getData : (params:any) => async (dispatch:AppDispatch) => {
        dispatch({type:PRODUCTS_DATA.FETCH_LOADING})
        getDataAPI(params)
        .then(res=>dispatch({type:PRODUCTS_DATA.FETCH_SUCCESS, payload:res}))
        .catch(err=>dispatch({type:PRODUCTS_DATA.FETCH_ERROR}))
    },
    deleteProd : (id:string) => async (dispatch:AppDispatch) => {
        dispatch({type:PRODUCTS_DATA.DELETE_LOADING})
        removeDataAPI(id)
        .then(res=>{
            dispatch({type:PRODUCTS_DATA.DELETE_SUCCESS})
        })
        .catch(err=>dispatch({type:PRODUCTS_DATA.DELETE_ERROR}))
    }
}

export const STATE_ACTIONS = {
    updateParams : (changes:ParamsPropsType) => ({type:PRODUCTS_API.UPDATE_PARAMS, payload:changes}),
    resetParams : () => ({type:PRODUCTS_API.RESET_PARAMS})
}