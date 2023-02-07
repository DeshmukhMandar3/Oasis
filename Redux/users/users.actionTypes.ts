export enum USERS_DATA {
    FETCH_LOADING = "users/fetch/loading",
    FETCH_ERROR = "users/fetch/error",
    FETCH_SUCCESS = "users/fetch/success",
    POST_LOADING = "users/post/loading",
    POST_ERROR = "users/post/error",
    POST_SUCCESS = "users/post/success",
    UPDATE_LOADING = "users/patch/loading",
    UPDATE_ERROR = "users/patch/error",
    UPDATE_SUCCESS = "users/patch/success",
    DELETE_LOADING = "users/delete/loading",
    DELETE_ERROR = "users/delete/error",
    DELETE_SUCCESS = "users/delete/success",
}

export enum USERS_API {
    UPDATE_PARAMS = "users/api/update_params",
    RESET_PARAMS = "users/api/reset_params",
    RESET = "users/state/reset",
}