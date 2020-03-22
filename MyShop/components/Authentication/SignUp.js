import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput, Alert } from 'react-native';

import signUp from '../../api/signUp';

export default class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    rePassword: ''
  }
  handleSignUp = () => {
    const { name, email, password, rePassword } = this.state;
    if (name == '') {
      Alert.alert('Notice', 'Name cannot be blank');
    }
    if (email == '') {
      Alert.alert('Notice', 'Email cannot be blank');
    }
    if (password == '') {
      Alert.alert('Notice', 'Password cannot be blank');
    }
    if (rePassword == '') {
      Alert.alert('Notice', 'Re-enter Password cannot be blank');
    }
    if (password == rePassword) {
      signUp(email, name, password)
        .then(res => {
          if (res == 'KHONG_THANH_CONG') {
            Alert.alert('Notice','Email or Username already taken! ');
          }
          else {
            Alert.alert('Successfully!');
            const {GotoSignIn} = this.props;
            GotoSignIn();
          }
        });
      this.setState({
        name: '',
        email: '',
        password: '',
        rePassword: ''
      });
    }
    else {
      Alert.alert(
        'Notice',
        'Password does not match');
    }
  }

  render() {
    const { textInput, buttonSign, textSign } = styles;
    const { } = this.props;
    const { name, email, password, rePassword } = this.state;
    return (
      <View style={{}}>
        <TextInput
          placeholder={'Enter your Name'}
          style={textInput}

          value={name}
          onChangeText={(text) => this.setState({ name: text })}
        />
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
        <TextInput
          placeholder={'Re-enter your Password'}
          style={textInput}
          secureTextEntry={true}
          value={rePassword}
          onChangeText={(text) => this.setState({ rePassword: text })}
        />
        <TouchableOpacity style={buttonSign} onPress={this.handleSignUp}>
          <Text style={textSign}>SIGN UP NOW</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={handleSignIn} style={textQ}>
          <Text style={{ color: 'blue' }}>Already had account, Sign in?</Text>
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