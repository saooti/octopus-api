const axios = require('axios');
const fetchHelper = require('../helper/fetch');
const init = require('../helper/init');

var fetchParticipants = async function fetchParticipants(parameters) {
  if(init.octopusSdk.organisationId && !parameters.organisationId){
    parameters.organisationId = init.octopusSdk.organisationId;
  }
  const params = fetchHelper.getUriSearchParams(parameters);
  let uri = init.octopusSdk.url + 'participant/search?' + params.toString();
  const response = await axios.get(uri);
  return response.data;
};

var fetchParticipant = async function fetchParticipant(participantId) {
  let uri = init.octopusSdk.url + 'participant/' + participantId;
  const response = await axios.get(uri);
  return response.data;
};

module.exports = {
	fetchParticipants: fetchParticipants,
  fetchParticipant: fetchParticipant,
}