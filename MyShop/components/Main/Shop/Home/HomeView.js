import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import global from '../global';

import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';
export default class HomeView extends Component {
  constructor(props){
    super(props);
    this.state={
      types:[],
      products:[],
      cartArray:[]
    };
    global.addProductToCart= this.addProductToCart.bind(this);
  }
  componentDidMount(){
    fetch('http://192.168.1.14/app/')
    .then(res => res.json())
    .then(resJson=> {
      const {type, product} = resJson;
      this.setState({
        types:type,
        products:product
      });
    })
    .catch((e)=> console.log(e))
  }
  addProductToCart(){
    this.setState({cartArray:this.state.cartArray.concat(product)})
  }
  render() {
    const { navigation } = this.props;
    const {types, products} = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: '#DBDBDB' }}>

        <ScrollView>
          <Collection navigation={navigation}  />
          <Category navigation={navigation} types={types}/>
          <TopProduct navigation={navigation} products={products}/>
        </ScrollView>

      </View>
    );
  }
}