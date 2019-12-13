import axios from 'axios';
var fetchHelper = require('../helper/fetch');

var fetchPodcast =  function fetchPodcast(apiUrl, podcastId) {
	return new Promise((resolve, reject) => {
		let uri = apiUrl + 'podcast/' + podcastId;
		axios
			.get(uri)
			.then(data => {
				resolve(data);
			})
			.catch(error => reject('Error while fetching authentication ' + error));
	});
};

var fetchPodcasts = function fetchPodcasts(apiUrl, parameters) {
	return new Promise((resolve, reject) => {
		const params = fetchHelper.getUriSearchParams(parameters);
		let uri = apiUrl + 'podcast/search?' + params.toString();
		axios
			.get(uri)
			.then(data => {
				resolve(data);
			})
			.catch(error => reject('Error while fetching authentication ' + error));
	});
};

module.exports = {
	fetchPodcast: fetchPodcast,
	fetchPodcasts: fetchPodcasts,
}
 