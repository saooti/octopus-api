const axios = require('axios');
const init = require('../helper/init');

var requestLiveDownloadId = async function requestLiveDownloadId(podcastId: any): Promise<any>{
  let uri = init.octopusSdk.url + 'podcast/prepare/live/' + podcastId;
  let response = await axios.put(uri);
  return response.data
}

var markPlayingLive = async function markPlayingLive(podcastId: any, downloadId: any, origin: any, distributorId: any): Promise<any>{
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
var listConferences = async function listConferences(organisationId: string, withPodcastId= false,status = undefined): Promise<any> {
  let param : any= {
    organisationId: organisationId,
    withPodcastId: withPodcastId,
  };
  if (status) {
    param.status = status;
  }
  let uri = init.octopusSdk.studioUrl + 'conference/list';
  const response = await axios.get(uri, { params: param });
  return response.data;
}

var getRealConferenceStatus = async function getRealConferenceStatus(conferenceId: any) : Promise<any>{
  let uri = init.octopusSdk.studioUrl + 'conference/realstatus/' + conferenceId;
  const response = await axios.get(uri);
  return response;
}


module.exports ={
	requestLiveDownloadId: requestLiveDownloadId,
	markPlayingLive: markPlayingLive,
  listConferences: listConferences,
  getRealConferenceStatus: getRealConferenceStatus
}