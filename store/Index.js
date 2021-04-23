import { createStore, combineReducers } from 'redux';

//Reducer Root files
import productsReducer from './reducers/products';
import cartReducer from './reducers/cart';


const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
});

export const store = createStore(rootReducer);