import { ModuleApi } from '../class/moduleApi';
import { Parameters } from '../class/parameters';

import axios from 'axios';
import {octopusSdk} from '../helper/init';
import fetchHelper from '../helper/fetch';


function getApiUrl(moduleName:ModuleApi){
  switch (moduleName) {
    case 2: return octopusSdk.commentsUrl;
    case 4: return '';
    case 6: return octopusSdk.playerUrl;
    case 9: return octopusSdk.studioUrl;
    case 11: return octopusSdk.speechToTextUrl;
    case 13: return octopusSdk.recoUrl;
    case 14: return octopusSdk.radioUrl;
    default: return octopusSdk.url;
  }
};
function adjustParameters(parameters: Parameters, isPodcast = false, header?:string){
  if (isPodcast && (!parameters.includeHidden || undefined===header)) {
		parameters.validity = true;
	}
  if(octopusSdk.organisationId && !parameters.organisationId){
    parameters.organisationId = octopusSdk.organisationId;
  }
  if(octopusSdk.rubriqueIdFilter){
		if(!parameters.rubriqueId){
			parameters.rubriqueId = [];
		}
		parameters.rubriqueId = (parameters.rubriqueId as Array<number>).concat(octopusSdk.rubriqueIdFilter);
	}
  return parameters
}
var fetchDataPublic =  async function fetchDataPublic<Type>(moduleName:ModuleApi, wsPath:string): Promise<Type> {
  const url = getApiUrl(moduleName) + wsPath;
  const response = await axios.get(url);
  return response.data;
};
var fetchData =  async function fetchData<Type>(moduleName:ModuleApi, wsPath:string): Promise<Type> {
  const header = await fetchHelper.createAuthenticatedFetchHeader();
  const url = getApiUrl(moduleName) + wsPath;
  const response = await axios.get(url,{headers: header});
  return response.data;
};
var fetchDataPublicWithParams = async function fetchDataPublicWithParams<Type>(moduleName: ModuleApi, wsPath:string, parameters: Parameters): Promise<Type> {
  const params = fetchHelper.getUriSearchParams(parameters);
  const url = getApiUrl(moduleName) + wsPath+ '?' + params.toString();
  const response = await axios.get(url);
  return response.data;
}
var fetchDataWithParams = async function fetchDataWithParams<Type>(moduleName: ModuleApi, wsPath:string, parameters: Parameters, specialTreatement=false): Promise<Type> {
  const header = await fetchHelper.createAuthenticatedFetchHeader();
  if(specialTreatement){
    parameters = adjustParameters(parameters, wsPath.includes('podcast/search'), header);
  }
  if(specialTreatement && wsPath.includes('podcast/search')&& undefined!==header && parameters.includeHidden){
    parameters.includeStatus = ['READY', 'PLANNED', 'PROCESSING', 'ERROR'];
    if (!parameters.notLive) {
      parameters.includeStatus.push('READY_TO_RECORD');
    }
  }
  let params = fetchHelper.getUriSearchParams(parameters).toString();
  const url = getApiUrl(moduleName) + wsPath+ '?' + params;
  const response = await axios.get(url,{headers: header});
  return response.data;
}
var postDataPublic = async function postDataPublic<Type>(moduleName: ModuleApi,wsPath:string, elementToPost: unknown): Promise<Type> {
  const url = getApiUrl(moduleName)+wsPath;
  const response = await axios.post(url,elementToPost,{headers:{'Content-Type': 'application/json; charset=utf-8'} });
  return response.data;
};
var putDataPublic = async function putDataPublic<Type>(moduleName: ModuleApi,wsPath:string, elementToPost: unknown): Promise<Type> {
  const url = getApiUrl(moduleName)+wsPath;
  const response = await axios.put(url,elementToPost,{headers:{'Content-Type': 'application/json; charset=utf-8'} });
  return response.data;
};
export {
  fetchData,
	fetchDataPublic,
  fetchDataWithParams,
  fetchDataPublicWithParams,
  postDataPublic,
  putDataPublic
}