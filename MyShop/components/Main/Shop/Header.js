import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions, Image } from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';

import ic_logo from '../../../media/appIcon/ic_logo.png';
import ic_menu from '../../../media/appIcon/ic_menu.png';
const { height } = Dimensions.get('window');

import search from '../../../api/search';
import global from '../../global';
export default class Header extends Component {
  state={
    text:''
  }
  // handleSubmit=()=>{
  //   const {text}= this.state;
  //   const{navigation}= this.props;
  //   search(text)
  //   .then(res=>{
  //     global.onSearch(res);
  //     // navigation.navigate('Search');
  //   })
  //   .catch(e=>console.log(e))

  // }
  handleSubmit = () => {
    const {text}= this.state;
    const{navigation}= this.props;
    search(text)
      .then(res => {
        navigation.navigate('Search');
        global.onSearch(res);
        // saveToken(res.token);
        // this.setState({
        //   email: '',
        //   password: ''
        // })
        
      })
      .catch(e => console.log(e));

  }
  render() {
    const { navigation } = this.props;
    const {text}= this.state;
    return (
      <View style={styles.container}>
        <View style={styles.menu}>
          <TouchableOpacity onPress={() => navigation.openDrawer('Menu')}>
            <Image source={ic_menu} style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.text}>Wearing a Dress</Text>
          <TouchableOpacity onPress={() => alert('need to do...')}>
            <Image source={ic_logo} style={styles.icon} />
          </TouchableOpacity>

        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder={'What do you want to buy?'}
            value={text}
            onChangeText={(text)=>this.setState({text})}
            onSubmitEditing={this.handleSubmit.bind(this)}
            // onFocus={this.handleSearch}
          />
        </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#34B089', height: height / 8, padding: 10, justifyContent: 'space-around'
  },
  icon: {
    width: 25, height: 25
  },
  text: {
    color: 'white', fontSize: 20
  },
  inputContainer: {
    flex: 1, backgroundColor: 'white', alignItems: 'center', height: height / 25, borderRadius: 7
  },
  textInput: {
    padding: 2
  },
  menu: {
    flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
  }
})