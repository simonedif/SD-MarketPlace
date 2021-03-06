import React from 'react';
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Colors from '../../constants/Colors';
import CartItem from '../../components/shop/CartItem';

//redux import reducers and Actions
import cart from '../../store/reducers/cart';
import * as cartactions from '../../store/action/cart';
import * as ordersActions from '../../store/action/order';

const CartScreen = (props) => {
   
  //Cart Total use to  render the price on the total
  const cartTotalAmount = useSelector(state => state.cart.totalAmount);
   
  //Render cart screen  
  const cartProducts = useSelector(state => state.cart.items);
     
  //Import Dispatch function
  const dispatch = useDispatch();
      
  return (
    <View style={styles.screen} >
       <View style={styles.summary} >
          <View style={styles.summaryText} >
            <Text style={styles.amount}>Total: <Text>£{cartTotalAmount}</Text></Text>
           </View>
          <Button 
            title="Order Now" 
            disabled={cartProducts.length === 0 }
            onPress={() => {
              dispatch(ordersActions.addOrder(cartProducts, cartTotalAmount))
              //Console.log Testing Items
              console.log(cartTotalAmount);
              console.log(cartProducts);
            }}
            />
        </View>
        <FlatList 
          data={cartProducts}
          keyExtractor={(item,index) => `key-${item.id}-${index}`}
          renderItem={itemData => {
            const { quantity, productTitle, sum, id } = itemData.item
            return (
            <CartItem 
                quantity={quantity}
                title={productTitle}
                amount={sum * quantity}
                onRemove={() => {
                  dispatch(cartactions.removeCart(id));
                }}
            />
          )}}
        />
    </View>
  );
};

export const cartOptions = props => {
  return {
    headerTitle: 'Your Cart',
  }
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