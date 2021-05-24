import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

//Header Button UI
import HeaderButton from '../../components/UI/HeaderButton';


const EditProductScreen = (props) => {

  return (
    <ScrollView>
      <View style={styles.main} >
        <View style={styles.mainProduct} >
          <Text style={styles.label} >Title</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.mainProduct} >
          <Text style={styles.label} >Image URL</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.mainProduct} >
          <Text style={styles.label} >Price</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.mainProduct} >
          <Text style={styles.label} >Description</Text>
          <TextInput style={styles.input} />
        </View>
      </View>
    </ScrollView>
  )
};

/*ProductId has been pass from UserProductScreen - If
Product id = id then Edit Product : ADD Products
*/

export const EditProductScreenOption = ({ route }) => {
  return {
    headerTitle: route.params.productId 
    ? 'Edit Product' 
    : 'Add Product',
    
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName={Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'}
          onPress={() => {
            //to be add
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  main: {
    margin: 20
  },
  mainProduct: {
    width: '100%'
  },
  label: {
    fontFamily: 'open-sans-bold',
    marginVertical: 8,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  }
})

export default EditProductScreen;