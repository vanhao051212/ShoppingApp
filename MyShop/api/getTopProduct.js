const host = require('./ip');

const getTopProduct =()=>(
  fetch(`http://${host.host}/app/`)
    .then(res => res.json())
)
export default getTopProduct;