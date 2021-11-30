import { FetchParam } from "../class/fetchParam";
import { Playlist } from "../class/playlist";
import { Podcast } from "../class/podcast";

const axios = require('axios');
const fetchHelper = require('../helper/fetch');
const init = require('../helper/init');

var fetchPlaylists = async function fetchPlaylists(parameters: FetchParam): Promise<{
  count: number;
  result: Array<Playlist>;
sort: string;}> {
  const header = await fetchHelper.createAuthenticatedFetchHeader();
  if(init.octopusSdk.organisationId && !parameters.organisationId){
    parameters.organisationId = init.octopusSdk.organisationId;
  }
  const params = fetchHelper.getUriSearchParams(parameters);
  let uri = init.octopusSdk.url +'playlist/search?' +params.toString();
  const response = await axios.get(uri, { headers: { ...header } });
  return response.data;
};

var fetchPlaylist = async function fetchPlaylist(playlistId: string): Promise<Playlist> {
  const header = await fetchHelper.createAuthenticatedFetchHeader();
  const uri = init.octopusSdk.url + 'playlist/' + playlistId;
  const response = await axios.get(uri, { headers: { ...header } });
  return response.data;
};

var fetchPlaylistContent = async function fetchPlaylistContent(playlistId: string): Promise<Array<Podcast>> {
  const header = await fetchHelper.createAuthenticatedFetchHeader();  
  const uri = init.octopusSdk.url + 'playlist/' + playlistId + '/content';
  const response = await axios.get(uri, { headers: { ...header } });
  return response.data;
};
  

export {
  fetchPlaylists,
  fetchPlaylist,
  fetchPlaylistContent,
}
