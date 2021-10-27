import axios from 'axios';
import fetchHelper from '../helper/fetch';
import init from '../helper/init';

var fetchTopics =  async function fetchTopics(organisationId:string|undefined, parameters: any): Promise<any> {
	if(init.octopusSdk.organisationId && !organisationId){
		organisationId = init.octopusSdk.organisationId;
	}
	let params = "";
	if(parameters){
		params = fetchHelper.getUriSearchParams(parameters).toString();
	}
	let uri = init.octopusSdk.url + 'rubriquage/find/' + organisationId+'?' + params;
	const response = await axios.get(uri);
  	return response.data;
};

var fetchTopic =  async function fetchTopic(rubriquageId: any): Promise<any> {
	let uri = init.octopusSdk.url + 'rubriquage/' + rubriquageId;
	const response = await axios.get(uri);
  	return response.data;
};
var fetchRubric =  async function fetchRubric(rubriqueId: any): Promise<any> {
	let uri = init.octopusSdk.url + 'rubrique/' + rubriqueId;
	const response = await axios.get(uri);
  	return response.data;
};

var searchRubrics =  async function searchRubrics(parameters: any): Promise<any> {
	if(init.octopusSdk.organisationId && !parameters.organisationId){
		parameters.organisationId = init.octopusSdk.organisationId;
	}
	const params = fetchHelper.getUriSearchParams(parameters);
	let uri = init.octopusSdk.url + 'rubrique/search?' + params.toString();
	const response = await axios.get(uri);
  	return response.data;
};

export default {
	fetchTopics: fetchTopics,
	fetchTopic: fetchTopic,
	fetchRubric: fetchRubric,
	searchRubrics: searchRubrics,
}