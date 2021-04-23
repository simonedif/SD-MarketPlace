import React from 'react';
import { ScrollView, Text, View, Button, StyleSheet, Image } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import Colors from '../../constants/Colors';

import * as cartAction from '../../store/action/cart';


//Route is to pass the Params 
const ProductDetails = ({ route }) => {
    const productId = route.params.productId;
    const selectedProducts = useSelector(state => 
        state.products.availableProducts.find(prod => prod.id === productId)
        );
      const dispatch = useDispatch();
    return (
      <ScrollView>
        <Image style={styles.image} source={{uri: selectedProducts.imageUrl}} />
        <View style={styles.action}>
          <Button color={Colors.primary} title="Add To Cart" onPress={() => {
            dispatch(cartAction.addToCart(selectedProducts))
          }} />
        </View>
        <Text style={styles.price}>£{selectedProducts.price.toFixed(2)}</Text>
        <Text style={styles.description}>{selectedProducts.description}</Text>
      </ScrollView>
  );
};

export const screenDetailsOptions = navData => {
    return {
      headerTitle: navData.route.params.productsTitle
    };
};


const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300
  },
  price: {
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: 'open-sans-bold'
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 10,
    fontFamily: 'open-sans',
  },
  action: {
    marginVertical: 10,
    alignItems: 'center'
  }
});


export default ProductDetails;