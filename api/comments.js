const axios = require('axios');
const init = require('@saooti/octopus-api/helper/init');
const fetchHelper = require('../helper/fetch');

var postComment =  async function postComment(comment) {
	let uri = init.octopusSdk.commentsUrl + "/unregisteredComment";
	const response = await axios.post(uri, comment ,{headers:{'Content-Type': 'application/json; charset=utf-8'} });
	return response.data;
};

var fetchCommentAnswers =  async function fetchCommentAnswers(commentId) {
	let uri = init.octopusSdk.commentsUrl + commentId;
	const response = await axios.get(uri);
  	return response.data;
};

var fetchComments = async function fetchComments(parameters) {
	let uri = init.octopusSdk.commentsUrl ;
	const response = await axios.post(uri,  parameters,
		{headers: { 'content-type': 'application/json' }
	  });
  	return response.data;
};
var fetchComment = async function fetchComment(comId) {
	let uri = init.octopusSdk.commentsUrl+'comment/'+ comId;
	const response = await axios.get(uri);
  	return response.data;
};

var fetchRootComments = async function fetchRootComments(parameters) {
	let uri = init.octopusSdk.commentsUrl + 'getRootCom';
	const response = await axios.post(uri,  parameters,
	{headers: { 'content-type': 'application/json' }
	});
	return response.data;
};

module.exports = {
	postComment:postComment,
	fetchCommentAnswers: fetchCommentAnswers,
	fetchComments: fetchComments,
	fetchRootComments: fetchRootComments,
	fetchComment:fetchComment,
}
 