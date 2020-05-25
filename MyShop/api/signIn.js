import { host as _host } from './ip';
const signIn = (email, password) => (
  fetch(`http://${_host}:3000/auth/login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then(res => res.json())
)

export default signIn;