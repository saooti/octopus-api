const axios = require('axios');
const fetchHelper = require('../helper/fetch');
const init = require('../helper/init');

var fetchOrganisations = function fetchOrganisations(parameters) {
  return new Promise((resolve, reject) => {
    const params = fetchHelper.getUriSearchParams(parameters);
    let uri = init.octopusSdk.url + 'organisation/search?' + params.toString();
    axios
      .get(uri)
      .then(function(data) {
        resolve(data.data);
      })
      .catch(error => reject('Error while fetching authentication ' + error));
  });
};

var fetchOrganisation = function fetchOrganisation(productorId) {
  return new Promise((resolve, reject) => {
    let uri = init.octopusSdk.url + 'organisation/' + productorId;
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

