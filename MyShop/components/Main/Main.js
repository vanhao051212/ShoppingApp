import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class Main extends Component{
  render(){
    const {navigation} = this.props;
    return (
      <View style={{backgroundColor:'teal', flex:1}}>
        <Text>This is Main Screen</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Authentication')}>
          <Text>Go to Authentication Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('OrderHistory')}>
          <Text>Go to OrderHistory Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('ChangeInfo')}>
          <Text>Go to ChangeInfo Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.toggleDrawer('Menu')}>
          <Text>Go to Menu Screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}