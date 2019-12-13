const axios = require('axios');
var fetchHelper = require('../helper/fetch');

var fetchEmissions = function fetchEmissions(store, parameters) {
  return new Promise((resolve, reject) => {
    const params = fetchHelper.getUriSearchParams(parameters);
    let uri =
      fetchHelper.getUriPath(store, 'emission/search') +
      '?' +
      params.toString();

    axios
      .get(uri)
      .then(function(data) {
        resolve(data.data);
      })
      .catch(error => reject('Error while fetching authentication ' + error));
  });
};

var fetchRSS = function fetchRSS(apiUrl, emissionId) {
  return apiUrl +  'rss/emission/' + emissionId;
};

var fetchEmissionPath = function fetchEmissionPath(apiUrl, emissionId) {
  return apiUrl +  'emission/' + emissionId;
};

var fetchItuneCategory = function fetchItuneCategory(apiUrl, iabId){
  return new Promise((resolve, reject) => {
    let uri = apiUrl + 'emission/itunes/' + iabId;
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

var fetchEmission = function fetchEmission(apiUrl, emissionId) {
  return new Promise((resolve, reject) => {
    const uri = apiUrl + 'emission/' + emissionId;
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
