import {AUTH_DATA} from './auth.actionTypes'
import { getAdmin } from './auth.api'
import { AppDispatch } from '../store'

export const AUTH_ACTIONS = {
    login: (email:string, password:string) => async (dispatch:AppDispatch) => {
        dispatch({type:AUTH_DATA.LOGIN_LOADING})
        getAdmin(email, password)
        .then(res=>{
            let data = res.data
            if (data.length) {
                const {name, email, mobile, id, image} = data[0]
                localStorage.setItem('adminData-oasis', JSON.stringify({name, email, mobile, id, image}))
                dispatch({type:AUTH_DATA.LOGIN_SUCCESS, payload:{name, email, mobile, id, image}})
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
        localStorage.removeItem('adminData-oasis')
    }
}


