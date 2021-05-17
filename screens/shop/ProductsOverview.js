import React from 'react';
import { FlatList, Text, View, Button, StyleSheet, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

//Header Button UI & Colors
import HeaderButton from '../../components/UI/HeaderButton';
import Colors from '../../constants/Colors';

//Redux Import
import ProductItem from '../../components/shop/ProductItems';
import * as cartAction from '../../store/action/cart'; // * will include all function

const ProductsOverviewScreen = ({ navigation }) => {
  const products = useSelector(state => state.products.availableProducts); 
  const dispatch = useDispatch();

  //Button Handler Component - Below Function to Dynamic Use The Buttons on Product Items.

  const selectItemHandler = (id, title) => {
      navigation.navigate('ViewDetails', {
      productId: id,
      productsTitle: title
     })
  };

    return (
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={itemData => (
          <ProductItem
            image={itemData.item.imageUrl}
            title={itemData.item.title}
            price={itemData.item.price}
            onSelect={() => {
              selectItemHandler(itemData.item.id, itemData.item.title);
            }}
          >
            <Button 
              color={Colors.primary} 
              title="View Details" 
              onPress={() => {
                selectItemHandler(itemData.item.id, itemData.item.title);
              }} 
            />
            <Button 
              color={Colors.primary} 
              title="To Cart" 
              onPress={() => {
                dispatch(cartAction.addToCart(itemData.item));
              }} 
            />
          </ProductItem>
        )}
      />
  );
};

export const screenOptions = ({ navigation }) => {
  return {
    headerTitle: 'Service Desk MarketPlace',

    //Header Icon on The Right

    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      </HeaderButtons>
    ),

    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Cart"
          iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
          onPress={() => {
            navigation.navigate('Cart');
          }}
        />
      </HeaderButtons>
    )
  };
};


export default ProductsOverviewScreen;