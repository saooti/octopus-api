import axios from 'axios';
import fetchHelper from '../helper/fetch';
const init = require('../helper/init');

var fetchOrganisations = async function fetchOrganisations(parameters: any): Promise<any> {
  const params = fetchHelper.getUriSearchParams(parameters);
  let uri = init.octopusSdk.url + 'organisation/search?' + params.toString();
  const response = await axios.get(uri);
  return response.data;
};

var fetchOrganisation = async function fetchOrganisation(productorId: string): Promise<any> {
  let uri = init.octopusSdk.url + 'organisation/' + productorId;
  const response = await axios.get(uri);
  return response.data;
};

var liveEnabledOrganisation = async function liveEnabledOrganisation(productorId: string): Promise<any> {
  let uri = init.octopusSdk.url + 'organisation/liveEnabled/' + productorId;
  const response = await axios.get(uri);
  return response.data;
};
var fetchOrganisationAttributes = async function fetchOrganisationAttributes(productorId: string): Promise<any> {
  let uri = init.octopusSdk.url + 'organisation/attributes/' + productorId;
  const response = await axios.get(uri);
  return response.data;
};

module.exports ={
	fetchOrganisation: fetchOrganisation,
  fetchOrganisations: fetchOrganisations,
  liveEnabledOrganisation: liveEnabledOrganisation,
  fetchOrganisationAttributes: fetchOrganisationAttributes,
}

