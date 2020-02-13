const axios = require('axios');
const init = require('../helper/init');

var updatePlayerTime = function updatePlayerTime(downloadId, seconds) {
    return new Promise((resolve, reject) => {
        let uri = init.octopusSdk.url + 'podcast/listen/' + downloadId + '?seconds=' + seconds;
        axios
        .put(uri, null)
        .then(
        data => {
            resolve(data.data);
        },
        error => {
            reject(error);
        }
        );
    });
};

module.exports = {
    updatePlayerTime: updatePlayerTime,
}