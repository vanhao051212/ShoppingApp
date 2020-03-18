import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ImageBackground, } from 'react-native';



import littleIcon from '../../../../media/temp/little.jpg';
import midiIcon from '../../../../media/temp/midi.jpg';
import maxiIcon from '../../../../media/temp/maxi.jpg';

const { width, height } = Dimensions.get('window');
export default class Collection extends Component {
  state = {}
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={{ justifyContent: 'center', height: 50 }}>
          <Text style={styles.textTitle}>LIST OF CATEGORY</Text>
        </View>
        <View style={{ flex: 4, alignItems: 'center' }}>
          <Swiper showsButtons={true} style={{ height: imageHeight }}>

            <TouchableOpacity onPress={() => navigation.navigate('ListProduct')}>
              <ImageBackground source={littleIcon} style={styles.image} >
                <Text style={styles.imageText}>Maxi Dress</Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('ListProduct')}>
              <ImageBackground source={midiIcon} style={styles.image} >
                <Text style={styles.imageText}>Maxi Dress</Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('ListProduct')}>
              <ImageBackground source={maxiIcon} style={styles.image} >
                <Text style={styles.imageText}>Maxi Dress</Text>
              </ImageBackground>
            </TouchableOpacity>
            
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
  image: {
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