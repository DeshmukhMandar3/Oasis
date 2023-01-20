export enum PRODUCT_DATA {
    FETCH_LOADING = "product/fetch/loading",
    FETCH_ERROR = "product/fetch/error",
    FETCH_SUCCESS = "product/fetch/success",
    POST_LOADING = "product/post/loading",
    POST_ERROR = "product/post/error",
    POST_SUCCESS = "product/post/success",
    UPDATE_LOADING = "product/patch/loading",
    UPDATE_ERROR = "product/patch/error",
    UPDATE_SUCCESS = "product/patch/success",
}

export enum PRODUCT_API {
    SET_PRODUCT_ID = "product/api/setID",
    RESET_EDITED = "product/edited/reset",
    UPDATE_EDITED = "product/edited/set",
    UPDATE_SPEC = "product/edited/updateSpec",
    ADD_SPEC = "product/edited/addSpec",
    REMOVE_SPEC = "product/edited/removeSpec"
}
