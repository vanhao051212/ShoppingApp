import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Dimensions } from 'react-native';



export default class ProductItem extends Component {
  state = {}
  render() {
    const { navigation, image, productName, productPrice, author, colorName, color } = this.props;
    const { container, imageStyle, rightContainer, bottomRightContainer, textDetails, colorStyle,
      textName, textPrice, textColor, textAuthor } = styles;
    return (

      <View style={container}>
        <Image source={image} style={imageStyle} />
        <View style={rightContainer}>
          <Text style={textName}>{productName}</Text>
          <Text style={textPrice}>{productPrice}</Text>
          <Text style={textAuthor}>{author}</Text>
          <View style={bottomRightContainer}>
            <Text style={textColor}>Color {colorName}</Text>
            <View style={[colorStyle, { backgroundColor: color }]}></View>
            <TouchableOpacity style={textDetails} onPress={() => navigation.navigate('ProductDetails')}>
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
  textAuthor:{
    fontSize:14,
    fontWeight:'bold'
  }
})