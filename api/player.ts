const axios = require('axios');
const init = require('../helper/init');

var updatePlayerTime = async function updatePlayerTime(downloadId: any, seconds:number): Promise<any> {
    let uri = init.octopusSdk.url + 'podcast/listen/' + downloadId + '?seconds=' + seconds;
    const response = await axios.put(uri, null);
    return response.data;
};

var fetchCustomPlayer = async function fetchCustomPlayer(getPlayerPath:string): Promise<any> {
    let uri = init.octopusSdk.playerUrl + getPlayerPath;
    const response = await axios.get(uri, {
      headers: { 'Content-Type': 'application/json; charset=utf-8'},
    });
    return response.data;
};
export {
    updatePlayerTime,
    fetchCustomPlayer,
}