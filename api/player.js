const axios = require('axios');
const init = require('../helper/init');

var updatePlayerTime = async function updatePlayerTime(downloadId, seconds) {
    let uri = init.octopusSdk.url + 'podcast/listen/' + downloadId + '?seconds=' + seconds;
    const response = await axios.put(uri, null);
    return response.data;
};

var fetchCustomPlayer = async function fetchCustomPlayer(getPlayerPath) {
    let uri = init.octopusSdk.playerUrl + getPlayerPath;
    const response = await axios.get(uri, {
      headers: { 'Content-Type': 'application/json; charset=utf-8'},
    });
    return response.data;
};
module.exports = {
    updatePlayerTime: updatePlayerTime,
    fetchCustomPlayer: fetchCustomPlayer,
}