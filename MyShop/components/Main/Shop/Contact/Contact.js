import React, { Component } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Header from '../Header';

export default class Contact extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, }}>
        {/* <Header navigation={navigation} /> */}
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>This is Contact Screen</Text>

          <Button
            title={'Blabla'}
            onPress={() => alert('need to do')}
          />
        </View>
      </View>
    );
  }
}