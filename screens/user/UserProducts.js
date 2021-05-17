import React from 'react';
import { FlatList, Platform, Button } from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import ProductItem from '../../components/shop/ProductItems';
import Colors from '../../constants/Colors';

//Header Button UI
import HeaderButton from '../../components/UI/HeaderButton';

const UserProductsScreen = (props) => {
  const userProducts = useSelector(state => state.products.userProducts)

  return (
    <FlatList
      data={userProducts}
      keyExtractor={item => item.id}
      renderItem={itemData => <ProductItem 
        image={itemData.item.imageUrl}
        title={itemData.item.title}
        price={itemData.item.price}
        onSelect={() => {}}
        >
        <Button 
          color={Colors.primary} 
          title="Edit" 
          onPress={() => {
            //Waiting Function
              }} 
            />
          <Button 
            color={Colors.primary} 
            title="Delete" 
            onPress={() => {
            //Waiting Function
            }} 
          />
        </ProductItem>
      }
    />
  );
};

export const UserProductsOptions = ({ navigation }) => {
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
    )
  };
};

export default UserProductsScreen;
