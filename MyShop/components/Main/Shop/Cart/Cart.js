import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

import ProductDetails from '../ProductDetails/ProductDetails'
import CartView from './CartView'

const CartStack = createStackNavigator();


export default class Cart extends Component {
  render() {
    return (
      <CartStack.Navigator screenOptions={{ headerShown: false }}>
        <CartStack.Screen name='CartView' component={CartView} />
        <CartStack.Screen name='ProductDetails' component={ProductDetails}/>

      </CartStack.Navigator>
    );
  }
}