import axios from 'axios';
var fetchHelper = require('../helper/fetch');

var fetchParticipants = function fetchParticipants(apiUrl, parameters) {
  return new Promise((resolve, reject) => {
    const params = fetchHelper.getUriSearchParams(parameters);
    let uri = apiUrl + 'participant/search?' + params.toString();
    axios
      .get(uri)
      .then(function(data) {
        resolve(data.data);
      })
      .catch(error => reject('Error while fetching authentication ' + error));
  });
};

var fetchParticipant = function fetchParticipant(apiUrl, participantId) {
  return new Promise((resolve, reject) => {
    let uri = apiUrl + 'participant/' + participantId;

    axios
      .get(uri)
      .then(function(data) {
        resolve(data.data);
      })
      .catch(error => reject('Error while fetching authentication ' + error));
  });
};

module.exports = {
	fetchParticipants: fetchParticipants,
  fetchParticipant: fetchParticipant,
}