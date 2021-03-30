import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, Button} from 'react-native';

//Screens Imoport
import ProductsOverview from '../screens/shop/ProductsOverview';
import ProductsDetails from '../screens/shop/ProductDetails';
import CartScreen from '../screens/shop/CartScreen';

const ProductsStackNavigator = createStackNavigator();


export const ProductsNavigator = () => {
  return (
  <NavigationContainer>
    <ProductsStackNavigator.Navigator>
        <ProductsStackNavigator.Screen name="ProductsOverView" component={ProductsOverview}  />
        <ProductsStackNavigator.Screen name="ProductsDetails" component={ProductsDetails} />
        <ProductsStackNavigator.Screen name="CartScreen" component={CartScreen} />
    </ProductsStackNavigator.Navigator>
  </NavigationContainer>
  );
};

// function Login({ navigation }) {
//   return (
//     <View 
//     style={{
//       flex: 1,
//       alignContent: 'center',
//       justifyContent: 'center'  
//     }}>
//       <Text>I am log in Screen</Text>
//       <Button 
//       title='Go to register'
//       onPress={() => {navigation.navigate('Register')
//       }}
//       />
//     </View>
//   )
// };

// function Register() {
//   return (
//     <View 
//     style={{
//       flex: 1,
//       alignContent: 'center',
//       justifyContent: 'center'  
//     }}>
//       <Text>I am log in Login</Text>
//     </View>
//   )
// };


// export const ShopNavigator = () => {
//   return (
//   <NavigationContainer> 
//     <Stack.Navigator initialRouteName="Login">
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="Register" options={{
//           header: () => null
//         }} component={Register} />
//     </Stack.Navigator>
//    </NavigationContainer> 
//   );
// };








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