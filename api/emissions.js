const axios = require('axios');
const fetchHelper = require('../helper/fetch');
const init = require('../helper/init');

var fetchEmissions = function fetchEmissions(parameters) {
  return new Promise((resolve, reject) => {
    if(init.octopusSdk.organisationId && !parameters.organisationId){
      parameters.organisationId = init.octopusSdk.organisationId;
    }
    const params = fetchHelper.getUriSearchParams(parameters);
    let uri = init.octopusSdk.url +'emission/search?' +params.toString();

    axios
      .get(uri)
      .then(function(data) {
        resolve(data.data);
      })
      .catch(error => reject('Error while fetching authentication ' + error));
  });
};

var fetchRSS = function fetchRSS(emissionId) {
  return init.octopusSdk.url +  'rss/emission/' + emissionId;
};

var fetchEmissionPath = function fetchEmissionPath(emissionId) {
  return init.octopusSdk.url +  'emission/' + emissionId;
};

var fetchItuneCategory = function fetchItuneCategory(iabId){
  return new Promise((resolve, reject) => {
    let uri = init.octopusSdk.url + 'emission/itunes/' + iabId;
    axios
      .get(uri)
      .then(function(data) {
          if(data.data.level2){
              resolve(data.data.level1+" "+data.data.level2);
          }else{
              resolve(data.data.level1);
          }

      })
      .catch(error => reject('Error while fetching itunes category ' + error));
  });
};

var fetchEmission = function fetchEmission(emissionId) {
  return new Promise((resolve, reject) => {
    const uri = init.octopusSdk.url + 'emission/' + emissionId;
    axios
      .get(uri)
      .then(function(data) {
        resolve(data.data);
      })
      .catch(error =>
        reject('Error while fetching emission content ' + error)
      );
  });
};

module.exports = {
	fetchEmissions: fetchEmissions,
  fetchEmission: fetchEmission,
  fetchItuneCategory: fetchItuneCategory,
  fetchEmissionPath: fetchEmissionPath,
  fetchRSS: fetchRSS,
}
