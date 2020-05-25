import React, { Component } from 'react';
import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Authentication from './components/Authentication/Authentication';
import ChangeInfo from './components/ChangeInfo/ChangeInfo';
import OrderHistory from './components/OrderHistory/OrderHistory';
// import Main from './components/Main/Main';
import Menu from './components/Main/Menu';
import Shop from './components/Main/Shop/Shop';
import Home from './components/Main/Shop/Home/Home';
import Search from './components/Main/Shop/Search/Search';
import Cart from './components/Main/Shop/Cart/Cart';
import Contact from './components/Main/Shop/Contact/Contact';
import Header from './components/Main/Shop/Header';
import SignIn from './components/Authentication/SignIn';
import { TouchableOpacity } from 'react-native-gesture-handler';
import refreshToken from './api/refreshToken';
import removeToken from './api/removeToken'
const Stack = createStackNavigator();

const BottomTab = createBottomTabNavigator();

const MenuStack = createStackNavigator();
// const MenuStackScreen = () => (
//   <MenuStack.Navigator >
//     <MenuStack.Screen name='Authentication' component={Authentication} />
//     <MenuStack.Screen name='ChangeInfo' component={ChangeInfo} />
//     <MenuStack.Screen name='OrderHistory' component={OrderHistory} />
//   </MenuStack.Navigator>
// )

const Drawer = createDrawerNavigator();
const CustomDrawer = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Menu navigation={navigation} />
    </View>
  );
};
// function CustomDrawerContent(props) {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//     </DrawerContentScrollView>
//   );
// }
export default class MyShop extends Component {

  componentDidMount(){
    setInterval(refreshToken, 60000);
  }
  render() {
    // const { isSigning } = this.state;
    return (
      <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
          {/* <Drawer.Navigator > */}

          <Drawer.Screen name='Home' component={Shop} />
          <Drawer.Screen name='Menu' component={Menu} />
          <Drawer.Screen name='OrderHistory' component={OrderHistory} />
          <Drawer.Screen name='ChangeInfo' component={ChangeInfo} />
          <Drawer.Screen name='Authentication' component={Authentication} />
          {/* <Drawer.Screen name='SignIn' component={SignIn} /> */}
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
