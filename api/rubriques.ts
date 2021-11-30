import { FetchParam } from "../class/fetchParam";
import { Rubriquage } from "../class/rubriquage";
import { Rubrique } from "../class/rubrique";

const axios = require('axios');
const fetchHelper = require('../helper/fetch');
const init = require('../helper/init');

var fetchTopics =  async function fetchTopics(organisationId:string|undefined, parameters: FetchParam|undefined): Promise<Array<Rubriquage>> {
	const header = await fetchHelper.createAuthenticatedFetchHeader();
	if(init.octopusSdk.organisationId && !organisationId){
		organisationId = init.octopusSdk.organisationId;
	}
	let params = "";
	if(parameters){
		params = fetchHelper.getUriSearchParams(parameters).toString();
	}
	let uri = init.octopusSdk.url + 'rubriquage/find/' + organisationId+'?' + params;
	const response = await axios.get(uri, { headers: { ...header } });
  	return response.data;
};

var fetchTopic =  async function fetchTopic(rubriquageId: number | undefined): Promise<Rubriquage> {
	const header = await fetchHelper.createAuthenticatedFetchHeader();
	let uri = init.octopusSdk.url + 'rubriquage/' + rubriquageId;
	const response = await axios.get(uri, { headers: { ...header } });
  	return response.data;
};
var fetchRubric =  async function fetchRubric(rubriqueId: number | undefined): Promise<Rubrique> {
	const header = await fetchHelper.createAuthenticatedFetchHeader();
	let uri = init.octopusSdk.url + 'rubrique/' + rubriqueId;
	const response = await axios.get(uri, { headers: { ...header } });
  	return response.data;
};

var searchRubrics =  async function searchRubrics(parameters: FetchParam|undefined): Promise<Array<Rubrique>> {
	const header = await fetchHelper.createAuthenticatedFetchHeader();
	if(init.octopusSdk.organisationId && !parameters.organisationId){
		parameters.organisationId = init.octopusSdk.organisationId;
	}
	const params = fetchHelper.getUriSearchParams(parameters);
	let uri = init.octopusSdk.url + 'rubrique/search?' + params.toString();
	const response = await axios.get(uri, { headers: { ...header } });
  	return response.data;
};

export {
	fetchTopics,
	fetchTopic,
	fetchRubric,
	searchRubrics,
}