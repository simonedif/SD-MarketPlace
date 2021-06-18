import PRODUCTS from "../../data/dummy-data";
import {
  DELETE_PRODUCT,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
} from "../action/products";

//Model Product Import
import Product from "../../models/product";

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((prod) => prod.ownerId === "u1"),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      const newProduct = new Product(
        new Date().toString,
        "u1",
        action.payloadProductData.title,
        action.payloadProductData.imageUrl,
        action.payloadProductData.description,
        action.payloadProductData.price,
      );
      return {
        ...state,
        availableProducts: state.availableProducts.concat(newProduct),
        userProducts: state.userProducts.concat(newProduct),
      };

    case UPDATE_PRODUCT:
      const productIndex = state.userProducts.findIndex(
        prod => prod.id === action.payloadUpdateProduct
      );
      
      
      const updatedProduct = new Product(
        //Note: action.payloadUpdateProduct is the "ID"
        action.payloadUpdateProduct,
        state.userProducts[productIndex].ownerId,
        action.payloadProductData.title,
        action.payloadProductData.imageUrl,
        action.payloadProductData.description,
        state.userProducts[productIndex].price,
      );

      const updatedUserProducts = [...state.userProducts];
      updatedUserProducts[productIndex] = updatedProduct;

      //Update availableProducts

      const avaiableProductIndex = state.availableProducts.findIndex(
        (prod) => prod.id === action.payloadUpdateProduct,
      );
      const updatedAvaiableUserProduct = [...state.availableProducts];
      updatedAvaiableUserProduct[avaiableProductIndex] = updatedProduct;

      return {
        ...state,
        availableProducts: updatedAvaiableUserProduct,
        userProducts: updatedUserProducts
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        userProducts: state.userProducts.filter(
          (product) => product.id !== action.payload,
        ),
        availableProducts: state.availableProducts.filter(
          (product) => product.id !== action.payload,
        ),
      };
  }
  return state;
};
