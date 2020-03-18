import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

import HomeView from './HomeView';
import ListProduct from '../ListProduct/ListProduct';
import ProductDetails from '../ProductDetails/ProductDetails'
const HomeStack = createStackNavigator();


export default class Home extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <HomeStack.Navigator screenOptions={{ headerShown: false }}>
        <HomeStack.Screen name='HomeView' component={HomeView} />
        <HomeStack.Screen name='ProductDetails' component={ProductDetails}/>
        <HomeStack.Screen name='ListProduct' component={ListProduct}/>
      </HomeStack.Navigator>
    );
  }
}