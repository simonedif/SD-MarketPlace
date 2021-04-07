import React from 'react';
import { FlatList, Text, View, Button, StyleSheet, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

//Header Button UI
import HeaderButton from '../../components/UI/HeaderButton';

//Redux Import
import ProductItem from '../../components/shop/ProductItems';
import * as cartAction from '../../store/action/cart'; // * will include all function

const ProductsOverviewScreen = ({ navigation }) => {
  const products = useSelector(state => state.products.availableProducts);
  
  const dispatch = useDispatch();

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
            OnAddToCart={() => {
              dispatch(cartAction.addToCart(itemData.item));
            }}
          />
        )}
    />
   );
};

export const screenOptions = props => {
  return {
    headerTitle: 'Service Desk MarketPlace',

    //Header Icon on The Right
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Cart"
          iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
          onPress={() => {
            props.navigation.navigate('Cart');
          }}
        />
      </HeaderButtons>
    )
  };
};


export default ProductsOverviewScreen;