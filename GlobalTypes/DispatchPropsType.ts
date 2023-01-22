import { PRODUCTS_DATA } from "../Redux/products/products.actionTypes";

export default interface DispatchPropsType {
    type: PRODUCTS_DATA,
    payload?: any
}