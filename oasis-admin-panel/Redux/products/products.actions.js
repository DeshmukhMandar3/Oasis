import axios from 'axios'
import {PRODUCTS_DATA} from './products.actionTypes'
import { getDataApi } from './products.api'

export const PRODUCTS_ACTIONS = {
    getData : () => async (dispatch) => {
        dispatch({type:PRODUCTS_DATA.FETCH_LOADING})
        axios.get(`https://backend-cw-4.onrender.com/amazon?_page=1&_limit=10`)
        .then(res=>dispatch({type:PRODUCTS_DATA.FETCH_SUCCESS, payload:res}))
        .catch(err=>dispatch({type:PRODUCTS_DATA.FETCH_ERROR}))
    }
}