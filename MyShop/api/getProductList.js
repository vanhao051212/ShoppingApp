const getProductList =()=>(
  fetch('http://192.168.1.14/app/')
    .then(res => res.json())
)
export default getProductList;