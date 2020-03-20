import AsyncStorage from '@react-native-community/async-storage';

const resetCart = async ()=> {
  try {
    await AsyncStorage.removeItem('@cart');
    return true;
  }
  catch (exception) {
    return false;
  }
}

export default resetCart;