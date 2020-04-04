import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, ScrollView, View, Image, Dimensions } from 'react-native';

import global from '../../../global';
import ProductItem from '../ListProduct/ProductItem';

import { FlatList } from 'react-native-gesture-handler';
function toTitleCase(str) {
  return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

class SearchView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: []
    };
    global.onSearch = this.onSearch.bind(this);
  }
  onSearch(product) {
    this.setState({ product });
  }
  render() {
    const { wrapper } = styles;
    const { navigation, route } = this.props;
    const {product}= this.state;
    return (
      <View style={wrapper}>
        <FlatList
        data={product}
        renderItem={(e) =>
          <ProductItem
            navigation={navigation}
            product={e.item}
            key={e.item.id}
          />
        }
      />
      </View>
      
    );
  }
}

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    flex: 1,
    margin:10
  },
});

export default SearchView;



