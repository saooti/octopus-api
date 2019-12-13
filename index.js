var categories = require('./api/categories');
var emissions = require('./api/emissions');
var initialize = require('./api/initialize');
var organisations = require('./api/organisations');
var participants = require('./api/participants');
var podcasts = require('./api/podcasts');

module.exports = {
  categories: categories,
	emissions: emissions,
	initialize: initialize,
	organisations: organisations,
	participants: participants,
	podcasts: podcasts
};