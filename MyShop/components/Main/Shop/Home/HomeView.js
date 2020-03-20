import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';

import getListData from '../../../../api/getProductList';
import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';
export default class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      types: [],
      products: [],
      cartArray: []
    };
  }
  componentDidMount() {
    getListData()
      .then(resJson => {
        const { type, product } = resJson;
        this.setState({
          types: type,
          products: product
        });
      })
      .catch((e) => console.log(e))
  }

  render() {
    const { navigation } = this.props;
    const { types, products } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: '#DBDBDB' }}>

        <ScrollView>
          <Collection navigation={navigation} />
          <Category navigation={navigation} types={types} />
          <TopProduct navigation={navigation} products={products} />
        </ScrollView>

      </View>
    );
  }
}