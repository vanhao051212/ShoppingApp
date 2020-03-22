import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput, Image } from 'react-native';

import SignIn from './SignIn';
import SignUp from './SignUp';
import HeaderSign from './HeaderSign';
export default class Authentication extends Component {
  state = { isSignUp: true }
  render() {
    const { container, bottomButtonContainer,
      activeStyle, inActiveStyle, bottomButtonLeft, bottomButtonRight } = styles;
    const { navigation } = this.props;
    const { isSignUp } = this.state;
    return (
      <View style={container}>
        <HeaderSign navigation={navigation} />
        {isSignUp ? (
          <SignIn navigation={navigation} />

        ) : (
            <SignUp GotoSignIn={() => this.setState({ isSignUp: true })} />

          )}

        <View style={bottomButtonContainer}>
          <TouchableOpacity style={bottomButtonLeft} onPress={() => this.setState({ isSignUp: true })}>
            <Text style={isSignUp ? activeStyle : inActiveStyle}>SIGN IN</Text>
          </TouchableOpacity>

          <TouchableOpacity style={bottomButtonRight} onPress={() => this.setState({ isSignUp: false })}>
            <Text style={isSignUp ? inActiveStyle : activeStyle}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#34B089',
    flex: 1,
    justifyContent: 'space-between'
  },
  bottomButtonContainer: {
    flexDirection: 'row',
    height: 50,
    margin: 20,
    justifyContent: 'center',

  },
  bottomButtonLeft: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'white',
    marginRight: 1,
    borderBottomLeftRadius: 25,
    borderTopLeftRadius: 25
  },
  bottomButtonRight: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'white',
    marginLeft: 1,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25
  },
  activeStyle: {
    color: '#34B089'
  },
  inActiveStyle: {
    color: '#d7d7d7'
  },

})