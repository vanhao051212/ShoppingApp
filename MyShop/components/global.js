
let addNewCart= function(item, prevCart) {
  const size = prevCart.length;
  let i;
  for (i = 0; i < size; i++) {
    if (prevCart[i].product.id == item.id) {
      return prevCart;
    }
  }
  return prevCart.concat({ product: item, quantity: 1 });
}

module.exports={
  onSignIn:null,
  changeInfo:null,
  onAddCart:null,
  onSearch:null,
  addNewCart:addNewCart
}