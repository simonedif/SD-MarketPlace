import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'
import { store } from './store/Index';

//Import From Drawer Navigation Screen
import { ShopNavigator } from './navigation/ShopNavigator';


//Load Fonts into the App 
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
        <ShopNavigator />
      </Provider>
    </NavigationContainer>
  );
};
