import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { useSelector } from 'react-redux';


const OrdersScreen = (props) => {
  const orders = useSelector(state => state.orders.orders);
    return (
      <FlatList 
        data={orders}
        keyExtractor={item => item.id}
        renderItem={itemData => <Text>{itemData.item.totalAmount}</Text>}
    />
  );
};

export const orderOptions = props => {
  return {
    headerTitle: 'Your Order',
  }
};

export default OrdersScreen;