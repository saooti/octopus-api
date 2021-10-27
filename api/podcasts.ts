import axios from 'axios';
import fetchHelper from '../helper/fetch';
import init from '../helper/init';

var fetchPodcast =  async function fetchPodcast(podcastId: any): Promise<any> {
	let uri = init.octopusSdk.url + 'podcast/' + podcastId;
	const response = await axios.get(uri);
  	return response.data;
};

var fetchPodcasts = async function fetchPodcasts(parameters: any): Promise<any> {
	parameters.validity=true;
	if(init.octopusSdk.organisationId && !parameters.organisationId){
		parameters.organisationId = init.octopusSdk.organisationId;
	}
	const params = fetchHelper.getUriSearchParams(parameters);
	let uri = init.octopusSdk.url + 'podcast/search?' + params.toString();
	const response = await axios.get(uri);
  	return response.data;
};
var fetchLives = async function fetchLives(parameters: any): Promise<any> {
	if(init.octopusSdk.organisationId && !parameters.organisationId){
		parameters.organisationId = init.octopusSdk.organisationId;
	}
	const params = fetchHelper.getUriSearchParams(parameters);
	let uri = init.octopusSdk.url + 'podcast/search?' + params.toString() + '&includeStatus=READY_TO_RECORD';
	const response = await axios.get(uri);
  	return response.data;
};

export default {
	fetchPodcast: fetchPodcast,
	fetchPodcasts: fetchPodcasts,
	fetchLives: fetchLives,
}
 