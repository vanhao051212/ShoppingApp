import { host as _host } from './ip';

const checkLogin = (token) => (
  fetch(`http://${_host}/app/check_login.php`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({token }),
  })
    .then(res => res.json())
)

export default checkLogin;