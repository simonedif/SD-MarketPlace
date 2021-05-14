import { StyleSheet } from 'react-native';

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
    },
    details: {
      width: '100%'
    }
  });

  export default styles