const requestLiveDownloadId = async function requestLiveDownloadId(podcastId) => {
  let uri = init.octopusSdk.url + 'podcast/prepare/live/' + podcastId;
  const response = await axios.get(uri);
  if(response.data && response.downloadId){
    return response.data.downloadId;
  }
  throw new Error("Invalid live downloadId provided");

}

const markPlayingLive = async function requestLiveDownloadId(downloadId, origin, distributorId) => {
  let uri = init.octopusSdk.url + 'podcast/download/live/' + podcastId+".m3u8";
  let parameters = {}
  if(downloadId){ parameters.downloadId = downloadId}
  if(origin){ parameters.origin = origin}
  if(distributorId){ parameters.distributorId = distributorId}
  const response = await axios.get(uri, params: parameters);
  return response.data;
}

module.exports = {
	requestLiveDownloadId: requestLiveDownloadId,
	markPlayingLive: markPlayingLive,
}