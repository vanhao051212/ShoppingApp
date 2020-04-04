const host = require('./ip');

import saveToken from './saveToken';
import getToken from './getToken';
import removeToken from './removeToken';

const getNewToken = (token) => (
  fetch(`http://${host.host}/app/refresh_token.php`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token: token }),
  })
    .then(res => res.text())
)


const refreshToken = async () => {
  try {
    const token = await getToken();
    if (token ==='' || token ==='TOKEN_KHONG_HOP_LE'){
      console.log("chua co token");
    }
    // else console.log(token);
    const newToken = await getNewToken(token);
    await saveToken(newToken);
    // console.log(newToken);
  } catch (error) {
    console.log(error);
  }

  // fetch(`http://${host.host}/app/refresh_token.php`, {
  //   method: 'POST',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({ token: token }),
  // })
  //   .then(res => res.text())
  //   .then(res => saveToken(res));
}

export default refreshToken;