import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { useSelector } from 'react-redux';


const OrdersScreen = (props) => {
    
    const orders = useSelector(state => state.orders.orders);

    return (
        <View>
            <Text>Order Screen</Text> 
        </View>
    );
};

export default OrdersScreen;