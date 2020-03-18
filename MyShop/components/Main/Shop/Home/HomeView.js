import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Header from '../Header';
import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';
export default class HomeView extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: '#DBDBDB' }}>


        <ScrollView>
          <Collection navigation={navigation} />
          <Category navigation={navigation}/>
          <TopProduct navigation={navigation} />
        </ScrollView>

      </View>
    );
  }
}