const host = require('./ip');

const changeInfo = (token, name, phone, address) => (
  fetch(`http://${host.host}/app/change_info.php`, {
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