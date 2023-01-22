import {AUTH_DATA} from './auth.actionTypes'
import { getAdmin } from './auth.api'
import { AppDispatch } from '../store'

type ChangesType = Record <string, string|number|string[]>

export const AUTH_ACTIONS = {
    login: (email:string, password:string) => async (dispatch:AppDispatch) => {
        dispatch({type:AUTH_DATA.LOGIN_LOADING})
        getAdmin(email, password)
        .then(res=>{
            let data = res.data
            if (data.length) {
                localStorage.setItem('adminID-oasis', data[0].id)
                dispatch({type:AUTH_DATA.LOGIN_SUCCESS, payload:data[0]})
            }
            else dispatch({type:AUTH_DATA.LOGIN_INVALID})
        })
        .catch(err=>{
            console.log(err)
            dispatch({type:AUTH_DATA.LOGIN_ERROR})
        })
    },
    logout: () => async (dispatch:AppDispatch) => {
        dispatch({type:AUTH_DATA.RESET})
        localStorage.removeItem('adminID-oasis')
    }
}


