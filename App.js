import React, { useState } from 'react';
import { ProductsNavigator } from './navigation/ShopNavigator';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'

//Reducer Root files
import productsReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';


const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
});

const store = createStore(rootReducer);

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
    <Provider store={store}>
      <ProductsNavigator />
    </Provider> 
  );
}

