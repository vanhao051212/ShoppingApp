import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import profile from '../../media/temp/profile.png'

import global from '../global';
import getToken from '../../api/getToken';
import checkLogin from '../../api/checkLogin';
import removeToken from '../../api/removeToken';
import refreshToken from '../../api/refreshToken';
export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      token: ''
    }
    global.onSignIn = this.onSignIn.bind(this);
    global.changeInfo = this.changeInfo.bind(this);
  }
  componentDidMount() {
    getToken()
      .then(res => {
        if (res) {
          this.setState({ token: res })
          checkLogin(res)
            .then(res => {
              this.setState({ user: res ? res.user : null })
            });
        }
      })

    // setInterval(()=>{
    //   getToken().then(res=>console.log(res))
    // },3000) 
    // setInterval(() => {
    //   refreshToken(this.state.token)
    // }, 60 * 1000)
  }
  onSignIn(user) {
    this.setState({ user });
  }
  changeInfo(user) {
    this.setState({ user });
  }
  handleSignOut = () => {
    const { navigation } = this.props;
    removeToken();
    this.setState({ user: null })
    navigation.navigate("Authentication");
  }
  render() {
    const { navigation } = this.props;
    const { user, token } = this.state;
    const { container, profileContainer, imageProfile, textProfile, button, buttonText } = styles;
    return (
      <View style={container}>
        <View >
          <TouchableOpacity style={profileContainer} onPress={() => alert('need to do...')}>
            <Image source={profile} style={imageProfile} />
            <Text style={textProfile}>{user ? user.name : ''}</Text>
          </TouchableOpacity>
        </View>
        {!user && (
          <View>
            <TouchableOpacity style={[button, { alignItems: 'center' }]} onPress={() => navigation.navigate('Authentication')}>
              <Text style={buttonText}>SIGN IN</Text>
            </TouchableOpacity>
          </View>
        )}
        {user && (
          <View>

            <TouchableOpacity style={button} onPress={() => navigation.navigate('OrderHistory')}>
              <Text style={buttonText}>Order History</Text>
            </TouchableOpacity>
            <TouchableOpacity style={button} onPress={() => navigation.navigate('ChangeInfo', { token: token })}>
              <Text style={buttonText}>Change Info</Text>
            </TouchableOpacity>
            <TouchableOpacity style={button} onPress={this.handleSignOut}>
              <Text style={buttonText}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={{ height: 50 }}></View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#34B089', flex: 1, justifyContent: 'space-between'
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
    fontSize: 20
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
    fontSize: 17
  }
})