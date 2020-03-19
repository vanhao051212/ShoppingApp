import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, ScrollView, Image, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import ProductItem from './ProductItem';

import sp1 from '../../../../media/temp/sp1.jpeg';
import sp2 from '../../../../media/temp/sp2.jpeg';
import sp3 from '../../../../media/temp/sp3.jpeg';
import sp4 from '../../../../media/temp/sp4.jpeg';
import sp5 from '../../../../media/temp/sp5.jpeg';
import backIcon from '../../../../media/appIcon/backList.png'
export default class ListProduct extends Component {
  render() {
    const { navigation } = this.props;
    const { container, header, icon, headerText } = styles;
    return (
      <View style={{ flex: 1, }}>
        {/* <Header navigation={navigation} /> */}
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#DBDBDB' }}>
          <View style={header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={backIcon} style={icon} />
            </TouchableOpacity>
            <Text style={headerText}>Party Dress</Text>
            <View style={icon}></View>
          </View>
          <ScrollView style={container}>

            <ProductItem
              navigation={navigation}
              image={sp1}
              productName={'Ao Giap'}
              productPrice={'3000$'}
              author={'Hao Hao'}
              color={'blue'}
              colorName={'mau ne'}
            />
            <ProductItem
              navigation={navigation}
              image={sp2}
              productName={'Ao Giap'}
              productPrice={'3000$'}
              author={'Hao Hao'}
              color={'red'}
              colorName={'mau ne'}
            />
            <ProductItem
              navigation={navigation}
              image={sp3}
              productName={'Ao Giap'}
              productPrice={'3000$'}
              author={'Hao Hao'}
              color={'green'}
              colorName={'mau ne'}
            />
            <ProductItem
              navigation={navigation}
              image={sp4}
              productName={'Ao Giap'}
              productPrice={'3000$'}
              author={'Hao Hao'}
              color={'teal'}
              colorName={'mau ne'}
            />
          </ScrollView>
          {/* <Button
            title={'Home'}
            onPress={() => navigation.goBack ()}
          /> */}
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
  },
  header: {
    margin: 10,
    marginBottom:0,
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