import React from 'react';
import { FlatList, Text } from 'react-native';
import { HeaderTitle } from 'react-navigation-stack';
import { useSelector } from 'react-redux';

const ProductsOverviewScreen = props => {
    const products = useSelector(state => state.products.avaiableProducts)
    return (
    <FlatList 
        data={products} 
        keyExtractor={item => item.id} 
        keyExtractor={itemData => <Text>itemData.item.title</Text>}
    />
    );
};

ProductsOverviewScreen.navigationOptions = (
    HeaderTitle:''
);

export default ProductsOverviewScreen;