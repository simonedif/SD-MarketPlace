import React, { useState } from 'react';
import { ProductsNavigator } from './navigation/ShopNavigator';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'

import productsReducer from './store/reducers/products';

const rootReducer = combineReducers({
    products: productsReducer
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



  




// import React from 'react';
// import { createStore, combineReducers } from 'redux';
// import { Provider } from 'react-redux';

// import productsReducer from './store/reducers/products';
// import ShopNavigator from './navigation/ShopNavigator';

// const rootReducer = combineReducers({
//   products: productsReducer
// });

// const store = createStore(rootReducer);

// export default function App() {
//   return (
//     <Provider store={store}>
//       <ShopNavigator />
//     </Provider>
//   );
// }
