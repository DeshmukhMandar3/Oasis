export enum PRODUCTS_DATA {
    FETCH_LOADING = "products/fetch/loading",
    FETCH_ERROR = "products/fetch/error",
    FETCH_SUCCESS = "products/fetch/success",
    POST_LOADING = "products/post/loading",
    POST_ERROR = "products/post/error",
    POST_SUCCESS = "products/post/success",
    UPDATE_LOADING = "products/patch/loading",
    UPDATE_ERROR = "products/patch/error",
    UPDATE_SUCCESS = "products/patch/success",
    DELETE_LOADING = "products/delete/loading",
    DELETE_ERROR = "products/delete/error",
    DELETE_SUCCESS = "products/delete/success",
}

export enum PRODUCTS_API {
    UPDATE_PARAMS = "products/api/update_params",
    RESET_PARAMS = "products/api/reset_params",
    RESET = "products/state/reset",
}