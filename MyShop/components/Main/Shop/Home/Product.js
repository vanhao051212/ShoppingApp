import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import sp4 from '../../../../media/temp/sp4.jpeg';
import { host as _host } from '../../../../api/ip';
const uri = `http://${_host}:3000/images/product/`;
export default class Product extends Component {
  state = {}
  static propTypes = {
    product: PropTypes.object.isRequired
  }
  render() {
    const { container, imageStyle, textContainer, textName, textPrice } = styles;
    const { navigation, product } = this.props;
    const img = product.images.split(',')
    
    return (
      <TouchableOpacity style={container}
        onPress={() => navigation.navigate('ProductDetails', { product: product })}
      >
        <Image source={{ uri: `${uri}${img[1]}` }} style={imageStyle} />
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