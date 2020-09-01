const axios = require('axios');
const fetchHelper = require('../helper/fetch');
const init = require('../helper/init');

var fetchOrganisations = async function fetchOrganisations(parameters) {
  const params = fetchHelper.getUriSearchParams(parameters);
  let uri = init.octopusSdk.url + 'organisation/search?' + params.toString();
  const response = await axios.get(uri);
  return response.data;
};

var fetchOrganisation = async function fetchOrganisation(productorId) {
  let uri = init.octopusSdk.url + 'organisation/' + productorId;
  const response = await axios.get(uri);
  return response.data;
};

var liveEnabledOrganisation = async function liveEnabledOrganisation(productorId) {
  let uri = init.octopusSdk.url + 'organisation/liveEnabled/' + productorId;
  const response = await axios.get(uri);
  return response.data;
};

module.exports = {
	fetchOrganisation: fetchOrganisation,
  fetchOrganisations: fetchOrganisations,
  liveEnabledOrganisation: liveEnabledOrganisation,
}

