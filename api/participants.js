const axios = require('axios');
const fetchHelper = require('../helper/fetch');
const init = require('../helper/init');

var fetchParticipants = function fetchParticipants(parameters) {
  return new Promise((resolve, reject) => {
    if(init.octopusSdk.organisationId){
      parameters.organisationId = init.octopusSdk.organisationId;
    }
    const params = fetchHelper.getUriSearchParams(parameters);
    let uri = init.octopusSdk.url + 'participant/search?' + params.toString();
    axios
      .get(uri)
      .then(function(data) {
        resolve(data.data);
      })
      .catch(error => reject('Error while fetching authentication ' + error));
  });
};

var fetchParticipant = function fetchParticipant(participantId) {
  return new Promise((resolve, reject) => {
    let uri = init.octopusSdk.url + 'participant/' + participantId;

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