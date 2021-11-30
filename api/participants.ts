import { FetchParam } from "../class/fetchParam";
import { Participant } from "../class/participant";

const axios = require('axios');
const fetchHelper = require('../helper/fetch');
const init = require('../helper/init');

var fetchParticipants = async function fetchParticipants(parameters: FetchParam): Promise<{
  count: number;
  result: Array<Participant>;
sort: string;}> {
  const header = await fetchHelper.createAuthenticatedFetchHeader();
  if(init.octopusSdk.organisationId && !parameters.organisationId){
    parameters.organisationId = init.octopusSdk.organisationId;
  }
  const params = fetchHelper.getUriSearchParams(parameters);
  let uri = init.octopusSdk.url + 'participant/search?' + params.toString();
  const response = await axios.get(uri, { headers: { ...header } });
  return response.data;
};

var fetchParticipant = async function fetchParticipant(participantId: string): Promise<Participant> {
  const header = await fetchHelper.createAuthenticatedFetchHeader();
  let uri = init.octopusSdk.url + 'participant/' + participantId;
  const response = await axios.get(uri, { headers: { ...header } });
  return response.data;
};

module.exports ={
	fetchParticipants: fetchParticipants,
  fetchParticipant: fetchParticipant,
}