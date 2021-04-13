import React from 'react';
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';
import { useSelector } from 'react-redux';

import Colors from '../../constants/Colors';
import CartItem from '../../components/shop/CartItem';


const CartScreen = () => {
    const cartTotalAmount = useSelector(state => state.cart.totalAmount);
    
    // Used for Dynamic button with order option & rendering Flat List
    const cartButton = useSelector(state => state.cart.items)

    const cartProducts = useSelector(state => {
      const arrayProducts = [];
      for (const key in state.cart.items) {
        arrayProducts.push({
          productId: key,
          productTitile: state.cart.items[key].prodTitle,
          productPrice: state.cart.items[key].prodPrice,
          quantity: state.cart.items[key].quantity,
          sum: state.cart.items[key].sum
        })
      }
    })


  return (
    <View style={styles.screen} >
       <View style={styles.summary} >
          <View style={styles.summaryText} >
            <Text style={styles.amount}>Total: <Text>£{cartTotalAmount}</Text></Text>
           </View>
          <Button title="Order Now" disabled={cartButton.length === 0 } />
        </View>
        <FlatList 
          data={cartProducts}
          keyExtractor={item => item.productId}
          renderItem={itemData => (
            <CartItem 
                quantity={itemData.item.quantity}
                title={itemData.item.productTitile}
                amount={itemData.item.sum}
                onRemove={() => {}}
            />
          )}
        />
    </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        margin: 20
    },
    summary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 10,
        
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        borderRadius: 10,
        elevation: 5,
        backgroundColor: 'white',
    },
    summaryText: {
        fontFamily: 'open-sans-bold',
        fontSize: 18
    },
    amount: {
        color: Colors.accent
    } 
});

export default CartScreen