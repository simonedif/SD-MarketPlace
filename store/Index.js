import { createStore, combineReducers } from 'redux';

//Reducer Root files
import productsReducer from './reducers/products';
import cartReducer from './reducers/cart';
import orderReducer from './reducers/order';


const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    order: orderReducer
});

export const store = createStore(rootReducer);