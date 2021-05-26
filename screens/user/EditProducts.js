import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TextInput, StyleSheet, Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

//Header Button UI
import HeaderButton from '../../components/UI/HeaderButton';

const EditProductScreen = ({ navigation, route }) => {

  //Get the Item id passed with params
  const prodId = route.params.productId;
  console.log(prodId)

  //If items id === to prodId then 'Edit'
  const editedProduct = useSelector(state => state.products.userProducts.find(prod => prod.id === prodId));

  const [ title, setTitle ] = useState(editedProduct ? editedProduct.title : '' );
  const [ imageUrl, setimageUrl ] = useState(editedProduct ? editedProduct.imageUrl : '' );
  const [ price, setPrice ] = useState(editedProduct ? editedProduct.price : '' );
  const [ description, setDescription ] = useState(editedProduct ? editedProduct.description : '' );

  //usecallback to prevent the app to go in infinite loop.
  const handler = useCallback(() => {
      console.log('Sub');
    }, []);

  //Passing Params
  useEffect(() => {
    navigation.setParams({ submit: handler })
  }, [handler]);

  //Price can not be edit so we are not dispay only when we are on Add Product Mode
  return (
    <ScrollView>
      <View style={styles.main} >
        <View style={styles.mainProduct} >
          <Text style={styles.label} >Title</Text>
          <TextInput style={styles.input} 
            value={title}
            onChangeText={text => setTitle(text)}
          />
        </View>
        <View style={styles.mainProduct} >
          <Text style={styles.label} >Image URL</Text>
          <TextInput style={styles.input} 
            value={imageUrl}
            onChangeText={image => setimageUrl(image)}
          />
        </View>
        
        { editedProduct ? null : <View style={styles.mainProduct} >
          <Text style={styles.label} >Price</Text>
          <TextInput style={styles.input} 
            value={price}
            onChangeText={price => setPrice(price)}
          />
        </View> }

        <View style={styles.mainProduct} >
          <Text style={styles.label} >Description</Text>
          <TextInput style={styles.input} 
            value={description}
            onChangeText={description => setDescription(description)}
          />
        </View>
      </View>
    </ScrollView>
  )
};

/*ProductId has been pass from UserProductScreen - If
Product id = id then Edit Product : ADD Products
*/

//submifn has been passed from useEffect
export const EditProductScreenOption = ({ route }) => {
  const submitFn = route.params.submit;

  return {
    headerTitle: route.params.productId 
    ? 'Edit Product' 
    : 'Add Product',
    
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName={Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'}
          onPress={submitFn}
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