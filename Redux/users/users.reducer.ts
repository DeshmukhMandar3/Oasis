import { USERS_DATA, USERS_API } from "./users.actionTypes";

export interface UsersType   {
    email: string,
    mobile: string,
    password: string,
    id: number
}
export interface ParamsType {
    page :number,
    limit : number, 
    sort : string, 
    order : string, 
    deleted: number,
    email:string|null,
    id:number
}

export interface ParamsPropsType {
    page :number,
    limit? : number, 
    sort? : string, 
    order? : string, 
    deleted?: number,
    email?:string|null
    id?:number
}
export interface StateType {
    loading: boolean,
    error: boolean,
    data: UsersType[] | null,
    count: number,
    params: ParamsType,
}

const initParams:ParamsType = {
    page : 1,
    limit : 10, 
    sort : "", 
    order : "", 
    deleted: 0,
    email: null,
    id: null,
}

const initState: StateType = {
    loading:false,
    error:false,
    data: null,
    count: 0,
    params: initParams
}

export default function usersReducer(state:StateType=initState, {type, payload}:any){
    switch (type) {
        default: return state;
        case USERS_DATA.FETCH_LOADING: return {...state, loading:true};
        case USERS_DATA.FETCH_ERROR: return {...state, error:true, loading:false};
        case USERS_DATA.FETCH_SUCCESS: return {...state, data:payload.data, count:payload.count, loading:false};
        case USERS_DATA.POST_LOADING: return {...state, loading:true};
        case USERS_DATA.POST_ERROR: return {...state, error:true, loading:false};
        case USERS_DATA.POST_SUCCESS: return {...state, data:payload, loading:false};
        case USERS_DATA.UPDATE_LOADING: return {...state, loading:true};
        case USERS_DATA.UPDATE_ERROR: return {...state, error:true, loading:false};
        case USERS_DATA.UPDATE_SUCCESS: return {...state, data:payload, loading:false};
        case USERS_DATA.DELETE_LOADING: return {...state, loading:true};
        case USERS_DATA.DELETE_ERROR: return {...state, error:true, loading:false};
        case USERS_DATA.DELETE_SUCCESS: return {...state, loading:false, params:{...state.params, deleted:state.params.deleted+1}};
        case USERS_API.UPDATE_PARAMS: return {...state, params: {...state.params, ...payload}};
        case USERS_API.RESET_PARAMS: return {...state, params:initParams};
        case USERS_API.RESET: return initState;
    }
}