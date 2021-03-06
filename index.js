module.exports = {
	...require('./api/categories'),
	...require('./api/emissions'),
	...require('./api/organisations'),
	...require('./api/participants'),
	...require('./api/live'),
	...require('./api/podcasts'),
	...require('./api/player'),
	...require('./api/rubriques'),
	...require('./helper/init'),
	...require('./api/playlists'),
	...require('./api/comments'),
};