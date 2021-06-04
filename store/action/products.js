export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";

export const deleteProduct = (productId) => {
  return { type: DELETE_PRODUCT, payload: productId };
};

export const createProduct = (title, description, imageURL, price) => {
  return {
    type: CREATE_PRODUCT,
    payloadProductData: {
      title,
      description,
      imageURL,
      price
    },
  };
};

export const updateProduct = (id, title, description, imageURL ) => {
  return {
    type: UPDATE_PRODUCT,
    payloadUpdateProduct: {
      id,
      title,
      description,
      imageURL
    },
  };
};
