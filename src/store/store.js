import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// import { cartReducer } from './reducers/cartReducers';
import { productReducer, productDetailsReducer } from './reducers/productReducers';

const reducer = combineReducers ({
    // cart: cartReducer, 
    product: productReducer,
    productDetails: productDetailsReducer
});

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;