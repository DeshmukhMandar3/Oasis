import axios from 'axios'
import {PRODUCTS_DATA} from './products.actionTypes'
import { getDataAPI } from './products.api'

export const PRODUCTS_ACTIONS = {
    getData : (params) => async (dispatch) => {
        dispatch({type:PRODUCTS_DATA.FETCH_LOADING})
        getDataAPI(params)
        .then(res=>dispatch({type:PRODUCTS_DATA.FETCH_SUCCESS, payload:res}))
        .catch(err=>dispatch({type:PRODUCTS_DATA.FETCH_ERROR}))
    }
}