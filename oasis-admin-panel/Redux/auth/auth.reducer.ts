import { AUTH_DATA } from "./auth.actionTypes";

export interface userDetails {
    name:string,
    email:string,
    password:string,
    mobile:string,
    image: string,
    id:string,
}

export interface StateType {
    loading: boolean,
    error: boolean,
    invalid: boolean,
    isAuth: boolean,
    authData: userDetails|null,
}

const initState: StateType = {
    loading:false,
    error:false,
    invalid: false,
    authData: null,
    isAuth: false,
}

export default function authReducer(state:StateType=initState, {type, payload}:any){
    switch (type) {
        default: return state;
        case AUTH_DATA.FETCH_LOADING: return {...state, loading:true};
        case AUTH_DATA.FETCH_ERROR: return {...state, error:true, loading:false};
        case AUTH_DATA.FETCH_SUCCESS: return {...state, data:payload, loading:false};
        case AUTH_DATA.LOGIN_LOADING: return {...state, loading:true};
        case AUTH_DATA.LOGIN_ERROR: return {...state, error:true, loading:false};
        case AUTH_DATA.LOGIN_INVALID: return {...state, invalid:true, loading:false};
        case AUTH_DATA.LOGIN_SUCCESS: return {...state, authData:payload, isAuth:true, loading:false};
        case AUTH_DATA.UPDATE_LOADING: return {...state, loading:true};
        case AUTH_DATA.UPDATE_ERROR: return {...state, error:true, loading:false};
        case AUTH_DATA.UPDATE_SUCCESS: return {...state, data:payload, loading:false};
        case AUTH_DATA.RESET: return initState;
    }
}