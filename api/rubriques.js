const axios = require('axios');
const init = require('../helper/init');

var fetchTopics =  function fetchTopics(organisationId) {
	return new Promise((resolve, reject) => {
		let uri = init.octopusSdk.url + 'rubriquage/find/' + organisationId;
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
}