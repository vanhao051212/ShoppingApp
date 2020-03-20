import AsyncStorage from '@react-native-community/async-storage';


const getCart = async ()=>{
  try {
    const value = await AsyncStorage.getItem('@cart');
    if (value !== null){
      // console.log(value);
      return JSON.parse(value);
    }
    else return [];
  } catch (error) {
    console.log('NO ITEM IN CART!!!');
    return [];
  }
}
export default getCart;