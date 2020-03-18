import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

export default class Product extends Component {
  state = {}
  static propTypes = {
    image: Image.propTypes.source.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
  }
  render() {
    const { container, imageStyle, textContainer, textName, textPrice } = styles;
    const { image, name, price, navigation } = this.props;
    return (
      <TouchableOpacity style={container}
        onPress={() => navigation.navigate('ProductDetails')}
      >
        <Image source={image} style={imageStyle} />
        <View style={textContainer}>
          <Text style={textName}>{name}</Text>
          <Text style={textPrice}>{price}</Text>
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