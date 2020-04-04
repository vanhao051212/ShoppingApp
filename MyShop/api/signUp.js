import { host as _host } from './ip';


const signUp = (email, name, password) => (
  fetch(`http://${_host}/app/register.php`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, name, password }),
  })
    .then(res => res.text())
)
export default signUp;