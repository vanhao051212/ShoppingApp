const host = require('./ip');
const signIn = (email, password) => (
  fetch(`http://${host.host}/app/login.php`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then(res => res.json())
)

module.exports = signIn;