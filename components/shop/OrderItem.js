import React, { useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';

const OrderItem = (props) => {
  //Set Button ShowDetails as False (No Show)
  const [ showDetails, SetShowDetails ] = useState(false);

    return (
      <View style={styles.orderItems} >
        <View style={styles.summary} >
          <Text style={styles.amount} >£{parseFloat(props.amount).toFixed(2)}</Text>
          <Text style={styles.date} >{props.date}</Text>
        </View>
        <Button color={Colors.primary} title="Show Details"
          onPress={() => { SetShowDetails(prevState => !prevState);
          }}
        />  
          {showDetails && <View>
              <Text>Work In Progress</Text>
            </View> 
          }
    </View>
  );
};

const styles = StyleSheet.create({
  orderItems: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: 'white',
    margin: 20,
    padding: 10,
    alignItems: 'center',
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    width: '100%',
    marginBottom: 12
  },
  amount: {
    fontFamily: 'open-sans-bold',
    fontSize: 16
  },
  date: {
    fontFamily: 'open-sans',
    fontSize: 16,
    color: '#888'
  }
});

export default OrderItem;