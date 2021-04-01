const axios = require('axios');
const fetchHelper = require('../helper/fetch');
const init = require('../helper/init');

var requestLiveDownloadId = async function requestLiveDownloadId(podcastId){
  let uri = init.octopusSdk.url + 'podcast/prepare/live/' + podcastId;
  let response = await axios.put(uri);
  return response.data
}

var markPlayingLive = async function markPlayingLive(podcastId, downloadId, origin, distributorId){
  let uri = init.octopusSdk.url + 'podcast/download/live/' + podcastId+".m3u8";
  let parameters = {};
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
var listConferences = async function listConferences(organisationId, withPodcastId= false,status = undefined) {
  let param = {
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

var getRealConferenceStatus = async function getRealConferenceStatus(conferenceId) {
  let uri = init.octopusSdk.studioUrl + 'conference/realstatus/' + conferenceId;
  const response = await axios.get(uri);
  return response;
}


module.exports = {
	requestLiveDownloadId: requestLiveDownloadId,
	markPlayingLive: markPlayingLive,
  listConferences: listConferences,
  getRealConferenceStatus: getRealConferenceStatus
}