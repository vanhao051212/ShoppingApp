import React, { Component } from 'react';
import {
  View, TouchableOpacity, Text, Image, StyleSheet, TextInput, Alert
} from 'react-native';
import backSpecial from '../../media/appIcon/backs.png';

import changeInfo from '../../api/changeInfo';
import global from '../global';
export default class ChangeInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtName: 'Phung Van Hao',
      txtAddress: 'Thang Binh/ Quang Nam',
      txtPhone: '+84364244183'
    };
  }

  handleChangeInfo = () => {
    const {navigation} = this.props;
    const { token } = this.props.route.params;
    const { txtName, txtAddress, txtPhone } = this.state;
    changeInfo(token, txtName, txtPhone, txtAddress)
    .then (res=>{
      global.changeInfo(res);
    })
    Alert.alert('Change Info Success')
    navigation.navigate('Home');
  }

  render() {
    const {
      wrapper, header, headerTitle, backIconStyle, body,
      signInContainer, signInTextStyle, textInput
    } = styles;
    const { name, address, phone } = this.state;
    const { navigation } = this.props;
    return (
      <View style={wrapper}>
        <View style={header}>
          <View />
          <Text style={headerTitle}>User Infomation</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image source={backSpecial} style={backIconStyle} />
          </TouchableOpacity>
        </View>
        <View style={body}>
          <TextInput
            style={textInput}
            placeholder="Enter your name"
            autoCapitalize="none"
            value={name}
            onChangeText={txtName => this.setState({ ...this.state, txtName })}
          />
          <TextInput
            style={textInput}
            placeholder="Enter your address"
            autoCapitalize="none"
            value={address}
            onChangeText={txtAddress => this.setState({ ...this.state, txtAddress })}
          />
          <TextInput
            style={textInput}
            placeholder="Enter your phone number"
            autoCapitalize="none"
            value={phone}
            onChangeText={txtPhone => this.setState({ ...this.state, txtPhone })}
          />
          <TouchableOpacity style={signInContainer} onPress={this.handleChangeInfo}>
            <Text style={signInTextStyle}>CHANGE YOUR INFOMATION</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: '#fff' },
  header: { flex: 1, backgroundColor: '#2ABB9C', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 10 },// eslint-disable-line
  headerTitle: { fontFamily: 'Avenir', color: '#fff', fontSize: 20 },
  backIconStyle: { width: 30, height: 30 },
  body: { flex: 10, backgroundColor: '#F6F6F6', justifyContent: 'center' },
  textInput: {
    height: 45,
    marginHorizontal: 20,
    backgroundColor: '#FFFFFF',
    fontFamily: 'Avenir',
    paddingLeft: 20,
    borderRadius: 20,
    marginBottom: 20,
    borderColor: '#2ABB9C',
    borderWidth: 1
  },
  signInTextStyle: {
    color: '#FFF', fontFamily: 'Avenir', fontWeight: '600', paddingHorizontal: 20
  },
  signInContainer: {
    marginHorizontal: 20,
    backgroundColor: '#2ABB9C',
    borderRadius: 20,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  signInStyle: {
    flex: 3,
    marginTop: 50
  }
});

// goBackToMain() {
//     const { navigator } = this.props;
//     navigator.pop();
// }
