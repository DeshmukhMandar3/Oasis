import { PRODUCTS_DATA } from "./products.actionTypes";

const initState = {
    loading:false,
    error:false,
    data:{}
}

export default function productsReducer(state=initState, {type, payload}){
    switch (type) {
        default: return state;
        case PRODUCTS_DATA.FETCH_LOADING: return {...state, loading:true};
        case PRODUCTS_DATA.FETCH_ERROR: return {...state, error:true, loading:false};
        case PRODUCTS_DATA.FETCH_SUCCESS: return {...state, data:payload, loading:false};
        case PRODUCTS_DATA.POST_LOADING: return {...state, loading:true};
        case PRODUCTS_DATA.POST_ERROR: return {...state, error:true, loading:false};
        case PRODUCTS_DATA.POST_SUCCESS: return {...state, data:payload, loading:false};
        case PRODUCTS_DATA.UPDATE_LOADING: return {...state, loading:true};
        case PRODUCTS_DATA.UPDATE_ERROR: return {...state, error:true, loading:false};
        case PRODUCTS_DATA.UPDATE_SUCCESS: return {...state, data:payload, loading:false};
    }
}