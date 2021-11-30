import { FetchParam } from "../class/fetchParam";
import { Podcast } from "../class/podcast";

const axios = require('axios');
const fetchHelper = require('../helper/fetch');
const init = require('../helper/init');

var fetchPodcast =  async function fetchPodcast(podcastId: string): Promise<Podcast> {
	const header = await fetchHelper.createAuthenticatedFetchHeader();
	let uri = init.octopusSdk.url + 'podcast/' + podcastId;
	const response = await axios.get(uri, {
	headers: { 'Content-Type': 'application/json; charset=utf-8', ...header },
	});
	return response.data;
};
var fetchPodcasts = async function fetchPodcasts(parameters: FetchParam, notLive = false as boolean):Promise<{
    count: number;
    result: Array<Podcast>;
  	sort: string;}>{
	const header = await fetchHelper.createAuthenticatedFetchHeader();
	if (!parameters.includeHidden || undefined===header) {
		parameters.validity = true;
	}
	if(init.octopusSdk.organisationId && !parameters.organisationId){
		parameters.organisationId = init.octopusSdk.organisationId;
	}
    let params = fetchHelper.getUriSearchParams(parameters).toString();
    if (parameters.includeHidden && undefined!==header) {
		const paramString = [params];
		paramString.push(
			'&includeStatus=READY&includeStatus=PLANNED&includeStatus=PROCESSING&includeStatus=ERROR'
		);
		if (!notLive) {
			paramString.push('&includeStatus=READY_TO_RECORD');
		}
		params = paramString.join('');
    }
	const uri = init.octopusSdk.url + 'podcast/search?' + params;
    const response = await axios.get(uri, {
      headers: { 'Content-Type': 'application/json; charset=utf-8', ...header },
    });
    return response.data;
};

var fetchLives = async function fetchLives(parameters: FetchParam): Promise<{
    count: number;
    result: Array<Podcast>;
  	sort: string;}> {
	const header = await fetchHelper.createAuthenticatedFetchHeader();
	if(init.octopusSdk.organisationId && !parameters.organisationId){
		parameters.organisationId = init.octopusSdk.organisationId;
	}
	const params = fetchHelper.getUriSearchParams(parameters);
	let uri = init.octopusSdk.url + 'podcast/search?' + params.toString() + '&includeStatus=READY_TO_RECORD';
	const response = await axios.get(uri, {
	headers: { 'Content-Type': 'application/json; charset=utf-8', ...header },
	});
	return response.data;
};

module.exports = {
	fetchPodcast: fetchPodcast,
	fetchPodcasts: fetchPodcasts,
	fetchLives: fetchLives,
}
 