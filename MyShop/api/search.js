const host = require('./ip');
const search = (key)=>(
  fetch(`http://${host.host}/app/search.php?key=${key}`)
    .then(res => res.json())
);

export default search;