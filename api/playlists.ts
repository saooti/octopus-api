import axios from 'axios';
import fetchHelper from '../helper/fetch';
import init from '../helper/init';

var fetchPlaylists = async function fetchPlaylists(parameters: any): Promise<any> {
  if(init.octopusSdk.organisationId && !parameters.organisationId){
    parameters.organisationId = init.octopusSdk.organisationId;
  }
  const params = fetchHelper.getUriSearchParams(parameters);
  let uri = init.octopusSdk.url +'playlist/search?' +params.toString();
  const response = await axios.get(uri);
  return response.data;
};

var fetchPlaylist = async function fetchPlaylist(playlistId: any): Promise<any> {
  const uri = init.octopusSdk.url + 'playlist/' + playlistId;
  const response = await axios.get(uri);
  return response.data;
};

var fetchPlaylistContent = async function fetchPlaylistContent(playlistId: any): Promise<any> {
    const uri = init.octopusSdk.url + 'playlist/' + playlistId + '/content';
    const response = await axios.get(uri);
    return response.data;
  };
  

export default {
  fetchPlaylists: fetchPlaylists,
  fetchPlaylist: fetchPlaylist,
  fetchPlaylistContent: fetchPlaylistContent,
}
