import { FetchParam } from "../class/fetchParam";
import { Organisation } from "../class/organisation";

const axios = require('axios');
const fetchHelper = require('../helper/fetch');
const init = require('../helper/init');

var fetchOrganisations = async function fetchOrganisations(parameters: FetchParam): Promise<{
  count: number;
  result: Array<Organisation>;
sort: string;}> {
  const header = await fetchHelper.createAuthenticatedFetchHeader();
  const params = fetchHelper.getUriSearchParams(parameters);
  let uri = init.octopusSdk.url + 'organisation/search?' + params.toString();
  const response = await axios.get(uri, { headers: { ...header } });
  return response.data;
};

var fetchOrganisation = async function fetchOrganisation(productorId: string): Promise<Organisation> {
  const header = await fetchHelper.createAuthenticatedFetchHeader();
  let uri = init.octopusSdk.url + 'organisation/' + productorId;
  const response = await axios.get(uri, { headers: { ...header } });
  return response.data;
};

var liveEnabledOrganisation = async function liveEnabledOrganisation(productorId: string): Promise<boolean> {
  let uri = init.octopusSdk.url + 'organisation/liveEnabled/' + productorId;
  const response = await axios.get(uri);
  return response.data;
};
var fetchOrganisationAttributes = async function fetchOrganisationAttributes(productorId: string): Promise<{[key:string]:string}> {
  const header = await fetchHelper.createAuthenticatedFetchHeader();
  let uri = init.octopusSdk.url + 'organisation/attributes/' + productorId;
  const response = await axios.get(uri, { headers: { ...header } });
  return response.data;
};

module.exports ={
	fetchOrganisation: fetchOrganisation,
  fetchOrganisations: fetchOrganisations,
  liveEnabledOrganisation: liveEnabledOrganisation,
  fetchOrganisationAttributes: fetchOrganisationAttributes,
}

