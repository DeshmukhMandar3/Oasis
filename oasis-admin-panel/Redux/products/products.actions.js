import axios from 'axios'
import {PRODUCTS_DATA} from './products.actionTypes'
import { getDataApi } from './products.api'

export const PRODUCTS_ACTIONS = {
    getData : (page, limit) => async (dispatch) => {
        dispatch({type:PRODUCTS_DATA.FETCH_LOADING})
        axios.get(`https://backend-cw-4.onrender.com/amazon?_page=${page}&_limit=${limit}`)
        .then(res=>dispatch({type:PRODUCTS_DATA.FETCH_SUCCESS, payload:res}))
        .catch(err=>dispatch({type:PRODUCTS_DATA.FETCH_ERROR}))
    }
}