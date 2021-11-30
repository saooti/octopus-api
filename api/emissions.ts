import { Emission } from "../class/emission";
import { FetchParam } from "../class/fetchParam";

const axios = require('axios');
const fetchHelper = require('../helper/fetch');
const init = require('../helper/init');

var fetchEmissions = async function fetchEmissions(parameters: FetchParam): Promise<{
  count: number;
  result:Array<Emission>;
  sort: string;}> {
  const header = await fetchHelper.createAuthenticatedFetchHeader();
  if(init.octopusSdk.organisationId && !parameters.organisationId){
    parameters.organisationId = init.octopusSdk.organisationId;
  }
  const params = fetchHelper.getUriSearchParams(parameters);
  let uri = init.octopusSdk.url +'emission/search?' +params.toString();
  const response = await axios.get(uri, { headers: { ...header } });
  return response.data;
};

var fetchRSS = function fetchRSS(emissionId: number|undefined): string {
  return init.octopusSdk.url +  'rss/emission/' + emissionId;
};

var fetchEmissionPath = function fetchEmissionPath(emissionId: number|undefined): string {
  return init.octopusSdk.url +  'emission/' + emissionId;
};

var fetchItuneCategory = async function fetchItuneCategory(iabId: string): Promise<string>{
  const header = await fetchHelper.createAuthenticatedFetchHeader();
  let uri = init.octopusSdk.url + 'emission/itunes/' + iabId;
  const response = await axios.get(uri, { headers: { ...header } });
  if(response.data.level2){
    return response.data.level1+" "+response.data.level2;
  }else{
    return response.data.level1;
  }
};

var fetchEmission = async function fetchEmission(emissionId: number|undefined): Promise<Emission> {
  const header = await fetchHelper.createAuthenticatedFetchHeader();
  const uri = init.octopusSdk.url + 'emission/' + emissionId;
  const response = await axios.get(uri, { headers: { ...header } });
  return response.data;
};

export {
	fetchEmissions,
  fetchEmission,
  fetchItuneCategory,
  fetchEmissionPath,
  fetchRSS,
}
