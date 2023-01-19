import { legacy_createStore, combineReducers, compose, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'
import productsReducer from './products/products.reducer'

const rootReducer = combineReducers({
    ProductsManager: productsReducer
})
// ---Redux DevTools
let composeEnhancers = compose;
// if (typeof window !== 'undefined') {
//   composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// }
const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store;