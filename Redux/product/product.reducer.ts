import { PRODUCT_API, PRODUCT_DATA } from "./product.actionTypes";
import { ProductType } from "../../GlobalTypes/ProductType";

export interface StateType {
    loading: boolean,
    error: boolean,
    data: ProductType | null,
    edited: ProductType | null,
    id: string | undefined
}

const initState: StateType = {
    loading:false,
    error:false,
    data: null,
    edited: null,
    id: undefined,
}

export default function productReducer(state:StateType=initState, {type, payload}:any){
    console.log(type, payload)
    switch (type) {
        default: return state;
        case PRODUCT_DATA.FETCH_LOADING: return {...state, loading:true};
        case PRODUCT_DATA.FETCH_ERROR: return {...state, error:true, loading:false};
        case PRODUCT_DATA.FETCH_SUCCESS: return {...state, data:payload, edited:payload, loading:false};
        case PRODUCT_DATA.UPDATE_LOADING: return {...state, loading:true};
        case PRODUCT_DATA.UPDATE_ERROR: return {...state, error:true, loading:false};
        case PRODUCT_DATA.UPDATE_SUCCESS: return {...state, data:payload, edited:payload, loading:false};
        case PRODUCT_API.SET_PRODUCT_ID: return {...state, id:payload};
        case PRODUCT_API.RESET_EDITED: return {...state, edited:state.data};
        case PRODUCT_API.UPDATE_EDITED: return {...state, edited:{...state.edited, ...payload}};
        case PRODUCT_API.UPDATE_SPEC: return {...state, edited:{...state.edited, product_specifications:{product_specification: state.edited?.product_specifications?.product_specification?.map((s, i)=>i===payload.i?{...state.edited?.product_specifications?.product_specification[i], value:payload.change}:s)}}};
        case PRODUCT_API.REMOVE_SPEC: return {...state, edited:{...state.edited, product_specifications:{product_specification: state.edited?.product_specifications?.product_specification?.filter((_, i)=> i!==payload)}}};
        case PRODUCT_API.ADD_SPEC: return {...state, edited:{...state.edited, product_specifications: {product_specification:[...state.edited?.product_specifications?.product_specification, payload]}}};
        case PRODUCT_API.ADD_PRODUCT_INNIT: return {...state, data:null, edited:InitProductState}
    }
}

export const InitProductState:ProductType = {
    crawl_timestamp: "",
    product_url: "",
    product_name: "",
    product_category_tree: [],
    pid: "",
    retail_price: null,
    discounted_price: null,
    image: [],
    is_FK_Advantage_product: "",
    description: "",
    product_rating: "",
    overall_rating: "",
    brand: "",
    product_specifications: {
      product_specification: []
    },
    id: "",
    rating: null,
    stock: null,
    discount: null
  }