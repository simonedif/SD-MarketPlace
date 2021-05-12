import { ADD_ORDER } from '../action/order';
import Order from '../../models/order';

const initialState = {
    orders: []
};

//new Date().toString() This is a temp Date used as Id before the server is connected

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_ORDER:
            const newOrder = new Order(
                new Date().toString(),
                action.orderData.items,
                action.orderData.amount,
                new Date()
            );
        return {
            ...state,
            orders: state.orders.concat(newOrder)
        };
    }
    return state;
};
