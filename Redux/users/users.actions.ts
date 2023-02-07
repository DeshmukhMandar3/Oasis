import {USERS_DATA, USERS_API} from './users.actionTypes'
import { getDataAPI, removeDataAPI } from './users.api'
import { AppDispatch } from '../store'
import { ParamsPropsType } from './users.reducer'

export const USERS_ACTIONS = {
    getData : (params:any) => async (dispatch:AppDispatch) => {
        dispatch({type:USERS_DATA.FETCH_LOADING})
        getDataAPI(params)
        .then(res=>dispatch({type:USERS_DATA.FETCH_SUCCESS, payload:res}))
        .catch(err=>dispatch({type:USERS_DATA.FETCH_ERROR}))
    },
    deleteProd : (id:string) => async (dispatch:AppDispatch) => {
        dispatch({type:USERS_DATA.DELETE_LOADING})
        removeDataAPI(id)
        .then(res=>{
            dispatch({type:USERS_DATA.DELETE_SUCCESS})
        })
        .catch(err=>dispatch({type:USERS_DATA.DELETE_ERROR}))
    }
}

export const STATE_ACTIONS = {
    updateParams : (changes:ParamsPropsType) => ({type:USERS_API.UPDATE_PARAMS, payload:changes}),
    resetParams : () => ({type:USERS_API.RESET_PARAMS})
}