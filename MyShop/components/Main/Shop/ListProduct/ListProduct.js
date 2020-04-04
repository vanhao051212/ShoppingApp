import uuidv4 from 'uuid/v4';
import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, Dimensions, RefreshControl } from 'react-native';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';

import ProductItem from './ProductItem';
import getListProdcuct from '../../../../api/getListProduct';

import backIcon from '../../../../media/appIcon/backList.png'

const keyExtractor = ({ id }) => id.toString();

export default class ListProduct extends Component {
  state = {
    productList: [],
    refreshing: false,
    page: 1,
    id: ''
  }
  componentDidMount() {
    const { category } = this.props.route.params;
    this.setState({ id: category.id });
    getListProdcuct(category.id, 1)
      .then(res => this.setState({ productList: res }));
  }
  onRefresh = () => {
    const { id, page, productList } = this.state;
    this.setState({ refreshing: true, page: page < 4 ? page + 1 : page });
    let newList = productList;
    getListProdcuct(id, page)
      .then(res => {
        newList = newList.concat(res);
        this.setState({ productList: newList, refreshing: false });
      })
      .catch(e => console.log(e));
  }
  render() {
    const { navigation, route } = this.props;
    const { category } = route.params;
    const { productList, refreshing } = this.state;
    const { container, header, icon, headerText } = styles;
    return (
      <View style={{ flex: 1, }}>
        <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#DBDBDB' }}>
          <View style={header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={backIcon} style={icon} />
            </TouchableOpacity>
            <Text style={headerText}>{category.name}</Text>
            <View style={icon}></View>
          </View>

          <View style={container}>
            <FlatList
              data={productList}
              renderItem={(e) =>
                <ProductItem
                  navigation={navigation}
                  product={e.item}
                  key={e.item.id}
                />
              }
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={this.onRefresh}
                />
              }

              /****** warning here... key should be unique ******/
              keyExtractor={items=>items.id}
            />
          </View>
          <View style={{ flex: 0.1 }}></View>
        </View>

      </View>
    );
  }
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: width - 20,
    flex: 10
  },
  header: {
    margin: 10,
    marginBottom: 0,
    flexDirection: 'row',
    height: 50,
    width: width - 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  icon: {
    height: 30,
    width: 30
  },
  headerText: {
    color: '#b10265',
    fontSize: 20
  }
})


{/* <ScrollView style={container}>
            {productList.map(e => (
              <ProductItem
                key={e.id}
                navigation={navigation}
                product={e}
              />
            ))}
          </ScrollView> */}