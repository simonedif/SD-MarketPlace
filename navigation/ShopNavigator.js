import React from 'react';
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, Button, Platform } from 'react-native';


//Default Screen
import Colors from '../constants/Colors';

//Screens Imoport
import ProductsOverview, { screenOptions } from '../screens/shop/ProductsOverview';
import ProductsDetails from '../screens/shop/ProductDetails';
import CartScreen from '../screens/shop/CartScreen';


const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};


const ProductsStackNavigator = createStackNavigator();

export const ProductsNavigator = () => {
  return (
  <NavigationContainer>
    <ProductsStackNavigator.Navigator screenOptions={defaultNavOptions} >
        <ProductsStackNavigator.Screen name="ProductsOverView" component={ProductsOverview} options={screenOptions} />
        <ProductsStackNavigator.Screen name="ProductsDetails" component={ProductsDetails} />
        <ProductsStackNavigator.Screen name="CartScreen" component={CartScreen} />
    </ProductsStackNavigator.Navigator>
  </NavigationContainer>
  );
};


// import { createStackNavigator, createAppContainer } from 'react-navigation-stack';
// import { Platform } from 'react-native';

// import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
// import Colors from '../constants/Colors';

// const ProductsNavigator = createStackNavigator(
//   {
//     ProductsOverview: ProductsOverviewScreen
//   },
//   {
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
//       },
//       headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
//     }
//   }
// );

// export default createAppContainer(ProductsNavigator);