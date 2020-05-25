import { host as _host } from './ip';


const getOrderHistory = (token) => (
  fetch(`http://${_host}:3000/api/get_order_history`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token: token}),
  })
    .then(res => res.json())
)
module.exports = getOrderHistory;