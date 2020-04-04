const host = require('./ip');

const getListProduct = (id, page)=>(
  fetch(`http://${host.host}/app/product_by_type.php?id_type=${id}&page=${page}`)
    .then(res => res.json())
);

export default getListProduct; 