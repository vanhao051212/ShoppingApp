import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, ScrollView,
  Dimensions, StyleSheet
} from 'react-native';

import CartItem from './CartItem';
import getCart from '../../../../api/getCart';
import saveCart from '../../../../api/saveCart';
import resetCart from '../../../../api/resetCart';

function toTitleCase(str) {
  return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

// start add new cart
function addNewCart(item, prevCart) {
  const size = prevCart.length;
  let i;
  for (i=0; i<size; i++){
    if (prevCart[i].product.id == item.id){
      return prevCart;
    }
  }
  return prevCart.concat({ product:item, quantity: 1 });

}
class CartView extends Component {
  state = {
    cartArray: []
  }

  componentDidMount() {
    // console.log('start get cart');
    // resetCart();
    getCart().then(item => this.setState({ cartArray: item }));
  }

  render() {
    const { cartArray } = this.state;
    const { main, checkoutButton, checkoutTitle, wrapper, } = styles;
    const { navigation } = this.props;
    return (

      <View style={wrapper}>

        <ScrollView style={main}>
          {cartArray.map((item) => (
            <CartItem navigation={navigation} product={item.product} key={item.product.id} quantity={item.quantity}/>
          ))}

        </ScrollView>
        <TouchableOpacity style={checkoutButton}>
          <Text style={checkoutTitle}>TOTAL {1000}$ CHECKOUT NOW</Text>
        </TouchableOpacity>
      </View>
    );
  }
  static getDerivedStateFromProps(props, state) {
    if (typeof props.route.params !== 'undefined') {
      // console.log(props.route.params.product);
      const { product } = props.route.params;
      let cartArray = addNewCart(product, state.cartArray);
      console.log(cartArray);
      // saveCart(cartArray);
      return {
        cartArray: cartArray
      }
    }
    return null;
  }
}

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#DFDFDF'
  },
  checkoutButton: {
    height: 50,
    margin: 10,
    marginTop: 0,
    backgroundColor: '#2ABB9C',
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  main: {
    width, backgroundColor: '#DFDFDF'
  },
  checkoutTitle: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Avenir'
  },
});

export default CartView;
