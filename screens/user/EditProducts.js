import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const EditProductScreen = (props) => {


  return (
    <ScrollView>
      <View>
        <Text>Title</Text>
        <TextInput />
      </View>
    </ScrollView>
  )
};

const Styles = StyleSheet.create({})

export default EditProductScreen;