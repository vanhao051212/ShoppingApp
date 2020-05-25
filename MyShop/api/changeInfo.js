const host = require('./ip');

const changeInfo = (token, name, phone, address) => (
  fetch(`http://${host.host}:3000/auth/change_info`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token, name, phone, address }),
  })
    .then(res => res.json())
)

export default changeInfo;