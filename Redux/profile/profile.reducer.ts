import { PRODUCTS_DATA, PRODUCTS_API } from "./profile.actionTypes";
import DispatchPropsType from "../../GlobalTypes/DispatchPropsType";
import { ProductType } from "../../GlobalTypes/ProductType";
import { ParamsType } from "./profile.api";

export interface StateType {
    loading: boolean,
    error: boolean,
    data: ProductType[] | null,
    count: number,
    params: ParamsType,
}

const initParams:ParamsType = {
    page : 1,
    limit : 10, 
    pid : undefined, 
    name : "", 
    category : "", 
    sort : "", 
    order : "",
    deleted: 0,
}

const initState: StateType = {
    loading:false,
    error:false,
    data: null,
    count: 0,
    params: initParams
}

export default function productsReducer(state:StateType=initState, {type, payload}:any){
    switch (type) {
        default: return state;
        case PRODUCTS_DATA.FETCH_LOADING: return {...state, loading:true};
        case PRODUCTS_DATA.FETCH_ERROR: return {...state, error:true, loading:false};
        case PRODUCTS_DATA.FETCH_SUCCESS: return {...state, data:payload.data, count:payload.count, loading:false};
        case PRODUCTS_DATA.POST_LOADING: return {...state, loading:true};
        case PRODUCTS_DATA.POST_ERROR: return {...state, error:true, loading:false};
        case PRODUCTS_DATA.POST_SUCCESS: return {...state, data:payload, loading:false};
        case PRODUCTS_DATA.UPDATE_LOADING: return {...state, loading:true};
        case PRODUCTS_DATA.UPDATE_ERROR: return {...state, error:true, loading:false};
        case PRODUCTS_DATA.UPDATE_SUCCESS: return {...state, data:payload, loading:false};
        case PRODUCTS_DATA.DELETE_LOADING: return {...state, loading:true};
        case PRODUCTS_DATA.DELETE_ERROR: return {...state, error:true, loading:false};
        case PRODUCTS_DATA.DELETE_SUCCESS: return {...state, loading:false, params:{...state.params, deleted:state.params.deleted+1}};
        case PRODUCTS_API.UPDATE_PARAMS: return {...state, params: {...state.params, ...payload}};
        case PRODUCTS_API.RESET_PARAMS: return {...state, params:initParams};
        case PRODUCTS_API.RESET: return initState;
    }
}