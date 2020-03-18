import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Product from './Product';

import sp1 from '../../../../media/temp/sp1.jpeg';
import sp2 from '../../../../media/temp/sp2.jpeg';
import sp3 from '../../../../media/temp/sp3.jpeg';
import sp4 from '../../../../media/temp/sp4.jpeg';
export default class TopProduct extends Component {
  state = {}
  render() {
    const { container, titleContainer, title, productContainer } = styles;
    const { navigation } = this.props;
    return (
      <View style={container}>
        <View style={titleContainer}>
          <Text style={title}>TOP PRODUCT</Text>
        </View>
        <View style={productContainer}>

          <Product name={'PRODUCT NAME'} price={'3000$'} image={sp1} navigation={navigation} />
          <Product name={'bla bla'} price={'3000$'} image={sp2} navigation={navigation} />
          <Product name={'PRODUCT NAME'} price={'2000$'} image={sp3} navigation={navigation} />
          <Product name={'bla bla'} price={'1500$'} image={sp4} navigation={navigation} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    shadowColor: '#2e272b',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
  },
  titleContainer: {
    height: 50,
    backgroundColor: 'white',

    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    color: '#afaeaf',
    paddingLeft: 10
  },
  productContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  }
})