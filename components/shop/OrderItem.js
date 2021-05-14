import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

import Colors from '../../constants/Colors';
import styles from './OrderItemStyle';

//CartItem Import For Rendering Items ON Show Details Screen
import CartItem from './CartItem';


const OrderItem = (props) => {

  //Set Button ShowDetails as False (No Show)
  const [ showDetails, SetShowDetails ] = useState(false);

    return (
      <View style={styles.orderItems} >
        <View style={styles.summary} >
          <Text style={styles.amount} >£{parseFloat(props.amount).toFixed(2)}</Text>
          <Text style={styles.date} >{props.date}</Text>
        </View>
        <Button color={Colors.primary} title={showDetails ? "Hide Details" : "Show Details" }
          onPress={() => { SetShowDetails(prevState => !prevState);
          }}
        />  
        { showDetails && (
          <View style={[styles.details]}>
            {props.items.map(cartItem => (
              <CartItem
                key={cartItem.id}
                quantity={cartItem.quantity}
                amount={cartItem.sum}
                title={cartItem.productTitle}
              />
            ))}
          </View>
        )}
    </View>
  );
};

/*Quick Note For the Above
Base On The order model - Props get the items from orders array from the State.
Map Item and render on the screen the Quantity, Amount, Title.
Remind to Add Always the key props.
*/


export default OrderItem;