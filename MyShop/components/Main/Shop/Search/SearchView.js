import React, { Component } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Header from '../Header';

export default class Search extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, }}>
        {/* <Header navigation={navigation} /> */}
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>This is Search Screen</Text>

          <Button
            title={'Blabla'}
            onPress={() => navigation.navigate('ProductDetails')}
          />
        </View>
      </View>
    );
  }
}