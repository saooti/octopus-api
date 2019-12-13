const axios = require('axios');
const fetchHelper = require('../helper/fetch');

var fetchCategories = function fetchCategories(apiUrl, parameters) {
  return new Promise((resolve, reject) => {
    const params = fetchHelper.getUriSearchParams(parameters);
    let uri = apiUrl + 'iab/list?' + params.toString();
    axios
      .get(uri)
      .then(function(data) {
        resolve(data.data);
      })
      .catch(error => reject('Error while fetching authentication ' + error));
  });
};

module.exports = {
	fetchCategories: fetchCategories,
}