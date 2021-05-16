import React from 'react';
import { FlatList, Text, View, Platform, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/UI/HeaderButton';
import Colors from '../../constants/Colors';

//Order Item Component Import
import OrderItem from '../../components/shop/OrderItem';

const OrdersScreen = () => {
  const orders = useSelector(state => state.orders.orders);
    return (
        <FlatList 
        data={orders}
        keyExtractor={item => item.id}
        renderItem={itemData => <OrderItem
          //style={{ width: '100%'}}
          amount={itemData.item.totalAmount} 
          date={itemData.item.date}
          items={itemData.item.items}
        />
      }
    />
  );
};


//Header Option Configuration
export const ordersScreenOptions = ({ navigation }) => {
  return {
    headerTitle: 'Your Orders',

    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};

export default OrdersScreen;