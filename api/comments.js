const axios = require('axios');
const init = require('@saooti/octopus-api/helper/init');
const fetchHelper = require('../helper/fetch');

var postComment =  async function postComment(comment) {
	let data = new FormData();
    for ( var key in comment ) {
      if(comment[key]){
        data.append(key, comment[key]);
      }
    }
	let uri = init.octopusSdk.commentsUrl;
	const response = await axios.post(uri, data ,{headers:{'Content-Type': 'application/json; charset=utf-8'} });
	return response.data;
};

var fetchCommentAnswers =  async function fetchCommentAnswers(commentId) {
	let uri = init.octopusSdk.commentsUrl + commentId;
	const response = await axios.get(uri);
  	return response.data;
};

var fetchComments = async function fetchComments(parameters) {
	const params = fetchHelper.getUriSearchParams(parameters);
	let uri = init.octopusSdk.commentsUrl+'?'+ params.toString();
	const response = await axios.get(uri);
  	return response.data;
};
var fetchComment = async function fetchComment(comId) {
	let uri = init.octopusSdk.commentsUrl+'comment/'+ comId;
	const response = await axios.get(uri);
  	return response.data;
};

var fetchRootComments = async function fetchRootComments(parameters) {
	const params = fetchHelper.getUriSearchParams(parameters);
	let uri = init.octopusSdk.commentsUrl + 'getRootCom?' + params.toString();
	const response = await axios.get(uri);
  	return response.data;
};

module.exports = {
	postComment:postComment,
	fetchCommentAnswers: fetchCommentAnswers,
	fetchComments: fetchComments,
	fetchRootComments: fetchRootComments,
	fetchComment:fetchComment,
}
 