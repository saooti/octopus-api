const axios = require('axios');
const fetchHelper = require('../helper/fetch');
const init = require('../helper/init');

var fetchPodcast =  async function fetchPodcast(podcastId) {
	let uri = init.octopusSdk.url + 'podcast/' + podcastId;
	const response = await axios.get(uri);
  	return response.data;
};

var fetchPodcasts = async function fetchPodcasts(parameters) {
	if(init.octopusSdk.organisationId && !parameters.organisationId){
		parameters.organisationId = init.octopusSdk.organisationId;
	}
	const params = fetchHelper.getUriSearchParams(parameters);
	let uri = init.octopusSdk.url + 'podcast/search?' + params.toString();
	const response = await axios.get(uri);
  	return response.data;
};
var fetchLives = async function fetchLives(parameters) {
	if(init.octopusSdk.organisationId && !parameters.organisationId){
		parameters.organisationId = init.octopusSdk.organisationId;
	}
	const params = fetchHelper.getUriSearchParams(parameters);
	let uri = init.octopusSdk.url + 'podcast/search?' + params.toString() + '&includeStatus=READY_TO_RECORD';
	const response = await axios.get(uri);
  	return response.data;
};

module.exports = {
	fetchPodcast: fetchPodcast,
	fetchPodcasts: fetchPodcasts,
	fetchLives: fetchLives,
}
 