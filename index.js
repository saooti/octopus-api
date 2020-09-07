module.exports = {
	...require('./api/categories'),
	...require('./api/emissions'),
	...require('./api/organisations'),
	...require('./api/participants'),
	...require('./api/podcasts'),
	...require('./api/player'),
	...require('./api/rubriques'),
	...require('./helper/init'),
	...require('./api/playlists'),
};