import React from 'react';
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { View, Text, Button, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

//Default Screen
import Colors from '../constants/Colors';

//Screens Imoport
import ProductsOverview, { screenOptions } from '../screens/shop/ProductsOverview';
import ProductsDetails, { screenDetailsOptions } from '../screens/shop/ProductDetails';
import CartScreen, { cartOptions } from '../screens/shop/CartScreen';
import OrdersScreen, { ordersScreenOptions } from '../screens/shop/OrdersScreen';
import UserProductsScreen, { UserProductsOptions } from '../screens/user/UserProducts';

//Page header standard default configurations
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
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
  
};

//Main Product Stack Navigator
const ProductsStackNavigator = createStackNavigator();

export const ProductsNavigator = () => {
  return (
    <ProductsStackNavigator.Navigator screenOptions={defaultNavOptions} >
        <ProductsStackNavigator.Screen name="ProductsOverView" component={ProductsOverview} options={screenOptions} />
        <ProductsStackNavigator.Screen name="ViewDetails" component={ProductsDetails} options={screenDetailsOptions} />
        <ProductsStackNavigator.Screen name="Cart" component={CartScreen} options={cartOptions} />
    </ProductsStackNavigator.Navigator>
  );
};

//Order Stack Navigator
const OrderStackNavigator = createStackNavigator();

export const OrdersNavigator = () => {
  return (
    <OrderStackNavigator.Navigator screenOptions={defaultNavOptions} >
      <OrderStackNavigator.Screen name="Orders" component={OrdersScreen} options={ordersScreenOptions} />
    </OrderStackNavigator.Navigator>
  );
};

//Admin Stack Navigator
const AdminStackNavigator = createStackNavigator();

export const AdminNavigator = () => {
  return (
    <AdminStackNavigator.Navigator screenOptions={defaultNavOptions} >
      <AdminStackNavigator.Screen name="Admin" component={UserProductsScreen} options={UserProductsOptions} />
    </AdminStackNavigator.Navigator>
  );
};

//Drawer Navigator configuration
const ShopDrawerNavigator = createDrawerNavigator();

 export const ShopNavigator = () => {
  return (
    <ShopDrawerNavigator.Navigator initialRouteName="ProductsOverView" >
      <ShopDrawerNavigator.Screen 
        name="Products" 
        component={ProductsNavigator} 
        options={{
          drawerIcon: props => (
            <Ionicons 
              name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
              size={23}
              color={props.color}
            />
          )
        }}
      />
      <ShopDrawerNavigator.Screen 
        name="Orders" 
        component={OrdersNavigator}
        options={{
          drawerIcon: props => (
            <Ionicons 
              name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
              size={23}
              color={props.color}
            />
          )
        }}
      />
      <ShopDrawerNavigator.Screen 
        name="Admin" 
        component={AdminNavigator}
        options={{
          drawerIcon: props => (
            <Ionicons 
              name={Platform.OS === 'android' ? 'md-settings' : 'ios-settings-sharp'}
              size={23}
              color={props.color}
            />
          )
        }}
      />
    </ShopDrawerNavigator.Navigator>
  );
};
