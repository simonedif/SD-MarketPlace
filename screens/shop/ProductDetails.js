import React from 'react';
import { ScrollView, Text, View, Button, StyleSheet, Image } from 'react-native';

import { useSelector } from 'react-redux';

//Route is to pass the Params 
const ProductDetails = ({ route }) => {
    const productId = route.params.productId;
    const selectedProducts = useSelector(state => 
        state.products.availableProducts.find(prod => prod.id === productId)
        );

    return (
    <View>
        <Text>{selectedProducts.title}</Text> 
    </View>
  );
};

export const screenDetailsOptions = navData => {
    return {
      headerTitle: navData.route.params.productsTitle
    };
};


const styles = StyleSheet.create({});


export default ProductDetails;