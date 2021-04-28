import { createStore, combineReducers } from 'redux';

//Reducer Root files
import productsReducer from './reducers/products';
import cartReducer from './reducers/cart';
import ordersReducer from './reducers/order';


const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    orders: ordersReducer
});

export const store = createStore(rootReducer);