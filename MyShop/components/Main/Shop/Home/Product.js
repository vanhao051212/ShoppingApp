import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import sp4 from '../../../../media/temp/sp4.jpeg';

const uri = 'http://192.168.1.14/app/images/product/';
export default class Product extends Component {
  state = {}
  static propTypes = {
    product: PropTypes.object.isRequired
  }
  render() {
    const { container, imageStyle, textContainer, textName, textPrice } = styles;
    const { navigation, product } = this.props;
    return (
      <TouchableOpacity style={container}
        onPress={() => navigation.navigate('ProductDetails', { product: product })}
      >
        <Image source={{ uri: `${uri}${product.images[1]}` }} style={imageStyle} />
        <View style={textContainer}>
          <Text style={textName}>{product.name.toUpperCase()}</Text>
          <Text style={textPrice}>{product.price}$</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
const { width } = Dimensions.get('window');
const imageWidth = (width - 60) / 2;
const imageHeight = (imageWidth / 361) * 452;

const styles = StyleSheet.create({
  container: {
    padding: 10,

  },
  imageStyle: {
    height: imageHeight,
    width: imageWidth
  },
  textContainer: {

  },
  textName: {
    color: '#afaeaf',
    fontSize: 15
  },
  textPrice: {
    color: 'red'
  }
})