import AsyncStorage from '@react-native-community/async-storage';

const removeToken = async ()=> {
  try {
    await AsyncStorage.removeItem('@token');
    return true;
  }
  catch (exception) {
    return false;
  }
}

export default removeToken;