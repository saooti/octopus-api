const axios = require('axios');
const init = require('@saooti/octopus-api/helper/init');

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
	let uri = init.octopusSdk.commentsUrl + '/' + commentId;
	const response = await axios.get(uri);
  	return response.data;
};

var fetchComments = async function fetchComments(parameters) {
	let data = new FormData();
    for ( var key in parameters ) {
      if(parameters[key]){
        data.append(key, parameters[key]);
      }
    }
	let uri = init.octopusSdk.commentsUrl;
	const response = await axios.get(uri, data ,{headers:{'Content-Type': 'application/json; charset=utf-8'} });
  	return response.data;
};

var fetchRootComments = async function fetchRootComments(parameters) {
	let data = new FormData();
    for ( var key in parameters ) {
      if(parameters[key]){
        data.append(key, parameters[key]);
      }
    }
	let uri = init.octopusSdk.commentsUrl + 'getRootCom';
	const response = await axios.get(uri, data ,{headers:{'Content-Type': 'application/json; charset=utf-8'}});
  	return response.data;
};

module.exports = {
	postComment:postComment,
	fetchCommentAnswers: fetchCommentAnswers,
	fetchComments: fetchComments,
	fetchRootComments: fetchRootComments,
	updateComment:updateComment
}
 