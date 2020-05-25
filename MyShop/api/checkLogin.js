import { host as _host } from './ip';

const checkLogin = (token) => (
  fetch(`http://${_host}:3000/auth/check_login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({token:token }),
  })
    .then(res => res.json())
)

export default checkLogin;