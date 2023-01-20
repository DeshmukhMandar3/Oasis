import {PRODUCT_API, PRODUCT_DATA} from './product.actionTypes'
import { getSingleDataAPI, removeDataAPI } from './product.api'
import { AppDispatch } from '../store'
import { ProductType } from '../../GlobalTypes/ProductType'

type ChangesType = Record <string, string|number|string[]>

export const PRODUCT_ACTIONS = {
    getData : (id:string|undefined) => async (dispatch:AppDispatch) => {
        dispatch({type:PRODUCT_DATA.FETCH_LOADING})
        // if (id===undefined) {
        //     dispatch({type:PRODUCT_DATA.FETCH_ERROR}) 
        //     return;
        // }
        getSingleDataAPI(id)
        .then(res=>dispatch({type:PRODUCT_DATA.FETCH_SUCCESS, payload:res.data}))
        .catch(err=>dispatch({type:PRODUCT_DATA.FETCH_ERROR}))
    },
}

export const STATE_ACTIONS = {
    setID : (id:string|undefined) => ({type:PRODUCT_API.SET_PRODUCT_ID, payload:id}),
    resetEdit : () => ({type:PRODUCT_API.RESET_EDITED}),
    updateEDIT : (changes:ChangesType) => ({type:PRODUCT_API.UPDATE_EDITED, payload:changes}),
    updateSPEC : (key:string, value:string|number, i:number) => ({type:PRODUCT_API.UPDATE_SPEC, payload:{change:value, i}}),
    removeSPEC : (i:number) => ({type:PRODUCT_API.REMOVE_SPEC, payload:i}),
    addSPEC : (key:string, value:string) => ({type:PRODUCT_API.ADD_SPEC, payload:{[key]:value}})
}
