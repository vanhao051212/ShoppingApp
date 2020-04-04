import { host as _host } from './ip';


const getOrderHistory = (token) => (
  fetch(`http://${_host}/app/order_history.php`, {
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