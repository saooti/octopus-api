const axios = require('axios');
const fetchHelper = require('../helper/fetch');
const init = require('../helper/init');

var fetchPodcast =  function fetchPodcast(podcastId) {
	return new Promise((resolve, reject) => {
		let uri = init.octopusSdk.url + 'podcast/' + podcastId;
		axios
			.get(uri)
			.then(data => {
				resolve(data.data);
			})
			.catch(error => reject('Error while fetching authentication ' + error));
	});
};

var fetchPodcasts = function fetchPodcasts(parameters) {
	return new Promise((resolve, reject) => {
		if(init.octopusSdk.organisationId){
			parameters.organisationId = init.octopusSdk.organisationId;
		}
		const params = fetchHelper.getUriSearchParams(parameters);
		let uri = init.octopusSdk.url + 'podcast/search?' + params.toString();
		axios
			.get(uri)
			.then(data => {
				resolve(data.data);
			})
			.catch(error => reject('Error while fetching authentication ' + error));
	});
};

module.exports = {
	fetchPodcast: fetchPodcast,
	fetchPodcasts: fetchPodcasts,
}
 