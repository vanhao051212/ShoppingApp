import { host as _host } from './ip';

import getToken from './getToken';


const sendOrder = (token, arrayDetail) => {
  try {
    fetch(`http://${_host}/app/cart.php`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token, arrayDetail }),
    })
      .then(res => res.text())
      .then(res => console.log(res))
  } catch (error) {
    console.log(error);
  }


}

export default sendOrder;