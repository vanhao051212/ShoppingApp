import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import profile from '../../media/temp/profile.png'
export default class Menu extends Component {
  state = {
    isSigning: true
  }
  render() {
    const { navigation } = this.props;
    const { isSigning } = this.state;
    const { container, profileContainer, imageProfile, textProfile, button, buttonText } = styles;
    return (
      <View style={container}>
        <View >
          <TouchableOpacity style={profileContainer} onPress={() => alert('need to do...')}>
            <Image source={profile} style={imageProfile} />
            <Text style={textProfile}>Phung Van Hao</Text>
          </TouchableOpacity>
        </View>
        {!isSigning && (
          <View>
            <TouchableOpacity style={[button, { alignItems: 'center' }]} onPress={() => navigation.navigate('Authentication')}>
              <Text style={buttonText}>SIGN IN</Text>
            </TouchableOpacity>
          </View>
        )}
        {isSigning && (
          <View>
          
            <TouchableOpacity style={button} onPress={() => navigation.navigate('OrderHistory')}>
              <Text style={buttonText}>Order History</Text>
            </TouchableOpacity>
            <TouchableOpacity style={button} onPress={() => navigation.navigate('ChangeInfo')}>
              <Text style={buttonText}>Change Info</Text>
            </TouchableOpacity>
            <TouchableOpacity style={button} onPress={() => navigation.navigate('Authentication')}>
              <Text style={buttonText}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={{height:50}}></View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#34B089', flex: 1, justifyContent:'space-between'
  },
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10
  },
  imageProfile: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  textProfile: {
    color: 'white',
    fontSize:20
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 40,
    margin: 10,
    marginBottom: 0,
    justifyContent: 'center'
  },
  buttonText: {
    paddingLeft: 10,
    color: '#34B089',
    fontSize:17
  }
})