import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

import ProductDetails from '../ProductDetails/ProductDetails'
import SearchView from './SearchView'

const SearchStack = createStackNavigator();


export default class Search extends Component {
  render() {
    return (
      <SearchStack.Navigator screenOptions={{ headerShown: false }}>
        <SearchStack.Screen name='Cart' component={SearchView} />
        <SearchStack.Screen name='ProductDetails' component={ProductDetails}/>
      </SearchStack.Navigator>
    );
  }
}