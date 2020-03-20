import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, ScrollView,
  Dimensions, StyleSheet, Image
} from 'react-native';

const uri = 'http://192.168.1.14/app/images/product/';
function toTitleCase(str) {
  return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

class CartView extends Component {

  render() {
    const { main, checkoutButton, checkoutTitle, wrapper,
      productContainer, mainRight, productController,
      txtName, txtPrice, productImage, numberOfProduct,
      txtShowDetail, showDetailContainer } = styles;
    const { navigation, product, quantity } = this.props;
    return (

      <View style={productContainer}>
        <Image source={{uri:`${uri}${product.images[0]}`}} style={productImage} />
        <View style={[mainRight]}>
          <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
            <Text style={txtName}>{toTitleCase(`${product.name}`)}</Text>
            <TouchableOpacity>
              <Text style={{ fontFamily: 'Avenir', color: '#969696' }}>X</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={txtPrice}>{product.price}$</Text>
          </View>
          <View style={productController}>
            <View style={numberOfProduct}>
              <TouchableOpacity onPress={()=>alert('need to do.')}>
                <Text>+</Text>
              </TouchableOpacity>
              <Text>{quantity}</Text>
              <TouchableOpacity>
                <Text>-</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={showDetailContainer} onPress={() => navigation.navigate('ProductDetails', {product:product})}>
              <Text style={txtShowDetail}>SHOW DETAILS</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
  // wrapper: {
  //   flex: 1,
  //   backgroundColor: '#DFDFDF'
  // },
  // checkoutButton: {
  //   height: 50,
  //   margin: 10,
  //   marginTop: 0,
  //   backgroundColor: '#2ABB9C',
  //   borderRadius: 2,
  //   alignItems: 'center',
  //   justifyContent: 'center'
  // },
  // main: {
  //   width, backgroundColor: '#DFDFDF'
  // },
  // checkoutTitle: {
  //   color: '#FFF',
  //   fontSize: 15,
  //   fontWeight: 'bold',
  //   fontFamily: 'Avenir'
  // },
  productContainer: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    shadowColor: '#3B5458',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2
  },
  productImage: {
    width: imageWidth,
    height: imageHeight,
    flex: 1,
    resizeMode: 'center'
  },
  mainRight: {
    flex: 3,
    justifyContent: 'space-between'
  },
  productController: {
    flexDirection: 'row'
  },
  numberOfProduct: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  txtName: {
    paddingLeft: 20,
    color: '#A7A7A7',
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Avenir'
  },
  txtPrice: {
    paddingLeft: 20,
    color: '#C21C70',
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Avenir'
  },
  txtShowDetail: {
    color: '#C21C70',
    fontSize: 10,
    fontWeight: '400',
    fontFamily: 'Avenir',
    textAlign: 'right',
  },
  showDetailContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
});

export default CartView;
