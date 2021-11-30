import { Category } from "../class/category";
import { FetchParam } from "../class/fetchParam";

const axios = require('axios');
const fetchHelper = require('../helper/fetch');
const init = require('../helper/init');

var fetchCategories = async function fetchCategories(parameters: FetchParam, organisationId?: string): Promise<Array<Category>> {
  const header = await fetchHelper.createAuthenticatedFetchHeader();
  const params = fetchHelper.getUriSearchParams(parameters);
  let orgaId = '';
  if(organisationId){
    orgaId = organisationId;
  }else if(init.octopusSdk.organisationId){
    orgaId = init.octopusSdk.organisationId;
  }
  let uri = init.octopusSdk.url + 'iab/list' +orgaId+ '?' + params.toString();
  const response = await axios.get(uri, {
    headers: { 'Content-Type': 'application/json; charset=utf-8', ...header },
  });
  return response.data;
};
module.exports = {
  fetchCategories: fetchCategories,
}