import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ImageBackground, } from 'react-native';
const host=require('../../../../api/ip');
const { width } = Dimensions.get('window');
const uri = `http://${host.host}/app/images/type/`;
export default class Collection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      image: ''
    }
  }
  render() {
    const { navigation, types } = this.props;
    return (
      <View style={styles.container}>
        <View style={{ justifyContent: 'center', height: 50 }}>
          <Text style={styles.textTitle}>LIST OF CATEGORY</Text>
        </View>
        <View style={{ flex: 4, alignItems: 'center' }}>
          <Swiper showsButtons={true} style={{ height: imageHeight }}>

            {types.map(e => (
              <TouchableOpacity onPress={() => navigation.navigate('ListProduct', {category:e})} key={e.id}>
                <ImageBackground source={{uri:`${uri}${e.image}`}} style={styles.imageStyle} >
                  <Text style={styles.imageText}>{e.name}</Text>
                </ImageBackground>
              </TouchableOpacity>
            ))}


          </Swiper>
        </View>

      </View>
    );
  }
}
// image size = 933*465 =>
const imageWidth = width - 40;
const imageHeight = (imageWidth / 2)
const styles = StyleSheet.create({
  container: {
    // height: height * 0.35,
    width: width - 20,
    margin: 10,
    backgroundColor: 'white',
    shadowColor: '#2e272b',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    padding: 10,
    paddingTop: 0
  },
  textTitle: {
    fontSize: 20,
    color: '#afaeaf'
  },
  imageStyle: {
    height: imageHeight,
    width: imageWidth,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageText: {
    fontSize: 20,
    fontFamily: 'Avenir',
    color: '#9a9a9a'
  }
})