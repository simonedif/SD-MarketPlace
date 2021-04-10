import React from 'react';
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';
import { useSelector } from 'react-redux';

import Colors from '../../constants/Colors';


const CartScreen = () => {
    const cartTotalAmount = useSelector(state => state.cart.totalAmount);
    
    // Dynamic button with order option
    const cartItems = useSelector(state => state.cart.items)

  return (
    <View style={styles.screen} >
       <View style={styles.summary} >
          <View style={styles.summaryText} >
            <Text style={styles.amount}>Total: <Text>£{cartTotalAmount}</Text></Text>
           </View>
          <Button title="Order Now" disabled={ cartItems.length === 0 } />
        </View>
        <FlatList 
          
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