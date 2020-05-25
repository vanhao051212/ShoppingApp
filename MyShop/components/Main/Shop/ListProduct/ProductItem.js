import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Dimensions } from 'react-native';

const host = require ('../../../../api/ip');
const uri = `http://${host.host}:3000/images/product/`;

export default class ProductItem extends Component {
  state = {}
  render() {
    const { navigation, product} = this.props;
    const { container, imageStyle, rightContainer, bottomRightContainer, textDetails, colorStyle,
      textName, textPrice, textColor, textMaterial } = styles;

      const img = product.images.split(',')
    return (

      <View style={container}>
        <Image source={{ uri: `${uri}${img[0]}` }} style={imageStyle} />
        <View style={rightContainer}>
          <Text style={textName}>{ product.name}</Text>
          <Text style={textPrice}>{product.price}$</Text>
          <Text style={textMaterial}>{product.material}</Text>
          <View style={bottomRightContainer}>
            <Text style={textColor}>Color {product.color}</Text>
            <View style={[colorStyle, { backgroundColor: product.color }]}></View>
            <TouchableOpacity style={textDetails} onPress={() => navigation.navigate('ProductDetails',{product})}>
              <Text style={{ color: '#b10265', fontSize: 10 }}>SHOW DETAILS</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
//361-542
const { height } = Dimensions.get('window');
const imageHeight = height / 5;
const imageWidth = (imageHeight / 542) * 361;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    borderColor:'#DBDBDB',
    borderWidth:1,
    paddingVertical:10,
    paddingHorizontal:10
  },
  imageStyle: {
    height: imageHeight,
    width: imageWidth
  },
  rightContainer: {
    paddingLeft: 10,
    justifyContent: 'space-between'
  },
  bottomRightContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textDetails: {

  },
  colorStyle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    margin: 10,
    marginTop:0
  },
  textName: {
    color: '#DBDBDB',
    fontSize: 20
  },
  textPrice: {
    color: 'red'
  },
  textColor: {
    fontSize:15
  },
  textMaterial:{
    fontSize:14,
    fontWeight:'bold'
  }
})