import { Conference } from "../class/conference";

const axios = require('axios');
const init = require('../helper/init');
const fetchHelper = require('../helper/fetch');

var requestLiveDownloadId = async function requestLiveDownloadId(podcastId: number | undefined): Promise<string | null>{
  let uri = init.octopusSdk.url + 'podcast/prepare/live/' + podcastId;
  let response = await axios.put(uri);
  return response.data
}

var markPlayingLive = async function markPlayingLive(podcastId: number | undefined, downloadId: string | null, origin: string, distributorId: any): Promise<string | null>{
  let uri = init.octopusSdk.url + 'podcast/download/live/' + podcastId+".m3u8";
  let parameters : any= {};
  if(downloadId){
    parameters.downloadId = downloadId;
  }
  if(origin){
    parameters.origin = origin;
  }
  if(distributorId){
    parameters.distributorId = distributorId;
  }
  const response = await axios.get(uri, {params: parameters});
  return response.data;
}
var listConferences = async function listConferences(organisationId: string, withPodcastId= false,status = undefined as string | undefined): Promise<Array<Conference>> {
  const header = await fetchHelper.createAuthenticatedFetchHeader();
  const param = {
    organisationId: organisationId,
    withPodcastId: withPodcastId,
    status: status ? status : undefined,
  };
  let uri = init.octopusSdk.studioUrl + 'conference/list';
  const response = await axios.get(uri, { params: param },{ headers: { ...header } });
  return response.data;
}

var getRealConferenceStatus = async function getRealConferenceStatus(conferenceId: string) : Promise<string>{
  const header = await fetchHelper.createAuthenticatedFetchHeader();
  let uri = init.octopusSdk.studioUrl + 'conference/realstatus/' + conferenceId;
  const response = await axios.get(uri, { headers: { ...header } });
  return response;
}


export {
	requestLiveDownloadId,
	markPlayingLive,
  listConferences,
  getRealConferenceStatus
}