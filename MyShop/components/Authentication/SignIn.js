import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput } from 'react-native';

import signIn from '../../api/signIn';
import global from '../global'
import saveToken from '../../api/saveToken';
export default class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleSignIn = () => {
    const { email, password } = this.state;
    const { navigation } = this.props;
    signIn(email, password)
      .then(res => {
        console.log(res.token)
        global.onSignIn(res.user);
        saveToken(res.token);
        this.setState({
          email: '',
          password: ''
        })
        navigation.goBack();
      })
      .catch(e => console.log(e));

  }
  render() {
    const { textInput, buttonSign, textSign } = styles;
    const { email, password } = this.state;
    const { } = this.props;
    return (
      <View style={{}}>
        <TextInput
          placeholder={'Enter your Email'}
          style={textInput}
          value={email}
          onChangeText={(text) => this.setState({ email: text })}
        />
        <TextInput
          placeholder={'Enter your Password'}
          style={textInput}
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => this.setState({ password: text })}
        />
        <TouchableOpacity style={buttonSign} onPress={this.handleSignIn}>
          <Text style={textSign}>SIGN IN NOW</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={handleSignUp} style={textQ}>
          <Text style={{ color: 'blue' }}>No account? Create one!</Text>
        </TouchableOpacity> */}
      </View>
    );
  }
}


const styles = StyleSheet.create({

  textInput: {
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    margin: 20,
    marginBottom: 0,
    paddingLeft: 20
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

})