import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home/Home';
import Cart from './Cart/Cart';
import Search from './Search/Search';
import Contact from './Contact/Contact';
import Header from './Header'

import homeIconS from '../../../media/appIcon/home.png';
import homeIcon from '../../../media/appIcon/home0.png';
import cartIconS from '../../../media/appIcon/cart.png';
import cartIcon from '../../../media/appIcon/cart0.png';
import searchIconS from '../../../media/appIcon/search.png';
import searchIcon from '../../../media/appIcon/search0.png';
import contactIconS from '../../../media/appIcon/contact.png';
import contactIcon from '../../../media/appIcon/contact0.png';


const BottomTab = createBottomTabNavigator();

export default class Shop extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, }}>
        <Header navigation={navigation} />
        <BottomTab.Navigator tabBarOptions={{ activeTintColor: '#34B089', }}>
          <BottomTab.Screen name='Home' component={Home}
            options={{
              tabBarIcon: ({ focused }) => (
                focused ?
                  <Image source={homeIconS} style={styles.icon} />
                  :
                  <Image source={homeIcon} style={styles.icon} />
              )
            }}
          />
          <BottomTab.Screen name='Cart' component={Cart}
            options={{
              tabBarIcon: ({ focused }) => (
                focused ?
                  <Image source={cartIconS} style={styles.icon} />
                  :
                  <Image source={cartIcon} style={styles.icon} />
              )
            }}
          />
          <BottomTab.Screen name='Search' component={Search}
            options={{
              tabBarIcon: ({ focused }) => (
                focused ?
                  <Image source={searchIconS} style={styles.icon} />
                  :
                  <Image source={searchIcon} style={styles.icon} />
              )
            }}
          />
          <BottomTab.Screen name='Contact' component={Contact}
            options={{
              tabBarIcon: ({ focused }) => (
                focused ?
                  <Image source={contactIconS} style={styles.icon} />
                  :
                  <Image source={contactIcon} style={styles.icon} />
              )
            }}
          />
        </BottomTab.Navigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: { width: 25, height: 25 }
})
