import React, { useState } from 'react';
import { ProductsNavigator } from './navigation/ShopNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'
import { store } from './store/Index';


//Load Font Function
const fetchFonts = () => {
  return (
    Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    })
  );
};

export default function App() {
  
  //Loading Font async
  const [fontLoad, setFontLoaded] = useState(false);

  if (!fontLoad) {
    return (
      <AppLoading 
        startAsync ={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    )
  }

  return (
    <NavigationContainer>
      <Provider store={store}>
        <ProductsNavigator />
      </Provider>
    </NavigationContainer>
  );
}
