import { ADD_TO_CART, REMOVE_FROM_CART } from '../action/cart';
import cartModel from '../../models/cartModel';
import { ADD_ORDER } from '../action/order';
import { DELETE_PRODUCT } from '../action/products';

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
      

      const duplicated = state.items.filter(item => { return item.id === addedProduct.id })
      if (duplicated.length > 0) {

        duplicated[0].quantity = duplicated[0].quantity + 1;
        const restItems = state.items.filter(item => { return item.id !== addedProduct.id });
        return {
          ...state,
          items: [...duplicated, ...restItems],
          totalAmount: parseFloat(state.totalAmount) + parseFloat(prodPrice)
        };
        
      } else {
        const newCartItem = new cartModel(1, prodPrice, prodTitle, prodPrice, state.items.length);
        
        //Add cartItem to the Items object
        return {
          ...state,
          items: [...state.items, { id: addedProduct.id, ...newCartItem }],
          totalAmount: parseFloat(state.totalAmount) + parseFloat(prodPrice)
        };
      };
      
    case REMOVE_FROM_CART:
        const selectedItems = state.items.filter(item => { return item.id === action.productId })
        const otherItems = state.items.filter(item => { return item.id !== action.productId })
        const formattedProduct = (state.totalAmount - selectedItems[0].productPrice).toFixed(2);

        if (selectedItems[0].quantity > 1) {
          selectedItems[0].quantity = selectedItems[0].quantity -1
          const sortArray = [...selectedItems, ...otherItems];

          // Sort List of Product Listed
          sortArray.sort((a,b)=>(a.cartIndex > b.cartIndex)?1:(b.cartIndex > a.cartIndex)?-1:0); 
          return {
            ...state,
            items: sortArray, 
            totalAmount: formattedProduct
          };
        } else {
          return {
            ...state,
            items: otherItems,
            totalAmount: formattedProduct
          }
        };

      case ADD_ORDER:
      return initialState;
    
    case DELETE_PRODUCT: {
      const itemToBeDeleted = state.items.filter(item => { return item.id === action.payload });
      console.log(itemToBeDeleted);
      // const deleteItem = state.items.filter(item => { return item.id !== action.payload })
        // return {
        //   ...state,
        //   items: [ ...state, ...deleteItem ],
        //   totalAmount: 0
        // }
      }   
  };

  return state;
};


// //Delete Function JS  = payload is ProductId
// const deleteItems = { ...state.items };
// delete deleteItems[action.payload];
// return {
// ...state,
// items: []