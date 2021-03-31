import React from 'react';
import { FlatList, Text, View, Button, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import ProductItem from '../../components/shop/ProductItems';

const ProductsOverviewScreen = ({ navigation }) => {
  const products = useSelector(state => state.products.availableProducts);
    return (
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={itemData => (
          <ProductItem
            image={itemData.item.imageUrl}
            title={itemData.item.title}
            price={itemData.item.price}
            OnViewDetail={() => navigation.navigate('Productsdetails', {
               productId: itemData.item.id,
               productsTitle: itemData.item.title
              })
            }
            OnAddToCart={() => {}}
          />
        )}
    />
   );
};

export const screenOptions = () => {
    return {
        headerTitle: 'Service Desk MarketPlace'
    };
};


export default ProductsOverviewScreen;