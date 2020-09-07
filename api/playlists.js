const axios = require('axios');
const fetchHelper = require('../helper/fetch');
const init = require('../helper/init');

var fetchPlaylists = async function fetchPlaylists(parameters) {
  if(init.octopusSdk.organisationId && !parameters.organisationId){
    parameters.organisationId = init.octopusSdk.organisationId;
  }
  const params = fetchHelper.getUriSearchParams(parameters);
  let uri = init.octopusSdk.url +'playlist/search?' +params.toString();
  const response = await axios.get(uri);
  return response.data;
};

var fetchPlaylist = async function fetchPlaylist(playlistId) {
  const uri = init.octopusSdk.url + 'playlist/' + playlistId;
  const response = await axios.get(uri);
  return response.data;
};

var fetchPlaylistContent = async function fetchPlaylistContent(playlistId) {
    const uri = init.octopusSdk.url + 'playlist/' + playlistId + '/content';
    const response = await axios.get(uri);
    return response.data;
  };
  

module.exports = {
  fetchPlaylists: fetchPlaylists,
  fetchPlaylist: fetchPlaylist,
  fetchPlaylistContent: fetchPlaylistContent,
}
