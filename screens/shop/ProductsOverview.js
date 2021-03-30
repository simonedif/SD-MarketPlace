import React from 'react';
import { FlatList, Text, View, Button, StyleSheet } from 'react-native';
//import { useSelector } from 'react-redux';


const ProductsOverviewScreen = ({navigation}) => {
    return (
        <View>
            <Text>I am prod</Text> 
            <Button 
                title='Go to register'
                onPress={() => {navigation.navigate('CartScreen')}}
                />
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

const styles = StyleSheet.create({
    centered: { flex: 1, justifyContent: 'center', alignItems: 'center' }
  });

export default ProductsOverviewScreen;