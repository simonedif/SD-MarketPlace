import React from 'react';
import { FlatList, Platform, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useNavigation } from "@react-navigation/native";

import ProductItem from '../../components/shop/ProductItems';
import Colors from '../../constants/Colors';

//Header Button UI
import HeaderButton from '../../components/UI/HeaderButton';


//import Redux Function to dispatch the action
import * as productsActions from '../../store/action/products';


const UserProductsScreen = ({ navigation }) => {
  const userProducts = useSelector(state => state.products.userProducts);
  const dispatch = useDispatch();
  const editProductHandler = (id) => {
    navigation.navigate('Edit', {productId: id});
  };

  return (
    <FlatList
      data={userProducts}
      keyExtractor={item => item.id}
      renderItem={itemData => <ProductItem 
        image={itemData.item.imageUrl}
        title={itemData.item.title}
        price={itemData.item.price}
        onSelect={() => {
          editProductHandler(itemData.item.id);
        }}
        >
        <Button 
          color={Colors.primary} 
          title="Edit" 
          onPress={() => {
            editProductHandler(itemData.item.id);
              }} 
            />
          <Button 
            color={Colors.primary} 
            title="Delete" 
            onPress={() => {
            dispatch(productsActions.deleteProduct(itemData.item.id));
            console.log(itemData.item.id)
            }} 
          />
        </ProductItem>
      }
    />
  );
};


export const UserProductsOptions = () => {

  const navigation = useNavigation();
  
  return {
    headerTitle: 'Items Avaiable For SD Team',

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
          title="Add"
          iconName={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
          onPress={() => {
            navigation.navigate('Edit');
          }}
        />
      </HeaderButtons>
    ),

  };
};

export default UserProductsScreen;
