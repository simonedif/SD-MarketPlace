import React from 'react';
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, Button, Platform } from 'react-native';

//Default Screen
import Colors from '../constants/Colors';


//Screens Imoport
import ProductsOverview, { screenOptions } from '../screens/shop/ProductsOverview';
import ProductsDetails, { screenDetailsOptions } from '../screens/shop/ProductDetails';
import CartScreen, { cartOptions } from '../screens/shop/CartScreen';
import OrdersScreen, { orderOptions } from '../screens/shop/OrdersScreen';



//Page header configuration
const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};


const ProductsStackNavigator = createStackNavigator();

export const ProductsNavigator = () => {
  return (
  <NavigationContainer>
    <ProductsStackNavigator.Navigator screenOptions={defaultNavOptions} >
        <ProductsStackNavigator.Screen name="ProductsOverView" component={ProductsOverview} options={screenOptions} />
        <ProductsStackNavigator.Screen name="ViewDetails" component={ProductsDetails} options={screenDetailsOptions} />
        <ProductsStackNavigator.Screen name="Cart" component={CartScreen} options={cartOptions} />
    </ProductsStackNavigator.Navigator>
  </NavigationContainer>
  );
};

const Drawer = createDrawerNavigator();

export const OrdersNavigator = () => {
  return (
      <NavigationContainer>
        <Drawer.Navigator screenOptions={defaultNavOptions} >
          <Drawer.Screen name="Orders" component={OrdersScreen} options={orderOptions} />
        </Drawer.Navigator>
      </NavigationContainer>
  );
};
