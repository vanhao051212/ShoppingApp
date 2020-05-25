import { host as _host } from './ip';

const getTopProduct =()=>(
  fetch(`http://${_host}:3000/api/getProduct`)
    .then(res => res.json())
)
export default getTopProduct;