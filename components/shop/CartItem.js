import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './CartItemStyle'

const CartItem = (props) => {
    return (
    <View style={styles.cartItem} >
        <View style={styles.itemData} >
          <Text style={styles.quantity} >{props.quantity}</Text> 
          <Text style={styles.mainText} >{props.title}</Text>
        </View>
        <View style={styles.itemData} >
          <Text style={styles.mainText} >£{props.amount.toFixed(2)}</Text>
        <TouchableOpacity onPress={props.onRemove} style={styles.deleteButton} > 
          <Ionicons 
          name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'} 
          size={23}
          color="red"
          />
        </TouchableOpacity>
        </View>
    </View>
  )
};

export default CartItem;