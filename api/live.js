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

module.exports = {
	requestLiveDownloadId: requestLiveDownloadId,
	markPlayingLive: markPlayingLive,
}