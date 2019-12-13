const axios = require('axios');
var fetchHelper = require('../helper/fetch');

var fetchOrganisations = function fetchOrganisations(apiUrl, parameters) {
  return new Promise((resolve, reject) => {
    const params = fetchHelper.getUriSearchParams(parameters);
    let uri = apiUrl + 'organisation/search?' + params.toString();
    axios
      .get(uri)
      .then(function(data) {
        resolve(data.data);
      })
      .catch(error => reject('Error while fetching authentication ' + error));
  });
};

var fetchOrganisation = function fetchOrganisation(apiUrl, productorId) {
  return new Promise((resolve, reject) => {
    let uri = apiUrl + 'organisation/' + productorId;
    axios
      .get(uri)
      .then(function(data) {
        resolve(data.data);
      })
      .catch(error => reject('Error while fetching authentication ' + error));
  });
};

module.exports = {
	fetchOrganisation: fetchOrganisation,
  fetchOrganisations: fetchOrganisations,
}

