import React from 'react';
import { FlatList, Text, View } from 'react-native';
//import { useSelector } from 'react-redux';


const ProductsOverviewScreen = () => {
    return (
        <View>
            <Text>I am prod</Text> 
        </View>
    );
};

// const ProductsOverviewScreen = props => {
//   const products = useSelector(state => state.products.availableProducts);
//   return (
//     <FlatList
//       data={products}
//       keyExtractor={item => item.id}
//       renderItem={itemData => <Text>{itemData.item.title}</Text>}
//     />
//   );
// };

// ProductsOverviewScreen.navigationOptions = {
//   headerTitle: 'All Products'
// };

export default ProductsOverviewScreen;