const axios = require('axios');
const fetchHelper = require('../helper/fetch');

var updatePlayerTime = function updatePlayerTime(downloadId, seconds) {
    return new Promise((resolve, reject) => {
    fetchHelper.createAuthenticatedFetchHeader().then(
        header => {
            let uri = init.octopusSdk.url + 'podcast/listen/' + downloadId + '?seconds=' + seconds;
            axios
            .put(uri, null, {headers: header})
            .then(
            data => {
                console.log(data.data);
            },
            error => {
                reject(error);
            }
            );
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