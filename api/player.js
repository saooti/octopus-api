const axios = require('axios');
const init = require('../helper/init');

var updatePlayerTime = async function updatePlayerTime(downloadId, seconds) {
    let uri = init.octopusSdk.url + 'podcast/listen/' + downloadId + '?seconds=' + seconds;
    const response = await axios.put(uri, null);
    return response.data;
};

module.exports = {
    updatePlayerTime: updatePlayerTime,
}