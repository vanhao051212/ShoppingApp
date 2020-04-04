import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';

import banner from '../../../../media/temp/banner.jpg';

const { width,height } = Dimensions.get('window');
export default class Collection extends Component {
  state = {}
  handleShowCollection=()=>{
    
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={{ justifyContent:'center', height:50 }}>
          <Text style={styles.textTitle}>SPRING COLLECTION</Text>
        </View>
        <TouchableOpacity style={{ flex: 4, alignItems:'center' }} onPress={this.handleShowCollection}>
          <Image source={banner} style={styles.image} resizeMode={'center'}/>
        </TouchableOpacity>
      </View>
    );
  }
}
// image size = 933*465 =>
// const imageHeight = height*0.3*0.8 -10 ;
const imageWidth = width-40;
const imageHeight = (imageWidth/2)
const styles = StyleSheet.create({
  container: {
    // height: height * 0.3,
    width:width-20,
    margin: 10,
    backgroundColor: 'white',
    shadowColor: '#2e272b',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    padding: 10,
    paddingTop:0
  },
  textTitle:{
    fontSize:20, 
    color:'#afaeaf'
  },
  image:{
    height:imageHeight,
    width:imageWidth
  }
})