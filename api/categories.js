const axios = require('axios');
const fetchHelper = require('../helper/fetch');
const init = require('../helper/init');

var fetchCategories = async function fetchCategories(parameters) {
  const params = fetchHelper.getUriSearchParams(parameters);
  let uri = init.octopusSdk.url + 'iab/list' + '?' + params.toString();
  if(init.octopusSdk.organisationId){
    uri = init.octopusSdk.url + 'iab/list/'+ init.octopusSdk.organisationId + '?' + params.toString();
  }
  const response = await axios.get(uri);
  return response.data;
};

var fetchCategoriesOrga = async function fetchCategories(organisationId, parameters) {
  const params = fetchHelper.getUriSearchParams(parameters);
  let uri = init.octopusSdk.url + 'iab/list/'+ organisationId + '?' + params.toString();
  const response = await axios.get(uri);
  return response.data;
};

module.exports = {
  fetchCategories: fetchCategories,
  fetchCategoriesOrga: fetchCategoriesOrga,
}