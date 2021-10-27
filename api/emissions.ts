import axios from 'axios';
import fetchHelper from '../helper/fetch';
import init from '../helper/init';

var fetchEmissions = async function fetchEmissions(parameters): Promise<any> {
  if(init.octopusSdk.organisationId && !parameters.organisationId){
    parameters.organisationId = init.octopusSdk.organisationId;
  }
  const params = fetchHelper.getUriSearchParams(parameters);
  let uri = init.octopusSdk.url +'emission/search?' +params.toString();
  const response = await axios.get(uri);
  return response.data;
};

var fetchRSS = function fetchRSS(emissionId: number|undefined): string {
  return init.octopusSdk.url +  'rss/emission/' + emissionId;
};

var fetchEmissionPath = function fetchEmissionPath(emissionId: number|undefined): string {
  return init.octopusSdk.url +  'emission/' + emissionId;
};

var fetchItuneCategory = async function fetchItuneCategory(iabId: string): Promise<any>{
  let uri = init.octopusSdk.url + 'emission/itunes/' + iabId;
  const response :any = await axios.get(uri);
  if(response.data.level2){
    return response.data.level1+" "+response.data.level2;
  }else{
    return response.data.level1;
  }
};

var fetchEmission = async function fetchEmission(emissionId: number|undefined): Promise<any> {
  const uri = init.octopusSdk.url + 'emission/' + emissionId;
  const response = await axios.get(uri);
  return response.data;
};

export default {
	fetchEmissions: fetchEmissions,
  fetchEmission: fetchEmission,
  fetchItuneCategory: fetchItuneCategory,
  fetchEmissionPath: fetchEmissionPath,
  fetchRSS: fetchRSS,
}
