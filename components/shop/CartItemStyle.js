import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    cartItem: {
      padding: 10,
      backgroundColor: 'white',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 15,
      borderRadius: 10,
      shadowOpacity: 0.26,
      marginVertical: 5
    },
    itemData: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    quantity: {
      fontFamily: 'open-sans',
      color: '#888',
      fontSize: 16
    },      
    mainText: {
      fontFamily: 'open-sans-bold',
      fontSize: 18,
    },
    deleteButton: {
      marginLeft: 20
    }
  });

export default styles;