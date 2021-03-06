import React, { Component } from 'react';
import {
  View, TouchableOpacity, Text, Image, StyleSheet, Dimensions, ScrollView
} from 'react-native';
import backSpecial from '../../media/appIcon/backs.png';
import getOrderHistory from '../../api/getOrderHistory';
import getToken from '../../api/getToken';
export default class OrderHistory extends Component {


  render() {
    const { wrapper, header, headerTitle, backIconStyle, body, orderRow } = styles;
    const { navigation , info} = this.props;
    return (

      <View style={orderRow}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Order id:</Text>
          <Text style={{ color: '#2ABB9C' }}>{info.id}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>OrderTime:</Text>
          <Text style={{ color: '#C21C70' }}>{info.date_order}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Status:</Text>
          <Text style={{ color: '#2ABB9C' }}>{info.status}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Total:</Text>
          <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>{info.total}$</Text>
        </View>
      </View>


    );
  }
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: '#fff' },
  header: { flex: 1, backgroundColor: '#2ABB9C', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 10 },// eslint-disable-line
  headerTitle: { fontFamily: 'Avenir', color: '#fff', fontSize: 20 },
  backIconStyle: { width: 30, height: 30 },
  body: { flex: 10, backgroundColor: '#F6F6F6' },
  orderRow: {
    height: width / 3,
    backgroundColor: '#FFF',
    margin: 10,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: '#DFDFDF',
    shadowOpacity: 0.2,
    padding: 10,
    borderRadius: 2,
    justifyContent: 'space-around'
  }
});
