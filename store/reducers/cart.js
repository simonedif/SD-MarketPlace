import { ADD_TO_CART } from '../action/cart';
import cartModel from '../../models/cartModel';

const initialState = {
    items: [],
    totalAmount: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: 
      const addedProduct = action.product;
      const prodPrice = addedProduct.price;
      const prodTitle = addedProduct.title;
      console.log(prodPrice)

      const duplicated = state.items.filter(item => { return item.id === addedProduct.id })
        if (duplicated.length > 0) {
            
          duplicated[0].quantity = duplicated[0].quantity + 1;
          const restItems = state.items.filter(item => { return item.id !== addedProduct.id });
          return {
            ...state,
            items: [ ...duplicated, ...restItems ],
            totalAmount: state.totalAmount + prodPrice
          };        
          console.log(duplicated)        
    } else {
            const newCartItem = new cartModel(1, prodPrice, prodTitle, prodPrice);
            //Add cartItem to the Items object
            return {
              ...state,
              items: [ ...state.items, { id:addedProduct.id, ...newCartItem }],
              totalAmount: state.totalAmount + prodPrice
            };        
        };
    };           
  return state;
};




// Alredy have items in the Cart list
        // const updateCartItem = new cartModel(
        //   state.items[addedProduct.id].quantity + 1,
        //     prodPrice,
        //     prodTitle,
        //     state.items[addedProduct.id].sum + prodPrice
        //   );
        //     return {
        //      ...state,
        //      items: [ ...state.items, { id:addedProduct.id, ...updateCartItem }],
        //      totalAmount: state.totalAmount + prodPrice
        //     };