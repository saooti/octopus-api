const axios = require('axios');
const fetchHelper = require('../helper/fetch');
const init = require('../helper/init');

var fetchEmissions = async function fetchEmissions(parameters) {
  if(init.octopusSdk.organisationId && !parameters.organisationId){
    parameters.organisationId = init.octopusSdk.organisationId;
  }
  const params = fetchHelper.getUriSearchParams(parameters);
  let uri = init.octopusSdk.url +'emission/search?' +params.toString();
  const response = await axios.get(uri);
  return response.data;
};

var fetchRSS = function fetchRSS(emissionId) {
  return init.octopusSdk.url +  'rss/emission/' + emissionId;
};

var fetchEmissionPath = function fetchEmissionPath(emissionId) {
  return init.octopusSdk.url +  'emission/' + emissionId;
};

var fetchItuneCategory = async function fetchItuneCategory(iabId){
  let uri = init.octopusSdk.url + 'emission/itunes/' + iabId;
  const response = await axios.get(uri);
  if(response.data.level2){
    return response.data.level1+" "+response.data.level2;
  }else{
    return response.data.level1;
  }
};

var fetchEmission = async function fetchEmission(emissionId) {
  const uri = init.octopusSdk.url + 'emission/' + emissionId;
  const response = await axios.get(uri);
  return response.data;
};

module.exports = {
	fetchEmissions: fetchEmissions,
  fetchEmission: fetchEmission,
  fetchItuneCategory: fetchItuneCategory,
  fetchEmissionPath: fetchEmissionPath,
  fetchRSS: fetchRSS,
}
