import { ADD_TO_CART } from '../action/cart';
import cartModel from '../../models/cartModel';

const initialState = {
    items: {},
    totalAmount: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: 
            const addedProduct = action.product;
            const prodPrice = addedProduct.price;
            const prodTitle = addedProduct.title;

            //Check Items if it's alredy in the Cart Screen
            
    }      
    return state;
};