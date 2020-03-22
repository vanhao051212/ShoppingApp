import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

import backIcon from '../../media/appIcon/back_white.png';
import ic_logo from '../../media/appIcon/ic_logo.png';

export default class HeaderSign extends Component {
  state = {  }
  render() {
    const {  headerContainer, icon, text } = styles;
    const { navigation } = this.props;
    return (
      <View style={headerContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image source={backIcon} style={icon} />
          </TouchableOpacity>
          <Text style={text}>Wearing a Dress</Text>
          <TouchableOpacity onPress={() => alert('need to do...')}>
            <Image source={ic_logo} style={styles.icon} />
          </TouchableOpacity>
        </View>
    );
  }
}


const styles = StyleSheet.create({
 
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  },
  icon: {
    width: 25, height: 25
  },
  text: {
    fontSize: 25,
    color: 'white'
  },
})