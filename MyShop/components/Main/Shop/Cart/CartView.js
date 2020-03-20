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
//****************** BUG REMOVE LASTEST ITEM BECAUSE PROPS ALWAYS PASSING ****************/
function addNewCart(item, prevCart) {
  const size = prevCart.length;
  let i;
  for (i = 0; i < size; i++) {
    if (prevCart[i].product.id == item.id) {
      return prevCart;
    }
  }
  return prevCart.concat({ product: item, quantity: 1 });

}
class CartView extends Component {
  state = {
    cartArray: []
  }

  componentDidMount() {
    // resetCart();
    getCart().then(item => this.setState({ cartArray: item }));
  }
  increaseItem = (id) => {
    const newCart = this.state.cartArray.map(e => {
      if (e.product.id !== id) return e;
      return { product: e.product, quantity: e.quantity + 1 }
    })
    this.setState({ cartArray: newCart }, () => saveCart(this.state.cartArray));
  }
  decreaseItem = (id) => {
    const newCart = this.state.cartArray.map(e => {
      if (e.product.id !== id) return e;
      return { product: e.product, quantity: e.quantity - 1 }
    })
    this.setState({ cartArray: newCart }, () => saveCart(this.state.cartArray));
  }
  removeItem = (id) => {
    const newCart = this.state.cartArray.filter(e => e.product.id !== id);
    this.setState({
      cartArray: newCart
    }, () => saveCart(this.state.cartArray));
  }


  render() {
    const { cartArray } = this.state;
    const { main, checkoutButton, checkoutTitle, wrapper, } = styles;
    const { navigation } = this.props;
    const arrTotal = cartArray.map(e=>e.product.price*e.quantity);
    let total;
    if (cartArray.length === 0){
       total = 0;
    }
    else  total= arrTotal.reduce((a, b)=>a+b);
    return (

      <View style={wrapper}>

        <ScrollView style={main}>
          {cartArray.map((item) => (
            <CartItem
              navigation={navigation}
              product={item.product}
              key={item.product.id}
              quantity={item.quantity}
              increaseItem={this.increaseItem}
              decreaseItem={this.decreaseItem}
              removeItem={this.removeItem}
            />
          ))}

        </ScrollView>
        <TouchableOpacity style={checkoutButton}>
          <Text style={checkoutTitle}>TOTAL {total}$ CHECKOUT NOW</Text>
        </TouchableOpacity>
      </View>
    );
  }
  static getDerivedStateFromProps(props, state) {
    if (typeof props.route.params !== 'undefined') {
      const { product } = props.route.params;
      let cartArray = addNewCart(product, state.cartArray);
      saveCart(cartArray);
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
