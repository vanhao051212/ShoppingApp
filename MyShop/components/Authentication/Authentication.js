import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput, Image } from 'react-native';

import backIcon from '../../media/appIcon/back_white.png';
import ic_logo from '../../media/appIcon/ic_logo.png';


export default class Authentication extends Component {
  state = { isSignUp: true }

  render() {
    const { container, headerContainer, icon, text, textInput,
      buttonSign, textSign, bottomButtonContainer,
      activeStyle, inActiveStyle, bottomButtonLeft, bottomButtonRight } = styles;
    const { navigation } = this.props;
    const { isSignUp } = this.state;
    const textSignUp = isSignUp ? 'SIGN IN NOW' : 'SIGN UP NOW';
    return (
      <View style={container}>
        <View style={headerContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image source={backIcon} style={icon} />
          </TouchableOpacity>
          <Text style={text}>Wearing a Dress</Text>
          <TouchableOpacity onPress={() => alert('need to do...')}>
            <Image source={ic_logo} style={styles.icon} />
          </TouchableOpacity>
        </View>

        {isSignUp ? (
          <View style={{}}>
            <TextInput placeholder={'Enter your Email'} style={textInput} />
            <TextInput placeholder={'Enter your Password'} style={textInput} />
            <TouchableOpacity style={buttonSign} onPress={() => alert('need to do.')}>
              <Text style={textSign}>{textSignUp}</Text>
            </TouchableOpacity>
          </View>
        ) : (
            <View style={{}}>
              <TextInput placeholder={'Enter your Name'} style={textInput} />
              <TextInput placeholder={'Enter your Email'} style={textInput} />
              <TextInput placeholder={'Enter your Password'} style={textInput} />
              <TextInput placeholder={'Re-enter your Password'} style={textInput} />
              <TouchableOpacity style={buttonSign} onPress={() => alert('need to do.')}>
                <Text style={textSign}>{textSignUp}</Text>
              </TouchableOpacity>
            </View>
          )}

        <View style={bottomButtonContainer}>
          <TouchableOpacity style={bottomButtonLeft} onPress={() => alert('need to do.')}>
            <Text style={isSignUp ? activeStyle : inActiveStyle}>SIGN IN</Text>
          </TouchableOpacity>
          {/* <View style={{width:5, backgroundColor:'#34B089'}}></View> */}
          <TouchableOpacity style={bottomButtonRight} onPress={() => alert('need to do.')}>
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
  textInput: {
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    margin: 20,
    marginBottom: 0,
    paddingLeft: 20
  },
  inputContainer: {
    margin: 10,
  },
  buttonSign: {
    height: 50,
    borderRadius: 25,
    backgroundColor: '#34B089',
    margin: 20,
    marginBottom: 0,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textSign: {
    fontSize: 15,
    color: 'white'
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
  }
})