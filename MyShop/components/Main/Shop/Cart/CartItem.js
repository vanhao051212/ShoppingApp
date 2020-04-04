import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Alert,
  Dimensions, StyleSheet, Image
} from 'react-native';
const host =require('../../../../api/ip');
const uri = `http://${host.host}/app/images/product/`;
function toTitleCase(str) {
  return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

class CartView extends Component {

  increaseItem(id) {
    const { increaseItem } = this.props;
    increaseItem(id);
  }
  decreaseItem(id) {
    const { decreaseItem } = this.props;
    decreaseItem(id);
  }
  removeItem(id) {
    const { removeItem } = this.props;
    removeItem(id);
  }
  handleRemoveItem = (id) => {
    Alert.alert(
      'Delete This Item?',
      'This Item will be deleted',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => this.removeItem(id) },
      ],
      { cancelable: false }
    )
  }
  render() {
    const { productContainer, mainRight, productController,
      txtName, txtPrice, productImage, numberOfProduct,
      txtShowDetail, showDetailContainer } = styles;
    const { navigation, product, quantity } = this.props;
    return (

      <View style={productContainer}>
        <Image source={{ uri: `${uri}${product.images[0]}` }} style={productImage} />
        <View style={[mainRight]}>
          <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
            <Text style={txtName}>{toTitleCase(`${product.name}`)}</Text>
            <TouchableOpacity onPress={() => this.handleRemoveItem(product.id)}>
              <Text style={{ fontFamily: 'Avenir', color: '#969696' }}>X</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={txtPrice}>{product.price}$</Text>
          </View>
          <View style={productController}>
            <View style={numberOfProduct}>
              <TouchableOpacity onPress={() => this.increaseItem(product.id)}>
                <Text>+</Text>
              </TouchableOpacity>
              <Text>{quantity}</Text>
              <TouchableOpacity onPress={() => this.decreaseItem(product.id)}>
                <Text>-</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={showDetailContainer} onPress={() => navigation.navigate('ProductDetails', { product: product })}>
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
