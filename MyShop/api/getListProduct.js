const host = require('./ip');

const getListProduct = (id, page)=>(
  // fetch(`http://${host.host}/app/product_by_type.php?id_type=${id}&page=${page}`)
  fetch(`http://${host.host}:3000/api/product_by_type/${id}/${page}`)
    .then(res => res.json())
);

export default getListProduct; 