import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, ScrollView,
  Dimensions, StyleSheet
} from 'react-native';

import sp1 from '../../../../media/temp/sp1.jpeg';
import global from '../global';
import CartItem from './CartItem';

function toTitleCase(str) {
  return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}


class CartView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // CartArray: [
      //   {
      //     count:'1',
      //     id: "30",
      //     name: "contrast embro",
      //     idType: "4",
      //     nameType: "Maxi Dress",
      //     price: "121",
      //     color: "Fuchsia",
      //     material: "leather",
      //     description: "Take your vacay-ready style to the next level with the bold personality of this embroidered maxi dress. With casually elegant details like a tassel-tie plunging neckline and hi-lo hem, it promises to be a total head-turner with heels.",
      //     images: [
      //       "56.jpeg",
      //       "57.jpeg"
      //     ]
      //   }
      // ]
    }
  }
  addProductToCart(){
    const {product} = this.props;
    // this.setState({CartArray:this.state.CartArray.concat(product)})
    global.addProductToCart(product);
  }
  // componentDidMount(){
  //   const {product}= this.props;
  //   console.log(product);
  //   this.setState({
  //   })
  // }
  render() {
    const { main, checkoutButton, checkoutTitle, wrapper, } = styles;
    const { navigation, product } = this.props;
    const { CartArray } = this.state;
    return (
      <View style={wrapper}>
        <ScrollView style={main}>
          {/* {CartArray.map((item) => (
            <CartItem navigation={navigation} product={item} key={item.id}/>
          ))} */}
          {/* <CartItem navigation={navigation} image={sp1}/>
          <CartItem navigation={navigation} image={sp1}/>
          <CartItem navigation={navigation} image={sp1}/>
          <CartItem navigation={navigation} image={sp1}/> */}
        </ScrollView>
        <TouchableOpacity style={checkoutButton}>
          <Text style={checkoutTitle}>TOTAL {1000}$ CHECKOUT NOW</Text>
        </TouchableOpacity>
      </View>
    );
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
  // product: {
  //   flexDirection: 'row',
  //   margin: 10,
  //   padding: 10,
  //   backgroundColor: '#FFFFFF',
  //   borderRadius: 2,
  //   shadowColor: '#3B5458',
  //   shadowOffset: { width: 0, height: 3 },
  //   shadowOpacity: 0.2
  // },
  // productImage: {
  //   width: imageWidth,
  //   height: imageHeight,
  //   flex: 1,
  //   resizeMode: 'center'
  // },
  // mainRight: {
  //   flex: 3,
  //   justifyContent: 'space-between'
  // },
  // productController: {
  //   flexDirection: 'row'
  // },
  // numberOfProduct: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   justifyContent: 'space-around'
  // },
  // txtName: {
  //   paddingLeft: 20,
  //   color: '#A7A7A7',
  //   fontSize: 20,
  //   fontWeight: '400',
  //   fontFamily: 'Avenir'
  // },
  // txtPrice: {
  //   paddingLeft: 20,
  //   color: '#C21C70',
  //   fontSize: 20,
  //   fontWeight: '400',
  //   fontFamily: 'Avenir'
  // },
  // txtShowDetail: {
  //   color: '#C21C70',
  //   fontSize: 10,
  //   fontWeight: '400',
  //   fontFamily: 'Avenir',
  //   textAlign: 'right',
  // },
  // showDetailContainer: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   justifyContent: 'flex-end'
  // }
});

export default CartView;
