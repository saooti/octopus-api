const axios = require('axios');
const fetchHelper = require('../helper/fetch');
const init = require('../helper/init');

var fetchCategories = function fetchCategories(parameters) {
  return new Promise((resolve, reject) => {
    const params = fetchHelper.getUriSearchParams(parameters);
      let uri = init.octopusSdk.url + 'iab/list' + '?' + params.toString();
      if(init.octopusSdk.organisationId){
        uri = init.octopusSdk.url + 'iab/list/'+ init.octopusSdk.organisationId + '?' + params.toString();
      }
      axios
        .get(uri)
        .then(function(data) {
          resolve(data.data);
        })
        .catch(error => reject('Error while fetching authentication ' + error));
  });
};

var fetchCategoriesOrga = function fetchCategories(organisationId, parameters) {
  return new Promise((resolve, reject) => {
    const params = fetchHelper.getUriSearchParams(parameters);
    let uri = init.octopusSdk.url + 'iab/list/'+ organisationId + '?' + params.toString();
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
  fetchCategoriesOrga: fetchCategoriesOrga,
}