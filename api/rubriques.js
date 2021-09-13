const axios = require('axios');
const fetchHelper = require('../helper/fetch');
const init = require('../helper/init');

var fetchTopics =  async function fetchTopics(organisationId, parameters) {
	if(init.octopusSdk.organisationId && !organisationId){
		organisationId = init.octopusSdk.organisationId;
	}
	let params = "";
	if(parameters){
		params = fetchHelper.getUriSearchParams(parameters);
	}
	let uri = init.octopusSdk.url + 'rubriquage/find/' + organisationId+'?' + params.toString();;
	const response = await axios.get(uri);
  	return response.data;
};

var fetchTopic =  async function fetchTopic(rubriquageId) {
	let uri = init.octopusSdk.url + 'rubriquage/' + rubriquageId;
	const response = await axios.get(uri);
  	return response.data;
};
var fetchRubric =  async function fetchRubric(rubriqueId) {
	let uri = init.octopusSdk.url + 'rubrique/' + rubriqueId;
	const response = await axios.get(uri);
  	return response.data;
};

var searchRubrics =  async function searchRubrics(parameters) {
	if(init.octopusSdk.organisationId && !parameters.organisationId){
		parameters.organisationId = init.octopusSdk.organisationId;
	}
	const params = fetchHelper.getUriSearchParams(parameters);
	let uri = init.octopusSdk.url + 'rubrique/search?' + params.toString();
	const response = await axios.get(uri);
  	return response.data;
};

module.exports = {
	fetchTopics: fetchTopics,
	fetchTopic: fetchTopic,
	fetchRubric: fetchRubric,
	searchRubrics: searchRubrics,
}