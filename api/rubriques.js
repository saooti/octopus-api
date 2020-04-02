const axios = require('axios');
const fetchHelper = require('../helper/fetch');
const init = require('../helper/init');

var fetchTopics =  function fetchTopics(organisationId) {
	return new Promise((resolve, reject) => {
		if(init.octopusSdk.organisationId && !organisationId){
			organisationId = init.octopusSdk.organisationId;
		}
		let uri = init.octopusSdk.url + 'rubriquage/find/' + organisationId;
		axios
			.get(uri)
			.then(data => {
				resolve(data.data);
			})
			.catch(error => reject('Error while fetching authentication ' + error));
	});
};

var fetchTopic =  function fetchTopic(rubriquageId) {
	return new Promise((resolve, reject) => {
		let uri = init.octopusSdk.url + 'rubriquage/' + rubriquageId;
		axios
			.get(uri)
			.then(data => {
				resolve(data.data);
			})
			.catch(error => reject('Error while fetching authentication ' + error));
	});
};
var fetchRubric =  function fetchRubric(rubriqueId) {
	return new Promise((resolve, reject) => {
		let uri = init.octopusSdk.url + 'rubrique/' + rubriqueId;
		axios
			.get(uri)
			.then(data => {
				resolve(data.data);
			})
			.catch(error => reject('Error while fetching authentication ' + error));
	});
};

var searchRubrics =  function searchRubrics(parameters) {
	return new Promise((resolve, reject) => {
		if(init.octopusSdk.organisationId && !parameters.organisationId){
			parameters.organisationId = init.octopusSdk.organisationId;
		}
		const params = fetchHelper.getUriSearchParams(parameters);
		let uri = init.octopusSdk.url + 'rubrique/search?' + params.toString();
		axios
			.get(uri)
			.then(data => {
				resolve(data.data);
			})
			.catch(error => reject('Error while fetching authentication ' + error));
	});
};

module.exports = {
	fetchTopics: fetchTopics,
	fetchTopic: fetchTopic,
	fetchRubric: fetchRubric,
	searchRubrics: searchRubrics,
}