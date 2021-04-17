export const ADD_TO_CART = 'ADD_TO_CART';

export const addToCart = product => {
    return { type: ADD_TO_CART, product: product }
};

export const removeCart = productId => {
    return { type: REMOVE_FROM_CART, payload: productId}
};