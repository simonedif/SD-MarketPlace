import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TextInput, StyleSheet, Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

//Header Button UI
import HeaderButton from '../../components/UI/HeaderButton';

//Import The Redux ProductAction
import * as productsActions from '../../store/action/products';


const EditProductScreen = ({ navigation, route }) => {
  
  //Get the Item id passed with params
  const prodId = route.params?.productId;
  
  console.log(prodId)

  //If items id === to prodId then 'Edit'
  const editedProduct = useSelector(state => state.products.userProducts.find(prod => prod.id === prodId));

  // Discpatch Action
  const dispatch = useDispatch();

  const [ title, setTitle ] = useState(editedProduct ? editedProduct.title : '' );
  const [ imageUrl, setimageUrl ] = useState(editedProduct ? editedProduct.imageUrl : '' );
  const [ price, setPrice ] = useState(editedProduct ? editedProduct.price : '' );
  const [ description, setDescription ] = useState(editedProduct ? editedProduct.description : '' );

  //Submit Handler 
  const handleSubmit = () => {
    if (editedProduct) {
      dispatch(
        productsActions.updateProduct(prodId, title, description, imageUrl)
      );
    } else {
      dispatch(
        productsActions.createProduct(title, description, imageUrl, price)
      );
    }
  };

  //Set header Option Directly Inside the Edit product Screens to Avoid Passing params across many Screens
  useEffect(() => {
    const handleSubmit = () => {
      if (route.params?.productId) {
        dispatch(productsActions.updateProduct(prodId, title, description, imageUrl))
      } else {
        dispatch(
          productsActions.createProduct(title, description, imageUrl, price))
      };
    };
  
    navigation.setOptions({
      headerTitle: route.params?.productId
    ? 'Edit Product' 
    : 'Add Product',
    
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName={Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'}
          onPress={handleSubmit}
        />
      </HeaderButtons>
    ),
  }
    )
  }, []);

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