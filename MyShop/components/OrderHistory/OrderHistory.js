import React, { Component } from 'react';
import {
  View, TouchableOpacity, Text, Image, StyleSheet, Dimensions, ScrollView
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import backSpecial from '../../media/appIcon/backs.png';
import getOrderHistory from '../../api/getOrderHistory';
import getToken from '../../api/getToken';
import OrderHistoryItem from './OrderHistoryItem';
export default class OrderHistory extends Component {
  constructor(props) {
    super(props);
    this.state = { arrOrder: [] };
  }
  componentDidMount() {
    getToken()
      .then(res => getOrderHistory(res))
      .then(res => this.setState({ arrOrder: res }))
  }
  render() {
    const { wrapper, header, headerTitle, backIconStyle, body, orderRow } = styles;
    const { navigation } = this.props;
    const { arrOrder } = this.state;
    return (
      <View style={wrapper}>
        <View style={header}>
          <View />
          <Text style={headerTitle}>Order History</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={backSpecial} style={backIconStyle} />
          </TouchableOpacity>
        </View>
        <View style={body}>
          {/* <ScrollView>
            <OrderHistoryItem/>
            <OrderHistoryItem/>
            <OrderHistoryItem/>
            <OrderHistoryItem/>
          </ScrollView> */}
          <FlatList
            data={arrOrder}
            renderItem={(e) =>
              <OrderHistoryItem
                info={e.item}
              />
            }
          />
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
