import { legacy_createStore, combineReducers, compose, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'
import productsReducer from './products/products.reducer'
import productReducer from './product/product.reducer'
import authReducer from './auth/auth.reducer'
import usersReducer from './users/users.reducer'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'

const rootReducer = combineReducers({
    Products: productsReducer,
    Product: productReducer,
    Auth: authReducer,
    Users: usersReducer,
})
// ---Redux DevTools
let composeEnhancers = compose;
if (typeof window !== 'undefined') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, void, AnyAction>